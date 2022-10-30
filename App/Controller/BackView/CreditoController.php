<?php

namespace App\Controller\BackView;

use Dompdf\Dompdf;
use App\Model\Abonos;
use System\Controller;
use App\Model\Creditos;
use App\Model\Configuracion;

class CreditoController extends Controller
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
        //buscar CREDITO en Ventas
        $creditos = Creditos::creditos();
        if (is_object($creditos)) {
            $creditos = [$creditos];
        }

        foreach ($creditos as $credito) {
            //buscar total abono
            $totalAbono = Abonos::totalAbono($credito->id);
            //add a creditos
            $credito->abono = ($totalAbono->total) ? $totalAbono->total : 0;

            $verAbono = (int)$credito->monto - (int)$credito->abono;
            if ($verAbono == 0) {
                Creditos::update($credito->id, ['estado' => 0]);
            }
        }

        return view('creditos/index', [
            'titleGlobal' => 'Creditos',
            'creditos' => $creditos
        ]);
    }

    public function dataabono()
    {
        $data = $this->request()->getInput();
        $credito = Creditos::creditoId($data->id);
        $totalAbono = Abonos::totalAbono($credito->id);
        $credito->abono = ($totalAbono->total) ? $totalAbono->total : 0;

        $response = ['status' => false, 'data' => ''];
        if (!empty($credito)) {
            $response['status'] = true;
            $response['data'] = $credito;
        }

        echo json_encode($response, JSON_UNESCAPED_UNICODE);
    }



    public function abono()
    {
        //post
        $data = $_POST;
        $result = Abonos::create($data);

        if ($result->status) {
            $response = ['status' => true, 'message' => 'Abono registrado'];
            echo json_encode($response, JSON_UNESCAPED_UNICODE);
            exit;
        } else {
            $response = ['status' => true, 'message' => 'Error al registrar abono'];
            echo json_encode($response, JSON_UNESCAPED_UNICODE);
            exit;
        }
    }

    public function pdfabono()
    {
        $data = $this->request()->getInput();
        $empresa = Configuracion::get();
        $credito = Creditos::creditoIdComplet($data->id);
        $totalAbono = Abonos::totalAbono($credito->id);
        $abonos = Abonos::where('id_credito', $credito->id)->get();
        if (is_object($abonos)) {
            $abonos = [$abonos];
        }
        $title = 'reporte de credito';

        ob_start();
        view('creditos/reporte', [
            'empresa' => $empresa,
            'title' => $title,
            'credito' => $credito,
            'totalAbono' => $totalAbono,
            'abonos' => $abonos
        ]);

        $html = ob_get_clean();

        $dompdf = new Dompdf();

        $options = $dompdf->getOptions();
        $options->set('isJavascriptEnabled', true);
        $options->set('isRemoteEnabled', true);
        $dompdf->setOptions($options);

        $dompdf->loadHtml($html);
        $dompdf->setPaper('A4', 'vertical');

        $dompdf->render();

        // $dompdf->stream('Credito_' . $credito->serie . '.pdf', ['Attachment' => false]);
        $dompdf->stream('Credito.pdf', ['Attachment' => false]);

        exit;
    }
}
