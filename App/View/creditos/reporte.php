<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $title ?></title>
    <link rel="stylesheet" href="<?= base_url() . '/assets/css/factura.css'; ?>">
</head>

<body>
    <table id="datos-empresa">
        <tr>
            <td class="logo">
                <img src="<?= base_url() . '/assets/img/logo_inicio.jpg'; ?>" alt="">
            </td>
            <td class="info-empresa">
                <p><?= $empresa->nombre; ?></p>
                <p>Ruc: <?= $empresa->ruc; ?></p>
                <p>Teléfono: <?= $empresa->telefono; ?></p>
                <p>Dirección: <?= $empresa->direccion; ?></p>
            </td>
            <td class="info-compra">
                <div class="container-factura">
                    <span class="factura">Credito</span>
                    <p>N°: <strong><?= $credito->serie; ?></strong></p>
                    <p>Fecha: <?= date('d-m-Y', strtotime($credito->created_at)); ?></p>
                    <p>Hora: <?= date('H:i:s', strtotime($credito->created_at)); ?></p>
                </div>
            </td>
        </tr>
    </table>


    <h5 class="title">Datos del Cliente</h5>
    <table id="container-info">
        <tr>
            <td>
                <strong><?= $credito->identidad  ?>: </strong>
                <p><?= $credito->num_identidad  ?></p>
            </td>
            <td>
                <strong>Nombre: </strong>
                <p><?= $credito->nombre ?></p>
            </td>
        </tr>
        <tr>
            <td>
                <strong>Teléfono: </strong>
                <p><?= $credito->telefono ?></p>
            </td>
            <td>
                <strong>Dirección: </strong>
                <p><?= $credito->direccion ?></p>
            </td>
        </tr>
    </table>
    <h5 class="title">Detalle de los Productos</h5>
    <table id="container-producto">
        <thead>
            <tr>
                <th>Cant</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>SubTotal</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $productos = json_decode($credito->productos);
            //IGV incluido
            $subTotal = $credito->total / 1.18;
            $igv = $credito->total - $subTotal;
            // $totalSD = $credito->total - $credito->descuento;
            $total = $credito->total;

            //IGV no incluido
            // $subTotal = $credito->total;
            // $igv = $subTotal * 0.18;
            // $total = $subTotal + $igv;

            foreach ($productos as $value) { ?>
                <tr>
                    <td><?= $value->cantidad ?></td>
                    <td><?= $value->product ?></td>
                    <td><?= number_format($value->precio, 2) ?></td>
                    <td><?= number_format($value->cantidad * $value->precio, 2) ?></td>
                </tr>
            <?php } ?>

            <tr class="total">
                <td class="text-right" colspan="3">Monto</td>
                <td class="text-right"><?= number_format($total, 2); ?></td>
            </tr>
        </tbody>
    </table>
    <h5 class="title">Detalle de los Abonos</h5>
    <table id="container-producto">
        <thead>
            <tr>
                <th>Fecha</th>
                <th>Abono</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $abonado = 0;
            foreach ($abonos as $abono) {
                $abonado += $abono->abono;
            ?>
                <tr>
                    <td class="text-center"><?= $abono->created_at; ?></td>
                    <td class="text-center"><?= number_format($abono->abono, 2); ?></td>
                </tr>
            <?php } ?>
            <tr class="total">
                <td class="text-right">Abonado</td>
                <td class="text-right"><?= number_format($abonado, 2); ?></td>
            </tr>
            <tr class="total">
                <td class="text-right">Restante</td>
                <td class="text-right"><?= number_format($credito->monto -  $abonado, 2); ?></td>
            </tr>
        </tbody>
    </table>


    <div class="mensaje">
        <h4><?= $credito->metodo  ?></h4>
        <?= html_entity_decode($empresa->mensaje); ?>
        <?php if ($credito->estado == 0) { ?>
            <h1>Venta Anulado</h1>
        <?php } ?>
    </div>

</body>

</html>