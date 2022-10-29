<?php

namespace App\Controller\BackView;

use Dompdf\Dompdf;
use App\Model\Compras;
use System\Controller;
use App\Model\Productos;
use App\Model\Proveedores;
use App\Model\Configuracion;

class CompraController extends Controller
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
        // $compras = Compras::get();
        $compras = Compras::select('compras.id', 'compras.created_at, compras.total', 'compras.serie, compras.estado',  'proveedor.nombre')
            ->join('proveedor', 'compras.id_proveedor', '=', 'proveedor.id')
            ->orderBy('id', 'desc')
            ->get();
        // dd($compras);
        //cuando viene un solo objeto
        if (is_object($compras)) {
            $compras = [$compras];
        }

        foreach ($compras as $compra) {
            //fecha
            $fecha = date('d-m-Y', strtotime($compra->created_at));
            //add $compra
            $compra->fecha = $fecha;
            //hora
            $hora = date('H:i:s', strtotime($compra->created_at));
            //add $compra
            $compra->hora = $hora;
        }

        return view('compras/index', [
            'titleGlobal' => 'Categorias',
            'compras' => $compras,
        ]);
    }

    public function create()
    {
        return view('compras/create', [
            'titleGlobal' => 'Categorias',
        ]);
    }

    public function store()
    {
        // $data = $this->request()->getInput();
        // global post
        $data  = $_POST;

        $productos = json_decode($data['productos'], true);

        foreach ($productos as $producto) {
            $info = Productos::where('id', $producto['id'])->first();
            $info->cantidad = $info->cantidad + $producto['cantidad'];
            Productos::update($producto['id'], ['cantidad' => $info->cantidad]);
        }

        $result = Compras::create($data);

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
        $compra = Compras::where('id', $data->id)->first();

        $productos = json_decode($compra->productos, true);

        $result;
        foreach ($productos as $producto) {
            $info = Productos::where('id', $producto['id'])->first();
            $info->cantidad = $info->cantidad - $producto['cantidad'];
            $result = Productos::update($producto['id'], ['cantidad' => $info->cantidad]);
        }

        $cambio = Compras::update($compra->id, ['estado' => 0]);
        session()->flash('successMessage', 'Se ha anulado la compra');
        return redirect()->route('compras.index');
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
            $response['precio'] = $value->precio_compra;
            array_push($array, $response);
        }

        echo json_encode($array, JSON_UNESCAPED_UNICODE);
    }

    public function proveedor()
    {
        $data = $this->request()->getInput();
        // $result = Proveedores::where('nombre', 'like', '%' . $data->term . '%')->get();
        $result = Proveedores::busquedaJquery($data->term);

        if (is_object($result)) {
            $result = [$result];
        }

        $array = [];
        foreach ($result as $key => $value) {
            $response['id'] = $value->id;
            $response['label'] = $value->ruc . ' ' . $value->nombre;
            $response['nombre'] = $value->nombre;
            $response['telefono'] = $value->telefono;
            $response['direccion'] = $value->direccion;
            array_push($array, $response);
        }

        echo json_encode($array, JSON_UNESCAPED_UNICODE);
    }

    public function pdfCompra()
    {
        $data = $this->request()->getInput();

        $empresa = Configuracion::get();
        $compra = Compras::datoCompra($data->id);
        // dd($compra);
        //$compra es array vacio
        if (empty($compra)) {
            echo 'no hay datos';
            exit;
        }
        $title = 'reporte de compra';

        if ($data->tipo == 'ticket') {
            view('compras/ticket', [
                'compra' => $compra,
                'empresa' => $empresa,
                'title' => $title,
            ]);
        } else if ($data->tipo == 'factura') {
            view('compras/factura', [
                'compra' => $compra,
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
            $dompdf->stream('ticket_' . $compra->serie . '.pdf', ['Attachment' => false]);
        } else if ($data->tipo == 'factura') {
            $dompdf->stream('factura_' . $compra->serie . '.pdf', ['Attachment' => false]);
        }
        exit;
    }
}
