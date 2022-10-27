<?php

namespace App\Controller\BackView;

use System\Controller;
use App\Model\Configuracion;

class ConfiguracionController extends Controller
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
        $empresa = Configuracion::first();
        // dd($empresa);

        return view('configuracion/index', [
            'titleGlobal' => 'Configuracion de la Empresa',
            'data' => $empresa
        ]);
    }

    public function update()
    {
        $data = $this->request()->getInput();
        // dd($data);
        $valid = $this->validate($data, [
            'ruc' => 'required',
            'nombre' => 'required',
            'telefono' => 'required',
            'correo' => 'required',
            'direccion' => 'required',
            'mensaje' => 'required',
            'impuesto' => 'required',
        ]);

        if ($valid !== true) {
            return back()->route('configuracion.index', [
                'err' =>  $valid,
                'data' => $data,
            ]);
        } else {
            Configuracion::update($data->id, $data);
            session()->flash('successMessage', 'Los datos se actualizaron correctamente');
            return redirect()->route('configuracion.index');
        }
    }
}
