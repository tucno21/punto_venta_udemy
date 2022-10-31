<?php
$linksCss2 = [
    base_url . '/assets/plugins/jquery/jquery-ui.min.css',
];
$linksScript2 = [
    base_url . '/assets/plugins/jquery/jquery-3.6.0.js',
    base_url . '/assets/plugins/jquery/jquery-ui.min.js',
    base_url . '/assets/js/cotizaciones.js',
];
?>
<?php include ext('layoutdash.head') ?>
<div class="pcoded-content">
    <!-- [ breadcrumb ] start -->
    <div class="page-header">
        <div class="page-block">
            <div class="row align-items-center">
                <div class="col d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <div class="page-header-title">
                        <h5 class="m-b-10">Nueva Cotización</h5>
                    </div>
                    <div class="">
                        <a href="<?= route('cotizaciones.index') ?>" class="btn btn-dark btn-sm">Volver</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- [ breadcrumb ] end -->

    <!-- [ Main Content ] start -->
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header p-2">
                    <h5>Completar los campos</h5>
                    <p class="d-none" id="linkPdf" data-link="<?= route('cotizaciones.pdfCotizacion') ?>"></p>
                    <p class="d-none" id="cantProducto" data-link="<?= route('cotizaciones.cantProducto') ?>"></p>
                </div>
                <div class="card-body py-2">
                    <!-- BUSCADOR -->
                    <div class="row">
                        <div class="col d-flex justify-content-between">
                            <div class="">
                                <div class="btn-group btn-group-togle btn-group-sm">
                                    <label class="btn btn-warning">
                                        <input id="barcode" class="form-check-input" type="radio" name="opcion" checked data-link="<?= route('cotizaciones.barcode') . '?barcode=' ?>"><i class="bi bi-upc"></i> Barcode
                                    </label>
                                    <label class="btn btn-success">
                                        <input id="nombre" class="form-check-input" type="radio" name="opcion" data-link="<?= route('cotizaciones.buscarnombre')  ?>"><i class="bi bi-list-task"></i> Nombre
                                    </label>
                                </div>
                            </div>

                        </div>
                        <div class="col-12 position-relative" id="grupoBarcode">
                            <label class="form-label mb-1">Buscar</label>
                            <div class="input-group">
                                <span class="input-group-text"><i class="bi bi-search"></i></span>
                                <input id="inputBarcode" type="text" class="form-control" value="" placeholder="Buscar Barcode - enter">
                            </div>
                        </div>
                        <div class="col-12 position-relative d-none" id="grupoNombre">
                            <label class="form-label mb-1">Buscar</label>
                            <div class="input-group">
                                <span class="input-group-text"><i class="bi bi-search"></i></span>
                                <input id="inputNombre" type="text" class="form-control" value="" placeholder="Buscar Nombre">
                            </div>
                        </div>

                        <div class="table-responsive">
                            <table class="table table-stripe">
                                <thead>
                                    <tr class="table-dark">
                                        <th scope="col">Producto</th>
                                        <th scope="col">Cantidad</th>
                                        <th scope="col">Precio</th>
                                        <th scope="col">SubTotal</th>
                                        <th scope="col">Eliminar</th>
                                    </tr>
                                </thead>
                                <tbody id="tablaVentas"></tbody>
                            </table>
                        </div>
                    </div>


                    <form action="<?= route('cotizaciones.create') ?>" method="POST" id="formVentas">
                        <?= csrf() ?>

                        <?php include_once 'imputs.php' ?>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- [ Main Content ] end -->
</div>
<?php include ext('layoutdash.footer') ?>