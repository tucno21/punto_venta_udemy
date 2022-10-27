<div class="col-md-6 position-relative mt-3">
    <label class="form-label mb-1">Código</label>
    <div class="input-group">
        <span class="input-group-text"><i class="bi bi-upc"></i></span>
        <input name="codigo" type="text" class="form-control <?= isset($err->codigo) ? 'is-invalid' : '' ?>" value="<?= isset($data->codigo) ? $data->codigo : '' ?>">
        <?php if (isset($err->codigo)) : ?>
            <div class="invalid-feedback">
                <?= $err->codigo ?>
            </div>
        <?php endif; ?>
    </div>
</div>

<div class="col-md-6 position-relative mt-3">
    <label class="form-label mb-1">Descripción</label>
    <div class="input-group">
        <span class="input-group-text"><i class="bi bi-list-nested"></i></span>
        <input name="descripcion" type="text" class="form-control <?= isset($err->descripcion) ? 'is-invalid' : '' ?>" value="<?= isset($data->descripcion) ? $data->descripcion : '' ?>">
        <?php if (isset($err->descripcion)) : ?>
            <div class="invalid-feedback">
                <?= $err->descripcion ?>
            </div>
        <?php endif; ?>
    </div>
</div>

<div class="col-md-6 position-relative mt-3">
    <label class="form-label mb-1">Precio de Compra</label>
    <div class="input-group">
        <span class="input-group-text"><i class="bi bi-coin"></i></span>
        <input name="precio_compra" type="number" step="0.01" min="0" class="form-control <?= isset($err->precio_compra) ? 'is-invalid' : '' ?>" value="<?= isset($data->precio_compra) ? $data->precio_compra : '' ?>">
        <?php if (isset($err->precio_compra)) : ?>
            <div class="invalid-feedback">
                <?= $err->precio_compra ?>
            </div>
        <?php endif; ?>
    </div>
</div>

<div class="col-md-6 position-relative mt-3">
    <label class="form-label mb-1">Precio de Venta</label>
    <div class="input-group">
        <span class="input-group-text"><i class="bi bi-coin"></i></span>
        <input name="precio_venta" type="number" step="0.01" min="0" class="form-control <?= isset($err->precio_venta) ? 'is-invalid' : '' ?>" value="<?= isset($data->precio_venta) ? $data->precio_venta : '' ?>">
        <?php if (isset($err->precio_venta)) : ?>
            <div class="invalid-feedback">
                <?= $err->precio_venta ?>
            </div>
        <?php endif; ?>
    </div>
</div>

<div class="col-md-6 position-relative mt-3">
    <label class="form-label mb-1">Medidas</label>
    <div class="input-group">
        <span class="input-group-text"><i class="bi bi-rulers"></i></span>
        <select id="rol" name="id_medida" class="form-select <?= isset($err->id_medida) ? 'is-invalid' : '' ?>">
            <option value="">Seleccione...</option>
            <?php foreach ($medidas as $rol) : ?>
                <option <?= isset($data->id_medida) && $data->id_medida == $rol->id ? 'selected' : '' ?> value="<?= $rol->id; ?>"><?= $rol->medida; ?></option>
            <?php endforeach; ?>
        </select>
        <?php if (isset($err->id_medida)) : ?>
            <div class="invalid-feedback">
                <?= $err->id_medida ?>
            </div>
        <?php endif; ?>
    </div>
</div>

<div class="col-md-6 position-relative mt-3">
    <label class="form-label mb-1">Categorias</label>
    <div class="input-group">
        <span class="input-group-text"><i class="bi bi-tags"></i></span>
        <select id="rol" name="id_categoria" class="form-select <?= isset($err->id_categoria) ? 'is-invalid' : '' ?>">
            <option value="">Seleccione...</option>
            <?php foreach ($categorias as $rol) : ?>
                <option <?= isset($data->id_categoria) && $data->id_categoria == $rol->id ? 'selected' : '' ?> value="<?= $rol->id; ?>"><?= $rol->categoria; ?></option>
            <?php endforeach; ?>
        </select>
        <?php if (isset($err->id_categoria)) : ?>
            <div class="invalid-feedback">
                <?= $err->id_categoria ?>
            </div>
        <?php endif; ?>
    </div>
</div>

<!-- foto -->
<div class="col-md-6">

    <div class="mb-3">
        <p class="p-0 m-0">Foto</p>
        <div class="input-group ">
            <spam class="input-group-text"><i class="bi bi-image"></i></spam>
            <input type="file" class="form-control visorFoto <?= isset($err->foto) ? 'is-invalid' : '' ?>" name="foto" value="<?= isset($data->foto) ? $data->foto : '' ?>">
            <?php if (isset($err->foto)) : ?>
                <div class="invalid-feedback">
                    <?= $err->foto ?>
                </div>
            <?php endif; ?>
        </div>
    </div>

    <div class="input-group text-center d-flex justify-content-center">
        <div class="" style="width: 8rem;">
            <?php if (!empty($data->foto)) : ?>
                <img class="img-thumbnail card-img-top previsualizar" src="<?= base_url('/assets/img/' . $data->foto) ?>" alt="Card image cap">
            <?php else : ?>
                <img class="img-thumbnail card-img-top previsualizar" src="<?= base_url('/assets/img/producto.png') ?>" alt="Card image cap">
            <?php endif; ?>
            <div class="my-2">
                <p class="card-text">Peso máximo de 1mb</p>
            </div>
        </div>
    </div>

</div>

<input type="hidden" name="id" value="<?= isset($data->id) ? $data->id : '' ?> ">