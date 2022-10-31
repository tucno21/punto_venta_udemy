<?php
$linksCss2 = [
    base_url . '/assets/plugins/dataTables/datatables.bootstrap5.css',
    base_url . '/assets/plugins/dataTables/botones.datatable.css',
];

$linksScript2 = [
    base_url . '/assets/plugins/dataTables/pdfmake.min.js',
    base_url . '/assets/plugins/dataTables/vfs_fonts.js',
    base_url . '/assets/plugins/dataTables/datatable.bootstrap5.js',
    base_url . '/assets/js/datatable.js',
    base_url . '/assets/js/inventario.js',
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
                        <h5 class="m-b-10">Panel de Inventario y Kardex</h5>
                    </div>
                    <div class="">

                        <a href="<?= route('users.create') ?>" class="btn btn-dark btn-sm">Crear usuario</a>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- [ breadcrumb ] end -->

    <!-- [ Main Content ] start -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card">
                <div class="card-header p-2">
                    <h5>Lista de usuarios</h5>
                </div>
                <div class="card-body table-border-style p-3">
                    <nav>
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <button class="nav-link active" id="nav-inventarios-tab" data-bs-toggle="tab" data-bs-target="#nav-inventarios" type="button" role="tab" aria-controls="nav-inventarios" aria-selected="true">Inventario</button>
                            <button class="nav-link" id="nav-kardex-tab" data-bs-toggle="tab" data-bs-target="#nav-kardex" type="button" role="tab" aria-controls="nav-kardex" aria-selected="false">Kardex</button>
                        </div>
                    </nav>

                    <div class="tab-content" id="nav-tabContent">
                        <!-- INVENTARIOS -->
                        <div class="tab-pane fade show active mt-2" id="nav-inventarios" role="tabpanel" aria-labelledby="nav-inventarios-tab" tabindex="0">

                            <div class="">
                                <label for="mes" class="form-label">Mes Inventario</label>
                                <div class="d-flex align-items-baseline">
                                    <div class="">

                                        <div class="input-group input-group-sm  mb-3">
                                            <input type="month" class="form-control" aria-describedby="button-addon2" id="mes">
                                            <button class="btn btn-outline-success" type="button" id="button-addon2"><i class="bi bi-search"></i></button>
                                        </div>
                                    </div>
                                    <!-- Hover added -->
                                    <div class="">
                                        <button type="button" class="btn btn-sm btn-danger mx-1"><i class="bi bi-file-earmark-pdf"></i></button>
                                        <button type="button" class="btn btn-sm btn-info"><i class="bi bi-gear"></i></button>
                                    </div>
                                </div>
                            </div>

                            <table class="table table-striped table-sm dt-responsive" id="datatableAll">
                                <thead class="table-dark">
                                    <tr>
                                        <th>#</th>
                                        <th>Producto</th>
                                        <th>Movimiento</th>
                                        <th>Fecha y Hora</th>
                                        <th>Cantidad</th>
                                        <!-- <th>Acciones</th> -->
                                    </tr>
                                </thead>
                                <tbody class="table-group-divider">
                                    <?php $i = 1;
                                    foreach ($inventarios as $inv) : ?>
                                        <tr>
                                            <th scope="row"><?= $i ?></th>
                                            <td><?= $inv->descripcion  ?></td>
                                            <td><?= $inv->movimiento  ?></td>
                                            <td><?= $inv->created_at  ?></td>
                                            <td><?= $inv->cantidad  ?></td>
                                        </tr>
                                    <?php $i++;
                                    endforeach; ?>
                                </tbody>
                            </table>
                        </div>
                        <!-- KARDEX -->
                        <div class="tab-pane fade mt-2" id="nav-kardex" role="tabpanel" aria-labelledby="nav-kardex-tab" tabindex="0">
                            <div class="col d-flex justify-content-between">
                                <div class="">
                                    <div class="btn-group btn-group-togle btn-group-sm">
                                        <label class="btn btn-warning">
                                            <input id="barcode" class="form-check-input" type="radio" name="opcion" checked data-link="<?= route('ventas.barcode') . '?barcode=' ?>"><i class="bi bi-upc"></i> Barcode
                                        </label>
                                        <label class="btn btn-success">
                                            <input id="nombre" class="form-check-input" type="radio" name="opcion" data-link="<?= route('ventas.buscarnombre')  ?>"><i class="bi bi-list-task"></i> Nombre
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 position-relative" id="grupoBarcode">
                                <label class="form-label mb-1">Buscar</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-search"></i></span>
                                    <input id="inputBarcode" type="text" class="form-control" value="" placeholder="Buscar Barcode - enter">
                                    <button class="btn btn-outline-danger" type="button"><i class="bi bi-file-earmark-pdf"></i></button>
                                </div>
                            </div>
                            <div class="col-12 position-relative d-none" id="grupoNombre">
                                <label class="form-label mb-1">Buscar</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-search"></i></span>
                                    <input id="inputNombre" type="text" class="form-control" value="" placeholder="Buscar Nombre">
                                    <button class="btn btn-outline-danger" type="button"><i class="bi bi-file-earmark-pdf"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- [ Main Content ] end -->
</div>
<?php include ext('layoutdash.footer') ?>