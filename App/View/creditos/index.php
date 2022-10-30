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
    base_url . '/assets/js/creditos.js',
];
?>

<?php include ext('layoutdash.head') ?>
<!-- //mensage session flash -->
<?php if (session()->has('successMessage')) : ?>
    <div class="toast-container position-fixed top-0 end-0 p-3">
        <div class="toast align-items-center text-bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">
                    <?= session()->get('successMessage') ?>
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    </div>
<?php endif; ?>
<div class="pcoded-content">
    <!-- [ breadcrumb ] start -->
    <div class="page-header">
        <div class="page-block">
            <div class="row align-items-center">
                <div class="col d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <div class="page-header-title">
                        <h5 class="m-b-10">Panel de creditos</h5>
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
                    <h5>Lista de Creditos</h5>
                </div>
                <div class="card-body table-border-style p-3">

                    <table class="table table-striped table-sm dt-responsive" id="datatableAll">
                        <thead class="table-dark">
                            <tr>
                                <th>#</th>
                                <th>Serie</th>
                                <th>Monto</th>
                                <th>Fecha</th>
                                <th>Cliente</th>
                                <th>Restante</th>
                                <th>Abono</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            <?php $i = 1;
                            foreach ($creditos as $cred) : ?>
                                <tr>
                                    <th scope="row"><?= $i ?></th>
                                    <td><?= $cred->serie  ?></td>
                                    <td><?= number_format($cred->monto, 2)  ?></td>
                                    <td><?= $cred->created_at  ?></td>
                                    <td><?= $cred->nombre  ?></td>
                                    <td><?= number_format($cred->monto - $cred->abono, 2) ?></td>
                                    <td><?= number_format($cred->abono, 2)  ?></td>

                                    <td>
                                        <?php if ($cred->estado == 1) : ?>
                                            <button data-link="<?= route('creditos.dataabono') . '?id=' . $cred->id ?>" class="btn btn-outline-warning btn-sm addAbono" data-bs-toggle="modal" data-bs-target="#modalCreditos"><i class="bi bi-plus-circle"></i></button>
                                        <?php endif; ?>

                                        <a target="_blank" href="<?= route('creditos.pdfabono') . '?id=' . $cred->id ?>" class="btn btn-outline-danger btn-sm"><i class="bi bi-file-earmark-pdf"></i></a>
                                    </td>
                                </tr>
                            <?php $i++;
                            endforeach; ?>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>
    <!-- [ Main Content ] end -->
</div>
<!-- Modal -->
<div class="modal fade" id="modalCreditos" tabindex="-1" aria-labelledby="modalCreditosLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="modalCreditosLabel">Abono del Cliente: <span id="cliente">xxx</span></h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="input-group mb-3">
                    <span class="input-group-text">Serie</span>
                    <input class="form-control" id="serie" disabled>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">Total Venta</span>
                    <input class="form-control" id="totalVenta" disabled>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">Monto Restante</span>
                    <input class="form-control" id="montoRestante" disabled>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">Abonar</span>
                    <input class="form-control" type="number" id="abonar">
                </div>
            </div>
            <div class="modal-footer p-2">
                <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Cerrar</button>
                <button id="enviarAbono" type="button" class="btn btn-primary btn-sm" data-link="<?= route('creditos.abono') ?>">Abonar</button>
            </div>
        </div>
    </div>
</div>

<?php include ext('layoutdash.footer') ?>