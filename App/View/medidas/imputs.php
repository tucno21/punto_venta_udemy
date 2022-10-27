<div class="col-md-6 position-relative mt-3">
    <label class="form-label mb-1">Nombre</label>
    <div class="input-group">
        <span class="input-group-text"><i class="bi bi-rulers"></i></span>
        <input name="medida" type="text" class="form-control <?= isset($err->medida) ? 'is-invalid' : '' ?>" value="<?= isset($data->medida) ? $data->medida : '' ?>">
        <?php if (isset($err->medida)) : ?>
            <div class="invalid-feedback">
                <?= $err->medida ?>
            </div>
        <?php endif; ?>
    </div>
</div>

<div class="col-md-6 position-relative mt-3">
    <label class="form-label mb-1">Nombre Corto / Simbolo</label>
    <div class="input-group">
        <span class="input-group-text"><i class="bi bi-type"></i></span>
        <input name="nombre_corto" type="text" class="form-control <?= isset($err->nombre_corto) ? 'is-invalid' : '' ?>" value="<?= isset($data->nombre_corto) ? $data->nombre_corto : '' ?>">
        <?php if (isset($err->nombre_corto)) : ?>
            <div class="invalid-feedback">
                <?= $err->nombre_corto ?>
            </div>
        <?php endif; ?>
    </div>
</div>


<input type="hidden" name="id" value="<?= isset($data->id) ? $data->id : '' ?> ">