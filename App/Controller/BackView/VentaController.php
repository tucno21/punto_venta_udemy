<?php

namespace App\Controller\BackView;

use Dompdf\Dompdf;
use App\Model\Ventas;
use System\Controller;
use App\Model\Clientes;
use App\Model\Creditos;
use App\Model\Productos;
use App\Model\Configuracion;

class VentaController extends Controller
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
        $ventas = Ventas::select('ventas.id', 'ventas.created_at, ventas.total', 'ventas.serie, ventas.estado, ventas.metodo',  'clientes.nombre')
            ->join('clientes', 'ventas.id_cliente', '=', 'clientes.id')
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
        }

        return view('ventas/index', [
            'titleGlobal' => 'Ventas Punto de venta',
            'ventas' => $ventas,
        ]);
    }

    public function create()
    {
        return view('ventas/create', [
            'titleGlobal' => 'Ventas Punto de venta',
        ]);
    }

    public function store()
    {
        $data  = $_POST;

        $productos = json_decode($data['productos'], true);

        foreach ($productos as $producto) {
            $info = Productos::where('id', $producto['id'])->first();
            $info->cantidad = $info->cantidad - $producto['cantidad'];
            Productos::update($producto['id'], ['cantidad' => $info->cantidad]);
        }

        $result = Ventas::create($data);
        //traer ventas 
        $venta = Ventas::where('id', $result->id)->first();

        if ($venta->metodo == 'CREDITO') {
            $credito = [
                'monto' => $venta->total,
                'id_venta' => $venta->id,
            ];
            Creditos::create($credito);
        }

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
        $venta = Ventas::where('id', $data->id)->first();

        $productos = json_decode($venta->productos, true);

        $result;
        foreach ($productos as $producto) {
            $info = Productos::where('id', $producto['id'])->first();
            $info->cantidad = $info->cantidad + $producto['cantidad'];
            $result = Productos::update($producto['id'], ['cantidad' => $info->cantidad]);
        }

        $cambio = Ventas::update($venta->id, ['estado' => 0]);
        session()->flash('successMessage', 'Se ha anulado la ventas');
        return redirect()->route('ventas.index');
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

    public function cantProducto()
    {
        $data = $this->request()->getInput();
        $result = Productos::where('id', $data->id)->first();
        // dd($result);

        $response = ['cant' => $result->cantidad];
        echo json_encode($response, JSON_UNESCAPED_UNICODE);
    }

    public function pdfVenta()
    {
        $data = $this->request()->getInput();

        $empresa = Configuracion::get();
        $venta = Ventas::datoVenta($data->id);

        // dd($venta);
        //$venta es array vacio
        if (empty($venta)) {
            echo 'no hay datos';
            exit;
        }
        $title = 'reporte de compra';

        if ($data->tipo == 'ticket') {
            view('ventas/ticket', [
                'venta' => $venta,
                'empresa' => $empresa,
                'title' => $title,
            ]);
        } else if ($data->tipo == 'factura') {
            view('ventas/factura', [
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
            $dompdf->stream('ticket_' . $venta->serie . '.pdf', ['Attachment' => false]);
        } else if ($data->tipo == 'factura') {
            $dompdf->stream('factura_' . $venta->serie . '.pdf', ['Attachment' => false]);
        }
        exit;
    }
}
