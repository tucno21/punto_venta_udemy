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
                        <h5 class="m-b-10">Panel de Productos</h5>
                    </div>
                    <div class="">
                        <a href="<?= route('productos.create') ?>" class="btn btn-dark btn-sm">Crear Producto</a>
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
                    <h5>Lista de Productos</h5>
                </div>
                <div class="card-body table-border-style p-3">

                    <table class="table table-striped table-sm dt-responsive" id="datatableAll">
                        <thead class="table-dark">
                            <tr>
                                <th>#</th>
                                <th>Código</th>
                                <th>Detalle</th>
                                <th>P. compra</th>
                                <th>P. Venta</th>
                                <th>Stock</th>
                                <th>Categoria</th>
                                <th>Foto</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            <?php $i = 1;
                            foreach ($productos as $pro) : ?>
                                <tr>
                                    <th scope="row"><?= $i ?></th>
                                    <td><?= $pro->codigo  ?></td>
                                    <td><?= $pro->descripcion  ?></td>
                                    <td><?= $pro->precio_compra  ?></td>
                                    <td><?= $pro->precio_venta  ?></td>
                                    <td><?= $pro->cantidad  ?></td>
                                    <td><?= $pro->categoria  ?></td>

                                    <?php if ($pro->foto == "") : ?>
                                        <td><img src="<?= base_url('/assets/img/user.png') ?>" alt="avatar" class="img-thumbnail" width="40px"></td>
                                    <?php else : ?>
                                        <td><img src="<?= base_url('/assets/img/' . $pro->foto) ?>" alt="avatar" class="img-thumbnail" width="40px"></td>
                                    <?php endif; ?>

                                    <td>
                                        <p <?= $pro->estado == 1  ? "data-link=" . route('productos.status') . "?iduser=" . $pro->id . "&estado=0" : "data-link=" . route('productos.status') . "?iduser=" . $pro->id . "&estado=1" ?> class="cambioEstado  <?= $pro->estado == 1  ? 'badge rounded-pill bg-success' : 'badge rounded-pill bg-danger' ?>"><?= $pro->estado == 1  ? 'Habilitado' : 'Inhabilitado' ?></p>
                                    </td>

                                    <td>
                                        <a href="<?= route('productos.edit') . '?id=' . $pro->id ?>" class="btn btn-outline-warning btn-sm"><i class="bi bi-pencil"></i></a>

                                        <a href=<?= route('productos.destroy') . '?id=' . $pro->id ?>" class="btn btn-outline-danger btn-sm deleteItem"><i class="bi bi-trash3"></i></a>
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