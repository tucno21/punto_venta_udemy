<div class="col-md-6 position-relative mt-3">
    <label class="form-label mb-1">RUC</label>
    <div class="input-group">
        <span class="input-group-text"><i class="bi bi-align-center"></i></span>
        <input name="ruc" type="number" class="form-control <?= isset($err->ruc) ? 'is-invalid' : '' ?>" value="<?= isset($data->ruc) ? $data->ruc : '' ?>">
        <?php if (isset($err->ruc)) : ?>
            <div class="invalid-feedback">
                <?= $err->ruc ?>
            </div>
        <?php endif; ?>
    </div>
</div>

<div class="col-md-6 position-relative mt-3">
    <label class="form-label mb-1">Nombre</label>
    <div class="input-group">
        <span class="input-group-text"><i class="bi bi-person"></i></span>
        <input name="nombre" type="text" class="form-control <?= isset($err->nombre) ? 'is-invalid' : '' ?>" value="<?= isset($data->nombre) ? $data->nombre : '' ?>">
        <?php if (isset($err->nombre)) : ?>
            <div class="invalid-feedback">
                <?= $err->nombre ?>
            </div>
        <?php endif; ?>
    </div>
</div>

<div class="col-md-6 position-relative mt-3">
    <label class="form-label mb-1">Telefono</label>
    <div class="input-group">
        <span class="input-group-text"><i class="bi bi-telephone"></i></span>
        <input name="telefono" type="text" class="form-control <?= isset($err->telefono) ? 'is-invalid' : '' ?>" value="<?= isset($data->telefono) ? $data->telefono : '' ?>">
        <?php if (isset($err->telefono)) : ?>
            <div class="invalid-feedback">
                <?= $err->telefono ?>
            </div>
        <?php endif; ?>
    </div>
</div>

<div class="col-md-6 position-relative mt-3">
    <label class="form-label mb-1">Dirección</label>
    <div class="input-group">
        <span class="input-group-text"><i class="bi bi-arrow-90deg-right"></i></span>
        <input name="direccion" type="text" class="form-control <?= isset($err->direccion) ? 'is-invalid' : '' ?>" value="<?= isset($data->direccion) ? $data->direccion : '' ?>">
        <?php if (isset($err->direccion)) : ?>
            <div class="invalid-feedback">
                <?= $err->direccion ?>
            </div>
        <?php endif; ?>
    </div>
</div>


<input type="hidden" name="id" value="<?= isset($data->id) ? $data->id : '' ?> ">