<?php include ext('layoutdash.head') ?>
<div class="pcoded-content">
    <!-- [ breadcrumb ] start -->
    <div class="page-header">
        <div class="page-block">
            <div class="row align-items-center">
                <div class="col d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <div class="page-header-title">
                        <h5 class="m-b-10">Datos de la Empresa</h5>
                    </div>
                    <div class="">

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
                    <h5>Modificar los datos de la Empresa</h5>
                </div>
                <div class="card-body p-3">

                    <form action="<?= route('configuracion.index') ?>" method="POST">
                        <?= csrf() ?>
                        <div class="row g-2">

                            <div class="col-md-6 position-relative mt-3">
                                <label class="form-label mb-1">Ruc</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-123"></i></span>
                                    <input name="ruc" type="text" class="form-control <?= isset($err->ruc) ? 'is-invalid' : '' ?>" value="<?= isset($data->ruc) ? $data->ruc : '' ?>">
                                    <?php if (isset($err->ruc)) : ?>
                                        <div class="invalid-feedback">
                                            <?= $err->ruc ?>
                                        </div>
                                    <?php endif; ?>
                                </div>
                            </div>

                            <div class="col-md-6 position-relative mt-3">
                                <label class="form-label mb-1">Nombre de la Empresa</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-building"></i></span>
                                    <input name="nombre" type="text" class="form-control <?= isset($err->nombre) ? 'is-invalid' : '' ?>" value="<?= isset($data->nombre) ? $data->nombre : '' ?>">
                                    <?php if (isset($err->nombre)) : ?>
                                        <div class="invalid-feedback">
                                            <?= $err->nombre ?>
                                        </div>
                                    <?php endif; ?>
                                </div>
                            </div>

                            <div class="col-md-6 position-relative mt-3">
                                <label class="form-label mb-1">Teléfono</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-telephone"></i></span>
                                    <input name="telefono" type="number" class="form-control <?= isset($err->telefono) ? 'is-invalid' : '' ?>" value="<?= isset($data->telefono) ? $data->telefono : '' ?>">
                                    <?php if (isset($err->telefono)) : ?>
                                        <div class="invalid-feedback">
                                            <?= $err->telefono ?>
                                        </div>
                                    <?php endif; ?>
                                </div>
                            </div>

                            <div class="col-md-6 position-relative mt-3">
                                <label class="form-label mb-1">Correo</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-envelope"></i></span>
                                    <input name="correo" type="email" class="form-control <?= isset($err->correo) ? 'is-invalid' : '' ?>" value="<?= isset($data->correo) ? $data->correo : '' ?>">
                                    <?php if (isset($err->correo)) : ?>
                                        <div class="invalid-feedback">
                                            <?= $err->correo ?>
                                        </div>
                                    <?php endif; ?>
                                </div>
                            </div>

                            <div class="col-md-6 position-relative mt-3">
                                <label class="form-label mb-1">Dirección</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-map"></i></span>
                                    <input name="direccion" type="text" class="form-control <?= isset($err->direccion) ? 'is-invalid' : '' ?>" value="<?= isset($data->direccion) ? $data->direccion : '' ?>">
                                    <?php if (isset($err->direccion)) : ?>
                                        <div class="invalid-feedback">
                                            <?= $err->direccion ?>
                                        </div>
                                    <?php endif; ?>
                                </div>
                            </div>


                            <div class="col-md-6 position-relative mt-3">
                                <label class="form-label mb-1">Impuesto</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-percent"></i></span>
                                    <input name="impuesto" type="number" class="form-control <?= isset($err->impuesto) ? 'is-invalid' : '' ?>" value="<?= isset($data->impuesto) ? $data->impuesto : '' ?>">
                                    <?php if (isset($err->impuesto)) : ?>
                                        <div class="invalid-feedback">
                                            <?= $err->impuesto ?>
                                        </div>
                                    <?php endif; ?>
                                </div>
                            </div>

                            <!-- mensaje textarea -->
                            <div class="col-md-12 position-relative mt-3">
                                <label class="form-label mb-1">Mensaje</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-chat-left-text"></i></span>
                                    <textarea id="mensajeEmpresa" name="mensaje" class="form-control <?= isset($err->mensaje) ? 'is-invalid' : '' ?>" rows="3"><?= isset($data->mensaje) ? $data->mensaje : '' ?></textarea>
                                    <?php if (isset($err->mensaje)) : ?>
                                        <div class="invalid-feedback">
                                            <?= $err->mensaje ?>
                                        </div>
                                    <?php endif; ?>
                                </div>
                            </div>

                            <input type="hidden" name="id" value="<?= isset($data->id) ? $data->id : '' ?> ">
                            <div class="col-md-12 text-center">
                                <button class="btn btn-success" type="submit">Actualizar datos</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
    <!-- [ Main Content ] end -->
</div>
<?php include ext('layoutdash.footer') ?>