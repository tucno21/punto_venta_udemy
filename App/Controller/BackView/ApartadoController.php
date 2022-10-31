<?php

namespace App\Controller\BackView;

use System\Controller;
use App\Model\Clientes;
use App\Model\Apartados;
use App\Model\Productos;
use App\Model\Inventarios;

class ApartadoController extends Controller
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
        $apartados = Apartados::listarTodo();
        // dd($result);
        if (is_object($apartados)) {
            $apartados = [$apartados];
        }
        // dd($apartados);
        return view('apartados/index', [
            'var' => 'es una variable',
            'apartados' => $apartados,
        ]);
    }

    public function create()
    {
        return view('apartados/create', [
            'var' => 'es una variable',
        ]);
    }

    public function store()
    {
        $data = $_POST;
        $productos = json_decode($data['productos'], true);

        foreach ($productos as $producto) {
            $info = Productos::where('id', $producto['id'])->first();
            $info->cantidad = $info->cantidad - $producto['cantidad'];
            Productos::update($producto['id'], ['cantidad' => $info->cantidad]);
        }

        $result = Apartados::create($data);

        if ($result->status) {
            $compra = Apartados::where('id', $result->id)->first();
            foreach (json_decode($compra->productos, true) as $producto) {
                $data = [
                    'movimiento' => 'Apartado N° ' . $compra->id,
                    'accion' => 'salida',
                    'cantidad' => $producto['cantidad'],
                    'id_producto' => $producto['id'],
                    'id_usuario' => session()->user()->id,
                ];
                Inventarios::create($data);
            }

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
        $data = $_POST;
        $info = Apartados::where('id', $data['id'])->first();
        $result = Apartados::update($info->id, ['estado' => 0, 'abono' => $info->total]);

        if ($result->status) {
            //json ok
            $response = ['status' => true, 'message' => 'Registro actualizado'];
            echo json_encode($response, JSON_UNESCAPED_UNICODE);
            exit;
        } else {
            $response = ['status' => false, 'message' => 'Error al registrar'];
            echo json_encode($response, JSON_UNESCAPED_UNICODE);
            exit;
        }
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

    public function listar()
    {
        $result = Apartados::listar();
        // dd($result);
        if (is_object($result)) {
            $result = [$result];
        }

        foreach ($result as $key => $value) {
            //agregar start para fullcalendar
            $value->title = $value->nombre;
            $value->start = $value->fecha_apartado;
            $value->end = $value->fecha_retiro;
        }

        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }

    public function apartadoid()
    {
        $data = $this->request()->getInput();
        $result = Apartados::apartadoId($data->id);
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }
}
