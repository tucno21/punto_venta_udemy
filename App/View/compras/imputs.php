<div class="row g-2">
    <div class="col-md-5">
        <div class="">
            <label class="form-label mb-1">Buscar Proveedor</label>
            <div class="input-group">
                <span class="input-group-text"><i class="bi bi-search"></i></span>
                <input name="" type="text" class="form-control" id="inputProveedor" data-link="<?= route('compras.proveedor')  ?>">
            </div>
        </div>
        <div class="">
            <label class="form-label mb-1">Nombre</label>
            <div class="input-group">
                <span class="input-group-text"><i class="bi bi-person"></i></span>
                <input name="" type="text" class="form-control" disabled id="nombreProveedor">
            </div>
        </div>
        <div class="">
            <label class="form-label mb-1">Dirección</label>
            <div class="input-group">
                <span class="input-group-text"><i class="bi bi-house-door"></i></span>
                <input name="" type="text" class="form-control" disabled id="direccionProveedor">
                <input name="id_proveedor" type="hidden" id="idProveedor">
            </div>
        </div>
    </div>
    <div class="col-md-2">

    </div>
    <div class="col-md-5">
        <div class="">
            <label class="form-label mb-1">Comprador</label>
            <div class="input-group">
                <span class="input-group-text"><i class="bi bi-person"></i></span>
                <input name="" type="text" class="form-control" disabled value="<?= session()->user()->nombre ?>">
                <input name="id_usuario" type="hidden" value="<?= session()->user()->id ?>">
            </div>
        </div>
        <div class="">
            <label class="form-label mb-1">Toral a pagar</label>
            <div class="input-group">
                <span class="input-group-text"><i class="bi bi-currency-dollar"></i></span>
                <input name="total" id="totalPagar" type="text" class="form-control" disabled>
            </div>
        </div>
        <div class="">
            <label class="form-label mb-1">Serie</label>
            <div class="input-group">
                <span class="input-group-text"><i class="bi bi-123"></i></span>
                <input name="serie" type="text" class="form-control">
            </div>
        </div>

        <div class="text-center mt-3">
            <button class="btn btn-success" type="submit">Completar</button>
        </div>
    </div>
</div>