<?php
$linksCss2 = [
    base_url . '/assets/plugins/jquery/jquery-ui.min.css',
    base_url . '/assets/plugins/jquery/fix.css',
    base_url . '/assets/plugins/fullcalendar/main.min.css',
];
$linksScript2 = [
    base_url . '/assets/plugins/jquery/jquery-3.6.0.js',
    base_url . '/assets/plugins/jquery/jquery-ui.min.js',
    base_url . '/assets/plugins/fullcalendar/main.min.js',
    base_url . '/assets/plugins/fullcalendar/es.js',
    base_url . '/assets/js/apartadoProducto.js',
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
                        <h5 class="m-b-10">Generar un Apartado</h5>
                    </div>
                    <div class="">
                        <a href="<?= route('apartados.index') ?>" class="btn btn-dark btn-sm">Volver</a>
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
                    <p class="d-none" id="linkPdf" data-link="<?= route('apartados.pdfApartado') ?>"></p>
                    <p class="d-none" id="listaApartado" data-link="<?= route('apartados.listar') ?>"></p>
                    <p class="d-none" id="apartadoid" data-link="<?= route('apartados.apartadoid') ?>"></p>
                    <p class="d-none" id="cantProducto" data-link="<?= route('apartados.cantProducto') ?>"></p>
                    <input type="hidden" id="fechaActual" value="<?= date('Y-m-d') ?>">
                </div>
                <div class="card-body py-2">
                    <div id='calendar'></div>
                </div>
            </div>
        </div>
    </div>
    <!-- [ Main Content ] end -->
</div>
<!-- Modal -->
<div class="modal fade" id="modalApartados" tabindex="-1" aria-labelledby="modalApartadosLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="modalApartadosLabel">Realizar apartados</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col d-flex justify-content-between">
                        <div class="">
                            <div class="btn-group btn-group-togle btn-group-sm">
                                <label class="btn btn-warning">
                                    <input id="barcode" class="form-check-input" type="radio" name="opcion" checked data-link="<?= route('apartados.barcode') . '?barcode=' ?>"><i class="bi bi-upc"></i> Barcode
                                </label>
                                <label class="btn btn-success">
                                    <input id="nombre" class="form-check-input" type="radio" name="opcion" data-link="<?= route('apartados.buscarnombre')  ?>"><i class="bi bi-list-task"></i> Nombre
                                </label>
                            </div>
                        </div>
                        <div class="">
                            <div class="input-group input-group-sm">
                                <span class="input-group-text">Serie</span>
                                <input id="serie" type="text" class="form-control">
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


                <form action="<?= route('apartados.create') ?>" method="POST" id="formVentas">
                    <?= csrf() ?>

                    <?php include_once 'imputs.php' ?>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- Modal -->
<div class="modal fade" id="procesoEntrega" tabindex="-1" aria-labelledby="modalApartadosLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="modalApartadosLabel">Realizar Entrega</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p class="d-none" id="editarApartado" data-link="<?= route('apartados.edit') ?>"></p>
                <div class="row g-2">
                    <div class="col-12">
                        <label class="form-label mb-1">Cliente</label>
                        <div class="input-group">
                            <span class="input-group-text"><i class="bi bi-person"></i></span>
                            <input type="text" class="form-control" disabled id="clienteApartado">
                        </div>
                    </div>
                    <div class="col-12">
                        <label class="form-label mb-1">Monto Total</label>
                        <div class="input-group">
                            <span class="input-group-text"><i class="bi bi-currency-dollar"></i></span>
                            <input type="text" class="form-control" disabled id="montoApartado">
                        </div>
                    </div>
                    <div class="col-12">
                        <label class="form-label mb-1">Abonado</label>
                        <div class="input-group">
                            <span class="input-group-text"><i class="bi bi-piggy-bank"></i></span>
                            <input type="text" class="form-control" disabled id="abonoApartado">
                        </div>
                    </div>
                    <div class="col-12">
                        <label class="form-label mb-1">Restante</label>
                        <div class="input-group">
                            <span class="input-group-text"><i class="bi bi-wallet2"></i></span>
                            <input type="text" class="form-control" disabled id="restanteApartado">
                        </div>
                    </div>
                    <input type="hidden" id="id_apartado">
                    <div class="col">
                        <div class="text-center mt-3">
                            <button class="btn btn-success" id="buttonEdit">Procesar</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
<?php include ext('layoutdash.footer') ?>