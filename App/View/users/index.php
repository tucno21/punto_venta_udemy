<?php include ext('layoutdash.head') ?>
<div class="pcoded-content">
    <!-- [ breadcrumb ] start -->
    <div class="page-header">
        <div class="page-block">
            <div class="row align-items-center">
                <div class="col d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <div class="page-header-title">
                        <h5 class="m-b-10">Panel de Usuarios</h5>
                    </div>
                    <div class="">
                        <?php if (can('users.create')) : ?>
                            <a href="<?= route('users.create') ?>" class="btn btn-dark btn-sm">Crear usuario</a>
                        <?php endif;  ?>
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
                    <div class="table-responsive">
                        <table class="table table-striped table-sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                    <th>Telefono</th>
                                    <th>Estado</th>
                                    <th>Rol</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php $i = 1;
                                foreach ($users as $user) : ?>
                                    <tr>
                                        <th scope="row"><?= $i ?></th>
                                        <td><?= $user->nombre . ' ' . $user->apellido ?></td>
                                        <td><?= $user->email ?></td>
                                        <td><?= $user->telefono ?></td>

                                        <td>
                                            <p class="<?= $user->status == 1  ? 'btn btn-outline-success rounded-pill  waves-effect waves-light btn-sm px-1 py-0' : 'btn btn-outline-danger rounded-pill waves-effect waves-light btn-sm px-1 py-0' ?>"><?= $user->status == 1  ? 'Habilitado' : 'Inhabilitado' ?> </p>
                                        </td>

                                        <td><?= $user->rol_name ?></td>

                                        <td>
                                            <?php if (can('users.edit')) : ?>
                                                <a href="<?= route('users.edit') . '?id=' . $user->id ?>" class="btn btn-outline-warning btn-sm"><i class="bi bi-pencil"></i></a>
                                            <?php endif;  ?>
                                            <?php if (can('users.destroy')) : ?>
                                                <a href=<?= route('users.destroy') . '?id=' . $user->id ?>" class="btn btn-outline-danger btn-sm"><i class="bi bi-trash3"></i></a>
                                            <?php endif;  ?>
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
    </div>
    <!-- [ Main Content ] end -->
</div>
<?php include ext('layoutdash.footer') ?>