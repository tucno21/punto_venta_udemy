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
<div class="pcoded-content">
    <!-- [ breadcrumb ] start -->
    <div class="page-header">
        <div class="page-block">
            <div class="row align-items-center">
                <div class="col d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <div class="page-header-title">
                        <h5 class="m-b-10">Panel de Apartados</h5>
                    </div>
                    <div class="">

                        <a href="<?= route('apartados.create') ?>" class="btn btn-dark btn-sm">Generar un Apartado</a>

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
                    <h5>Lista de Apartados</h5>
                </div>
                <div class="card-body table-border-style p-3">

                    <table class="table table-striped table-sm dt-responsive" id="datatableAll">
                        <thead class="table-dark">
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Monto</th>
                                <th>Abono</th>
                                <th>Fecha Apartado</th>
                                <th>Fecha Retido</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            <?php $i = 1;
                            foreach ($apartados as $apart) : ?>
                                <tr>
                                    <th scope="row"><?= $i ?></th>
                                    <td><?= $apart->nombre ?></td>
                                    <td><?= $apart->total ?></td>
                                    <td><?= $apart->abono ?></td>
                                    <td><?= $apart->fecha_apartado ?></td>
                                    <td><?= $apart->fecha_retiro ?></td>

                                    <td>
                                        <?php if ($apart->estado == 1) : ?>
                                            <span class="badge bg-danger">Pendiente</span>
                                        <?php else : ?>
                                            <span class="badge bg-success">Entregado</span>
                                        <?php endif; ?>
                                    </td>

                                    <td>
                                        <a href="<?= route('users.edit') . '?id=' . $apart->id ?>" class="btn btn-outline-warning btn-sm"><i class="bi bi-pencil"></i></a>
                                        <a href=<?= route('users.destroy') . '?id=' . $apart->id ?>" class="btn btn-outline-danger btn-sm deleteItem"><i class="bi bi-trash3"></i></a>
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