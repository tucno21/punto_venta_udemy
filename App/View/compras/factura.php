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
                    <span class="factura">Factura</span>
                    <p>N°: <strong><?= $compra->serie; ?></strong></p>
                    <p>Fecha: <?= date('d-m-Y', strtotime($compra->created_at)); ?></p>
                    <p>Hora: <?= date('H:i:s', strtotime($compra->created_at)); ?></p>
                </div>
            </td>
        </tr>
    </table>


    <h5 class="title">Datos del Proveedor</h5>
    <table id="container-info">
        <tr>
            <td>
                <strong>Ruc: </strong>
                <p><?= $compra->ruc  ?></p>
            </td>
            <td>
                <strong>Nombre: </strong>
                <p><?= $compra->nombre ?></p>
            </td>
        </tr>
        <tr>
            <td>
                <strong>Teléfono: </strong>
                <p><?= $compra->telefono ?></p>
            </td>
            <td>
                <strong>Dirección: </strong>
                <p><?= $compra->direccion ?></p>
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
            $productos = json_decode($compra->productos);
            //IGV incluido
            $subTotal = $compra->total / 1.18;
            $igv = $compra->total - $subTotal;
            $total = $compra->total;

            //IGV no incluido
            // $subTotal = $compra->total;
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
                <td class="text-right" colspan="3">SubTotal</td>
                <td class="text-right"><?= number_format($subTotal, 2); ?></td>
            </tr>
            <tr class="total">
                <td class="text-right" colspan="3">Igv 18%</td>
                <td class="text-right"><?= number_format($igv, 2); ?></td>
            </tr>
            <tr class="total">
                <td class="text-right" colspan="3">Total</td>
                <td class="text-right"><?= number_format($total, 2); ?></td>
            </tr>
        </tbody>
    </table>
    <div class="mensaje">
        <?= html_entity_decode($empresa->mensaje); ?>
        <?php if ($compra->estado == 0) { ?>
            <h1>Compra Anulado</h1>
        <?php } ?>
    </div>

</body>

</html>