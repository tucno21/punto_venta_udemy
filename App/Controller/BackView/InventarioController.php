<?php

namespace App\Controller\BackView;

use System\Controller;
use App\Model\Inventarios;

class InventarioController extends Controller
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
        $inventarios = Inventarios::listarTodo();
        // dd($inventarios);

        return view('inventarios/index', [
            'var' => 'es una variable',
            'inventarios' => $inventarios
        ]);
    }

    public function create()
    {
        //return view('folder/file', [
        //   'var' => 'es una variable',
        //]);
    }

    public function store()
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
        //     Model::create($data);
        //     return redirect()->route('route.name');
        // }
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
}
