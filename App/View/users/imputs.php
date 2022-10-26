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
    <label class="form-label mb-1">Apellidos</label>
    <div class="input-group">
        <span class="input-group-text"><i class="bi bi-input-cursor-text"></i></span>
        <input name="apellido" type="text" class="form-control <?= isset($err->apellido) ? 'is-invalid' : '' ?>" value="<?= isset($data->apellido) ? $data->apellido : '' ?>">
        <?php if (isset($err->apellido)) : ?>
            <div class="invalid-feedback">
                <?= $err->apellido ?>
            </div>
        <?php endif; ?>
    </div>
</div>

<div class="col-md-6 position-relative mt-3">
    <label class="form-label mb-1">Correo</label>
    <div class="input-group">
        <span class="input-group-text"><i class="bi bi-envelope"></i></span>
        <input name="email" type="email" class="form-control <?= isset($err->email) ? 'is-invalid' : '' ?>" value="<?= isset($data->email) ? $data->email : '' ?>">
        <?php if (isset($err->email)) : ?>
            <div class="invalid-feedback">
                <?= $err->email ?>
            </div>
        <?php endif; ?>
    </div>
</div>

<div class="col-md-6 position-relative mt-3">
    <label class="form-label mb-1">Contraseña</label>
    <div class="input-group">
        <span class="input-group-text"><i class="bi bi-key"></i></span>
        <input name="password" type="password" class="form-control <?= isset($err->password) ? 'is-invalid' : '' ?>" value="<?= isset($data->password) ? $data->password : '' ?>">
        <?php if (isset($err->password)) : ?>
            <div class="invalid-feedback">
                <?= $err->password ?>
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
    <label class="form-label mb-1">Rol</label>
    <div class="input-group">
        <span class="input-group-text"><i class="bi bi-gear"></i></span>
        <select id="rol" name="rol_id" class="form-select <?= isset($err->rol_id) ? 'is-invalid' : '' ?>">
            <option value="">Seleccione...</option>
            <?php foreach ($roles as $rol) : ?>
                <option <?= isset($data->rol_id) && $data->rol_id == $rol->id ? 'selected' : '' ?> value="<?= $rol->id; ?>"><?= $rol->rol_name; ?></option>
            <?php endforeach; ?>
        </select>
        <?php if (isset($err->rol_id)) : ?>
            <div class="invalid-feedback">
                <?= $err->rol_id ?>
            </div>
        <?php endif; ?>
    </div>
</div>

<!-- estado -->
<div class="col-md-6 position-relative">
    <label class="form-label mb-1">Estado</label>
    <div class="input-group">
        <spam class="input-group-text"><i class="bi bi-shield-lock"></i></spam>
        <div class="form-control  <?= isset($err->status) ? 'is-invalid' : '' ?>">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="status" id="status1" value="1" <?= (isset($data->status) && $data->status == 1) ? 'checked' : '' ?>>
                <label class="form-check-label" for="status1">Habilitar</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="status" id="status2" value="0" <?= (isset($data->status) && $data->status == 0) ? 'checked' : '' ?>>
                <label class="form-check-label" for="status2">Inhabilitar</label>
            </div>
        </div>
        <?php if (isset($err->status)) : ?>
            <div class="invalid-feedback">
                <?= $err->status ?>
            </div>
        <?php endif; ?>
    </div>
</div>


<input type="hidden" name="id" value="<?= isset($data->id) ? $data->id : '' ?> ">