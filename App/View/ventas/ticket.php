<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $title ?></title>
    <link rel="stylesheet" href="<?= base_url() . '/assets/css/ticked.css'; ?>">
</head>

<body>
    <img src="<?= base_url() . '/assets/img/logo_inicio.jpg'; ?>" alt="">
    <div class="datos-empresa">
        <p><?= $empresa->nombre; ?></p>
        <p><?= $empresa->telefono; ?></p>
        <p><?= $empresa->direccion; ?></p>
    </div>
    <h5 class="title">Datos del Proveedor</h5>
    <div class="datos-info">
        <p><strong>Ruc: </strong> <?= $venta->identidad . ': ' . $venta->num_identidad ?></p>
        <p><strong>Nombre: </strong> <?= $venta->nombre ?></p>
        <p><strong>Teléfono: </strong> <?= $venta->telefono ?></p>
    </div>
    <h5 class="title">Detalle de los Productos</h5>
    <table>
        <thead>
            <tr>
                <td>Cant</td>
                <td>Descripción</td>
                <td>Precio</td>
                <td>SubTotal</td>
            </tr>
        </thead>
        <tbody>
            <?php foreach (json_decode($venta->productos) as $key => $value) : ?>
                <tr>
                    <td><?= $value->cantidad ?></td>
                    <td><?= $value->product ?></td>
                    <td><?= number_format($value->precio, 2) ?></td>
                    <td><?= number_format($value->cantidad * $value->precio, 2) ?></td>
                </tr>
            <?php endforeach; ?>
            <tr>
                <td class="text-right" colspan="3">Descuento</td>
                <td class="text-right"><?= number_format($venta->descuento, 2); ?></td>
            </tr>
            <tr>
                <td class="text-right" colspan="3">Total con descuento</td>
                <td class="text-right"><?= number_format($venta->total - $venta->descuento, 2); ?></td>
            </tr>
            <tr>
                <td class="text-right" colspan="3">Total sin descuento</td>
                <td class="text-right"><?= number_format($venta->total, 2); ?></td>
            </tr>
        </tbody>
    </table>
    <div class="mensaje">
        <h4><?= $venta->metodo ?></h4>
        <?= html_entity_decode($empresa->mensaje); ?>
        <?php if ($venta->estado == 0) { ?>
            <h1>Venta Anulado</h1>
        <?php } ?>
    </div>
</body>

</html>