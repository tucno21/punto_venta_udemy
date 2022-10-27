<div class="col-md-6 position-relative mt-3">
    <label class="form-label mb-1">Nombre</label>
    <div class="input-group">
        <span class="input-group-text"><i class="bi bi-bookmarks"></i></span>
        <input name="categoria" type="text" class="form-control <?= isset($err->categoria) ? 'is-invalid' : '' ?>" value="<?= isset($data->categoria) ? $data->categoria : '' ?>">
        <?php if (isset($err->categoria)) : ?>
            <div class="invalid-feedback">
                <?= $err->categoria ?>
            </div>
        <?php endif; ?>
    </div>
</div>


<input type="hidden" name="id" value="<?= isset($data->id) ? $data->id : '' ?> ">