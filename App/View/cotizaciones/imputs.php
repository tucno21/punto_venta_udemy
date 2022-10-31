<div class="row g-2">
    <div class="col-md-5">
        <div class="">
            <label class="form-label mb-1">Buscar Cliente</label>
            <div class="input-group">
                <span class="input-group-text"><i class="bi bi-search"></i></span>
                <input name="" type="text" class="form-control" id="inputCliente" data-link="<?= route('cotizaciones.cliente')  ?>">
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
    <div class="col-md-2">

    </div>
    <div class="col-md-5">
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
            <label class="form-label mb-1">Validez Oferta</label>
            <div class="input-group">
                <span class="input-group-text"><i class="bi bi-123"></i></span>
                <select name="validez" class="form-select">
                    <option value="5">5 dias</option>
                    <option value="10">10 dias</option>
                </select>
            </div>
        </div>


        <div class="text-center mt-3">
            <button class="btn btn-success" type="submit">Completar</button>
        </div>
    </div>
</div>