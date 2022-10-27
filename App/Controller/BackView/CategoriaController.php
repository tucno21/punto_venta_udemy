<?php

namespace App\Controller\BackView;

use System\Controller;
use App\Model\Categorias;

class CategoriaController extends Controller
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
        $categorias = Categorias::get();
        //cuando viene un solo objeto
        if (is_object($categorias)) {
            $categorias = [$categorias];
        }

        return view('categorias/index', [
            'titleGlobal' => 'Categorias',
            'categorias' => $categorias,
        ]);
    }

    public function create()
    {
        return view('categorias/create', [
            'titleGlobal' => 'Categorias',
        ]);
    }

    public function store()
    {
        $data = $this->request()->getInput();

        $valid = $this->validate($data, [
            'categoria' => 'required',
        ]);
        if ($valid !== true) {
            return back()->route('categorias.create', [
                'err' =>  $valid,
                'data' => $data,
            ]);
        } else {
            Categorias::create($data);
            session()->flash('successMessage', 'La categoria se guardo correctamente');
            return redirect()->route('categorias.index');
        }
    }

    public function edit()
    {
        $id = $this->request()->getInput();

        if (empty((array)$id)) {
            $cat = null;
        } else {
            $cat = Categorias::first($id->id);
        }
        return view('categorias.edit', [
            'data' => $cat,
        ]);
    }

    public function update()
    {
        $data = $this->request()->getInput();
        $valid = $this->validate($data, [
            'categoria' => 'required',
        ]);

        if ($valid !== true) {
            return back()->route('categorias.edit', [
                'err' =>  $valid,
                'data' => $data,
            ]);
        } else {
            Categorias::update($data->id, $data);
            session()->flash('successMessage', 'La categoria se actualizo correctamente');
            return redirect()->route('categorias.index');
        }
    }

    public function destroy()
    {
        $data = $this->request()->getInput();
        $result = Categorias::delete((int)$data->id);
        session()->flash('successMessage', 'La categoria se elimino correctamente');
        return redirect()->route('categorias.index');
    }

    public function status()
    {
        $data = $this->request()->getInput();
        Categorias::update($data->iduser, $data);
        session()->flash('successMessage', 'Se cambio es estado correctamente');
        return redirect()->route('categorias.index');
    }
}
