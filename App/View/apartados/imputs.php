<div class="row g-2">
    <div class="col-md-4">
        <div class="">
            <label class="form-label mb-1">Buscar Cliente</label>
            <div class="input-group">
                <span class="input-group-text"><i class="bi bi-search"></i></span>
                <input name="" type="text" class="form-control" id="inputCliente" data-link="<?= route('apartados.cliente')  ?>">
            </div>
        </div>
        <div class="">
            <label class="form-label mb-1">Nombre</label>
            <div class="input-group">
                <span class="input-group-text"><i class="bi bi-person"></i></span>
                <input name="" type="text" class="form-control" disabled id="nombreCliente">
            </div>
        </div>
        <div class="">
            <label class="form-label mb-1">Teléfono</label>
            <div class="input-group">
                <span class="input-group-text"><i class="bi bi-house-door"></i></span>
                <input name="" type="text" class="form-control" disabled id="direccionCliente">
                <input name="id_cliente" type="hidden" id="idCliente">
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="">
            <label class="form-label mb-1">Vendedor</label>
            <div class="input-group">
                <span class="input-group-text"><i class="bi bi-person"></i></span>
                <input name="" type="text" class="form-control" disabled value="<?= session()->user()->nombre ?>">
                <input name="id_usuario" type="hidden" value="<?= session()->user()->id ?>">
            </div>
        </div>
        <div class="">
            <label class="form-label mb-1">Total a pagar</label>
            <div class="input-group">
                <span class="input-group-text"><i class="bi bi-currency-dollar"></i></span>
                <input name="total" id="totalPagar" type="text" class="form-control" disabled>
            </div>
        </div>
        <div class="">
            <label class="form-label mb-1">Color</label>
            <div class="input-group">
                <span class="input-group-text"><i class="bi bi-paint-bucket"></i></span>
                <input name="color" id="color" type="color" class="form-control">
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="">
            <label class="form-label mb-1">Fecha Apartado</label>
            <div class="input-group">
                <span class="input-group-text"><i class="bi bi-calendar-day"></i></span>
                <input name="fecha_apartado" id="fecha_apartado" type="date" class="form-control" min="<?= date('Y-m-d') ?>">
            </div>
        </div>
        <div class="">
            <label class="form-label mb-1">Fecha Retiro</label>
            <div class="input-group">
                <span class="input-group-text"><i class="bi bi-calendar-check"></i></span>
                <input name="fecha_retiro" id="fecha_retiro" type="date" class="form-control">
            </div>
        </div>
        <div class="">
            <label class="form-label mb-1">Abono</label>
            <div class="input-group">
                <span class="input-group-text"><i class="bi bi-currency-dollar"></i></span>
                <input name="abono" id="abono" type="number" class="form-control">
            </div>
        </div>


        <div class="text-center mt-3">
            <button class="btn btn-success" type="submit">Completar</button>
        </div>
    </div>
</div>