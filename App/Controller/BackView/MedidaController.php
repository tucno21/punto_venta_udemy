<?php

namespace App\Controller\BackView;

use App\Model\Medidas;
use System\Controller;

class MedidaController extends Controller
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
        $medidas = Medidas::get();
        //cuando viene un solo objeto
        if (is_object($medidas)) {
            $medidas = [$medidas];
        }

        return view('medidas/index', [
            'titleGlobal' => 'Diversas Medidas',
            'medidas' => $medidas,
        ]);
    }

    public function create()
    {
        return view('medidas/create', [
            'titleGlobal' => 'Diversas Medidas',
        ]);
    }

    public function store()
    {
        $data = $this->request()->getInput();

        $valid = $this->validate($data, [
            'medida' => 'required',
            'nombre_corto' => 'required',
        ]);
        if ($valid !== true) {
            return back()->route('medidas.create', [
                'err' =>  $valid,
                'data' => $data,
            ]);
        } else {
            Medidas::create($data);
            session()->flash('successMessage', 'La medida se guardo correctamente');
            return redirect()->route('medidas.index');
        }
    }

    public function edit()
    {
        $id = $this->request()->getInput();

        if (empty((array)$id)) {
            $medida = null;
        } else {
            $medida = Medidas::first($id->id);
        }
        return view('medidas.edit', [
            'data' => $medida,
        ]);
    }

    public function update()
    {
        $data = $this->request()->getInput();
        $valid = $this->validate($data, [
            'medida' => 'required',
            'nombre_corto' => 'required',
        ]);

        if ($valid !== true) {
            return back()->route('medidas.edit', [
                'err' =>  $valid,
                'data' => $data,
            ]);
        } else {
            Medidas::update($data->id, $data);
            session()->flash('successMessage', 'La medida se actualizo correctamente');
            return redirect()->route('medidas.index');
        }
    }

    public function destroy()
    {
        $data = $this->request()->getInput();
        $result = Medidas::delete((int)$data->id);
        session()->flash('successMessage', 'La medida se elimino correctamente');
        return redirect()->route('medidas.index');
    }

    public function status()
    {
        $data = $this->request()->getInput();
        Medidas::update($data->iduser, $data);
        session()->flash('successMessage', 'Se cambio es estado correctamente');
        return redirect()->route('medidas.index');
    }
}
