<?php

namespace App\Controller\BackView;

use DateTime;
use Dompdf\Dompdf;
use System\Controller;
use App\Model\Clientes;
use App\Model\Productos;
use App\Model\Cotizaciones;
use App\Model\Configuracion;

class CotizacionController extends Controller
{
    public function __construct()
    {
        //enviar 'auth' si ha creado session sin clave de lo contrario enviar la clave
        $this->middleware('auth');
        //enviar el nombre de la ruta
        //$this->except(['users', 'users.create'])->middleware('loco');
    }

    public function index()
    {
        $ventas = Cotizaciones::select('cotizaciones.id', 'cotizaciones.created_at, cotizaciones.total', 'cotizaciones.validez',  'clientes.nombre')
            ->join('clientes', 'cotizaciones.id_cliente', '=', 'clientes.id')
            ->orderBy('id', 'desc')
            ->get();
        // dd($ventas);
        //cuando viene un solo objeto
        if (is_object($ventas)) {
            $ventas = [$ventas];
        }

        foreach ($ventas as $venta) {
            //fecha
            $fecha = date('d-m-Y', strtotime($venta->created_at));
            //add $venta
            $venta->fecha = $fecha;
            //hora
            $hora = date('H:i:s', strtotime($venta->created_at));
            //add $venta
            $venta->hora = $hora;

            //validez 5 dias sumar a $venta->fecha
            $validez = date('d-m-Y', strtotime($venta->created_at . ' +' . $venta->validez . ' days'));
            $fecha_vencimiento = strtotime($validez);
            $fecha_actual = strtotime(date("d-m-Y", time()));

            if ($fecha_actual > $fecha_vencimiento) {
                $venta->estadofecha = 0;
            } else {
                $venta->estadofecha = 1;
            }
        }

        return view('cotizaciones/index', [
            'titleGlobal' => 'cotizaciones',
            'ventas' => $ventas,
        ]);
    }

    public function create()
    {
        return view('cotizaciones/create', [
            'titleGlobal' => 'cotizaciones',
        ]);
    }

    public function store()
    {
        $data  = $_POST;

        $result = Cotizaciones::create($data);

        if ($result->status) {
            //json ok
            $response = ['status' => true, 'message' => $result->id];
            echo json_encode($response, JSON_UNESCAPED_UNICODE);
            exit;
        } else {
            $response = ['status' => false, 'message' => 'Error al registrar'];
            echo json_encode($response, JSON_UNESCAPED_UNICODE);
            exit;
        }
    }

    public function edit()
    {
        $id = $this->request()->getInput();

        // if (empty((array)$id)) {
        //     $rol = null;
        // } else {
        //     $rol = Model::first($id->id);
        // }
        // return view('folder.file', [
        //     'data' => $rol,
        // ]);
    }

    public function update()
    {
        $data = $this->request()->getInput();
        // $valid = $this->validate($data, [
        //     'name' => 'required',
        // ]);

        // if ($valid !== true) {
        //     return back()->route('route.name', [
        //         'err' =>  $valid,
        //         'data' => $data,
        //     ]);
        // } else {
        //     Model::update($data->id, $data);
        //     return redirect()->route('route.name');
        // }
    }

    public function destroy()
    {
        $data = $this->request()->getInput();
        //$result = Model::delete((int)$data->id);
        //return redirect()->route('route.name');
    }

    public function barcode()
    {
        $data = $this->request()->getInput();
        $result = Productos::where('codigo', $data->barcode)->get();

        $response = ['status' => false, 'data' => ''];
        if (!empty($result)) {
            $response['status'] = true;
            $response['data'] = $result;
        }

        echo json_encode($response, JSON_UNESCAPED_UNICODE);
    }

    public function buscarnombre()
    {
        $data = $this->request()->getInput();
        $result = Productos::where('descripcion', 'like', '%' . $data->term . '%')->get();

        if (is_object($result)) {
            $result = [$result];
        }

        $array = [];
        foreach ($result as $key => $value) {
            $response['id'] = $value->id;
            $response['label'] = $value->descripcion;
            $response['precio'] = $value->precio_venta;
            array_push($array, $response);
        }

        echo json_encode($array, JSON_UNESCAPED_UNICODE);
    }

    public function cantProducto()
    {
        $data = $this->request()->getInput();
        $result = Productos::where('id', $data->id)->first();
        // dd($result);

        $response = ['cant' => $result->cantidad];
        echo json_encode($response, JSON_UNESCAPED_UNICODE);
    }

    public function cliente()
    {
        $data = $this->request()->getInput();
        $result = Clientes::busquedaJquery($data->term);

        if (is_object($result)) {
            $result = [$result];
        }

        $array = [];
        foreach ($result as $key => $value) {
            $response['id'] = $value->id;
            $response['label'] = $value->num_identidad . ' ' . $value->nombre;
            $response['nombre'] = $value->nombre;
            $response['telefono'] = $value->telefono;
            $response['num_identidad'] = $value->num_identidad;
            array_push($array, $response);
        }

        echo json_encode($array, JSON_UNESCAPED_UNICODE);
    }

    public function pdfCotizacion()
    {
        $data = $this->request()->getInput();

        $empresa = Configuracion::get();
        $venta = Cotizaciones::datoCotizacion($data->id);

        // dd($venta);
        //$venta es array vacio
        if (empty($venta)) {
            echo 'no hay datos';
            exit;
        }
        $title = 'reporte de cotización';

        ob_start();
        if ($data->tipo == 'ticket') {
            view('cotizaciones/ticket', [
                'venta' => $venta,
                'empresa' => $empresa,
                'title' => $title,
            ]);
        } else if ($data->tipo == 'factura') {
            view('cotizaciones/factura', [
                'venta' => $venta,
                'empresa' => $empresa,
                'title' => $title,
            ]);
        } else {
            echo 'documento no valido';
            exit;
        }
        $html = ob_get_clean();

        $dompdf = new Dompdf();

        $options = $dompdf->getOptions();
        $options->set('isJavascriptEnabled', true);
        $options->set('isRemoteEnabled', true);
        $dompdf->setOptions($options);

        $dompdf->loadHtml($html);

        if ($data->tipo == 'ticket') {
            $dompdf->setPaper(array(0, 0, 222, 841), 'portrait');
        } else if ($data->tipo == 'factura') {
            // $dompdf->setPaper('A4', 'landscape');
            $dompdf->setPaper('A4', 'vertical');
        }

        $dompdf->render();

        if ($data->tipo == 'ticket') {
            $dompdf->stream('ticket.pdf', ['Attachment' => false]);
        } else if ($data->tipo == 'factura') {
            $dompdf->stream('cotizacion_' . $venta->id . '.pdf', ['Attachment' => false]);
        }
        exit;
    }
}
