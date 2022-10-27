<?php

namespace App\Controller\BackView;

use App\Model\Medidas;
use System\Controller;
use App\Model\Productos;
use App\Model\Categorias;
use Intervention\Image\ImageManagerStatic as Image;

class ProductoController extends Controller
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
        // $productos = [];
        $productos = Productos::select('productos.id', 'productos.codigo, productos.descripcion', 'productos.precio_compra', 'productos.precio_venta', 'productos.foto, productos.cantidad', 'productos.estado', 'categorias.categoria')
            ->join('categorias', 'productos.id_categoria', '=', 'categorias.id')
            ->get();
        // dd($productos);
        //cuando viene un solo objeto
        if (is_object($productos)) {
            $productos = [$productos];
        }

        return view('productos/index', [
            'titleGlobal' => 'Productos',
            'productos' => $productos,
        ]);
    }

    public function create()
    {
        $status = 1;

        $medidas = Medidas::where('estado', $status)->get();
        if (is_object($medidas)) {
            $medidas = [$medidas];
        }

        $categorias = Categorias::where('estado', $status)->get();
        if (is_object($categorias)) {
            $categorias = [$categorias];
        }

        return view('productos/create', [
            'titleGlobal' => 'Productos',
            'medidas' => $medidas,
            'categorias' => $categorias,
        ]);
    }

    public function store()
    {
        $data = $this->request()->getInput();

        $valid = $this->validate($data, [
            'codigo' => 'required',
            'descripcion' => 'required',
            'precio_compra' => 'required',
            'precio_venta' => 'required',
            'id_medida' => 'required',
            'id_categoria' => 'required',
            'foto' => 'requiredFile',
        ]);
        if ($valid !== true) {
            return back()->route('productos.create', [
                'err' =>  $valid,
                'data' => $data,
            ]);
        } else {

            if (!empty($data->foto["tmp_name"])) {
                //generar nombre unico para la imagen
                $nameFoto = md5(uniqid(rand(), true)) . '.png';
                //modificar imagen
                $imageFoto = Image::make($data->foto['tmp_name'])->fit(200, 200);
                //agregar al objeto
                $data->foto = $nameFoto;

                //guardar imagen
                if (!is_dir(DIR_IMG)) {
                    mkdir(DIR_IMG);
                }

                $imageFoto->save(DIR_IMG . $nameFoto);
            } else {
                $data->foto = null;
            }

            Productos::create($data);
            session()->flash('successMessage', 'El producto se guardo correctamente');
            return redirect()->route('productos.index');
        }
    }

    public function edit()
    {
        $status = 1;

        $id = $this->request()->getInput();

        if (empty((array)$id)) {
            $pro = null;
        } else {
            $pro = Productos::first($id->id);
        }

        $medidas = Medidas::where('estado', $status)->get();
        if (is_object($medidas)) {
            $medidas = [$medidas];
        }

        $categorias = Categorias::where('estado', $status)->get();
        if (is_object($categorias)) {
            $categorias = [$categorias];
        }

        return view('productos.edit', [
            'data' => $pro,
            'medidas' => $medidas,
            'categorias' => $categorias,
        ]);
    }

    public function update()
    {
        $data = $this->request()->getInput();
        $valid = $this->validate($data, [
            'codigo' => 'required',
            'descripcion' => 'required',
            'precio_compra' => 'required',
            'precio_venta' => 'required',
            'id_medida' => 'required',
            'id_categoria' => 'required',
        ]);

        if ($valid !== true) {
            return back()->route('productos.edit', [
                'err' =>  $valid,
                'data' => $data,
            ]);
        } else {

            if (!empty($data->foto["tmp_name"])) {
                //generar nombre unico para la imagen
                $nameFoto = md5(uniqid(rand(), true)) . '.png';
                //modificar imagen
                $imageFoto = Image::make($data->foto['tmp_name'])->fit(200, 200);
                //agregar al objeto
                $data->foto = $nameFoto;

                $fotoProducto = Productos::first($data->id);
                //eliminar imagen anterior
                $photoExists = file_exists(DIR_IMG . $fotoProducto->foto);
                if ($photoExists) {
                    unlink(DIR_IMG . $fotoProducto->foto);
                }

                //guardar imagen
                if (!is_dir(DIR_IMG)) {
                    mkdir(DIR_IMG);
                }

                $imageFoto->save(DIR_IMG . $nameFoto);
            } else {
                $data->foto = null;
            }

            Productos::update($data->id, $data);
            session()->flash('successMessage', 'El producto se actualizo correctamente');
            return redirect()->route('productos.index');
        }
    }

    public function destroy()
    {
        $data = $this->request()->getInput();
        $result = Productos::delete((int)$data->id);
        session()->flash('successMessage', 'El producto se elimino correctamente');
        return redirect()->route('productos.index');
    }

    public function status()
    {
        $data = $this->request()->getInput();
        Productos::update($data->iduser, $data);
        session()->flash('successMessage', 'Se cambio es estado correctamente');
        return redirect()->route('productos.index');
    }
}
