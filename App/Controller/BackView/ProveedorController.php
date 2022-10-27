<?php

namespace App\Controller\BackView;

use System\Controller;
use App\Model\Proveedores;

class ProveedorController extends Controller
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
        $proveedores = Proveedores::get();
        //cuando viene un solo objeto
        if (is_object($proveedores)) {
            $proveedores = [$proveedores];
        }
        // dd($proveedores);

        return view('proveedores/index', [
            'titleGlobal' => 'Categorias',
            'proveedores' => $proveedores,
        ]);
    }

    public function create()
    {
        return view('proveedores/create', [
            'titleGlobal' => 'Categorias',
        ]);
    }

    public function store()
    {
        $data = $this->request()->getInput();

        $valid = $this->validate($data, [
            'ruc' => 'required',
            'nombre' => 'required',
            'telefono' => 'required',
            'direccion' => 'required',
        ]);
        if ($valid !== true) {
            return back()->route('proveedores.create', [
                'err' =>  $valid,
                'data' => $data,
            ]);
        } else {
            Proveedores::create($data);
            session()->flash('successMessage', 'EL proveedor se agrego correctamente');
            return redirect()->route('proveedores.index');
        }
    }

    public function edit()
    {
        $id = $this->request()->getInput();

        if (empty((array)$id)) {
            $rol = null;
        } else {
            $rol = Proveedores::first($id->id);
        }
        return view('proveedores.edit', [
            'data' => $rol,
        ]);
    }

    public function update()
    {
        $data = $this->request()->getInput();
        $valid = $this->validate($data, [
            'ruc' => 'required',
            'nombre' => 'required',
            'telefono' => 'required',
            'direccion' => 'required',
        ]);

        if ($valid !== true) {
            return back()->route('proveedores.edit', [
                'err' =>  $valid,
                'data' => $data,
            ]);
        } else {
            Proveedores::update($data->id, $data);
            session()->flash('successMessage', 'EL proveedor se actualizo correctamente');
            return redirect()->route('proveedores.index');
        }
    }

    public function destroy()
    {
        $data = $this->request()->getInput();
        $result = Proveedores::delete((int)$data->id);
        session()->flash('successMessage', 'EL proveedor se elimino correctamente');
        return redirect()->route('proveedores.index');
    }

    public function status()
    {
        $data = $this->request()->getInput();
        Proveedores::update($data->iduser, $data);
        session()->flash('successMessage', 'Se cambio es estado correctamente');
        return redirect()->route('proveedores.index');
    }
}
