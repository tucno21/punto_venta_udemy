<?php

namespace App\Controller\BackView;

use System\Controller;
use App\Model\Clientes;

class ClienteController extends Controller
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
        $clientes = Clientes::get();
        //cuando viene un solo objeto
        if (is_object($clientes)) {
            $clientes = [$clientes];
        }

        return view('clientes/index', [
            'titleGlobal' => 'Clientes',
            'clientes' => $clientes,
        ]);
    }

    public function create()
    {
        return view('clientes/create', [
            'titleGlobal' => 'Clientes',
        ]);
    }

    public function store()
    {
        $data = $this->request()->getInput();

        $valid = $this->validate($data, [
            'identidad' => 'required',
            'num_identidad' => 'required',
            'nombre' => 'required',
            'telefono' => 'required',
            'correo' => 'required',
            'direccion' => 'required',
        ]);
        if ($valid !== true) {
            return back()->route('clientes.create', [
                'err' =>  $valid,
                'data' => $data,
            ]);
        } else {
            Clientes::create($data);
            session()->flash('successMessage', 'EL cliente se guardo correctamente');
            return redirect()->route('clientes.index');
        }
    }

    public function edit()
    {
        $id = $this->request()->getInput();

        if (empty((array)$id)) {
            $data = null;
        } else {
            $data = Clientes::first($id->id);
        }
        return view('clientes.edit', [
            'data' => $data,
        ]);
    }

    public function update()
    {
        $data = $this->request()->getInput();
        $valid = $this->validate($data, [
            'identidad' => 'required',
            'num_identidad' => 'required',
            'nombre' => 'required',
            'telefono' => 'required',
            'correo' => 'required',
            'direccion' => 'required',
        ]);

        if ($valid !== true) {
            return back()->route('clientes.edit', [
                'err' =>  $valid,
                'data' => $data,
            ]);
        } else {
            Clientes::update($data->id, $data);
            session()->flash('successMessage', 'EL cliente se actualizo correctamente');
            return redirect()->route('clientes.index');
        }
    }

    public function destroy()
    {
        $data = $this->request()->getInput();
        $result = Clientes::delete((int)$data->id);
        session()->flash('successMessage', 'EL cliente se elimino correctamente');
        return redirect()->route('clientes.index');
    }

    public function status()
    {
        $data = $this->request()->getInput();
        Clientes::update($data->iduser, $data);
        session()->flash('successMessage', 'Se cambio es estado correctamente');
        return redirect()->route('clientes.index');
    }
}
