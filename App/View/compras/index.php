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
];
?>

<?php include ext('layoutdash.head') ?>
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
                        <h5 class="m-b-10">Panel de Compras</h5>
                    </div>
                    <div class="">
                        <a href="<?= route('compras.create') ?>" class="btn btn-dark btn-sm">Agregar Compra</a>
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
                    <h5>Lista de Compras</h5>
                </div>
                <div class="card-body table-border-style py-1 px-3">

                    <div class="d-flex justify-content-center">
                        <div class="form-group input-group-sm mx-1 text-center">
                            <label for="desde" class="form-label m-0">Desde</label>
                            <input type="date" id="desde" class="form-control">
                        </div>
                        <div class="form-group input-group-sm mx-1 text-center">
                            <label for="hasta" class="form-label m-0">Hasta</label>
                            <input type="date" id="hasta" class="form-control">
                        </div>
                    </div>

                    <table class="table table-striped table-sm dt-responsive" id="datatableAll">
                        <thead class="table-dark">
                            <tr>
                                <th>#</th>
                                <th>Fecha</th>
                                <th>Hora</th>
                                <th>Total</th>
                                <th>Proveedor</th>
                                <th>Serie</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            <?php $i = 1;
                            foreach ($compras as $pro) : ?>
                                <tr>
                                    <th scope="row"><?= $i ?></th>
                                    <td><?= $pro->fecha  ?></td>
                                    <td><?= $pro->hora  ?></td>
                                    <!-- $pro->total con dos decimales -->
                                    <td>s/ <?= number_format($pro->total, 2)  ?></td>
                                    <td><?= $pro->nombre  ?></td>
                                    <td><?= $pro->serie  ?></td>

                                    <td>
                                        <a target="_blank" href="<?= route('compras.pdfCompra') . '?id=' . $pro->id . '&tipo=factura' ?>" class="badge bg-success fs-6"><i class="bi bi-filetype-pdf"></i></a>

                                        <?php if ($pro->estado == 1) : ?>
                                            <a href="<?= route('compras.destroy') . '?id=' . $pro->id ?>" class="badge bg-danger fs-6"><i class="bi bi-trash3"></i></a>
                                        <?php else : ?>
                                            <p href="#" class="badge bg-primary fs-6"><i class="bi bi-x-square"></i></p>
                                        <?php endif; ?>
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
<?php include ext('layoutdash.footer') ?>