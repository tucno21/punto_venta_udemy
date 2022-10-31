const barcode = document.getElementById("barcode");
const nombre = document.getElementById("nombre");
const grupoBarcode = document.getElementById("grupoBarcode");
const inputBarcode = document.getElementById("inputBarcode");
const grupoNombre = document.getElementById("grupoNombre");
const inputNombre = document.getElementById("inputNombre");

cargarEventListeners();
function cargarEventListeners() {
  barcode.addEventListener("click", cambioBarcode);
  nombre.addEventListener("click", cambioNombre);

  // NUEVO: Contenido cargado
  document.addEventListener("DOMContentLoaded", () => {});
}

function cambioBarcode(e) {
  //eliminar class d-none grupoBarcode
  grupoBarcode.classList.remove("d-none");
  //agregar class d-none grupoNombre
  grupoNombre.classList.add("d-none");
  inputBarcode.value = "";
  inputBarcode.focus();
}
//cuando selecciona nombre se oculta barcode
function cambioNombre(e) {
  //eliminar class d-none grupoNombre
  grupoNombre.classList.remove("d-none");
  //agregar class d-none grupoBarcode
  grupoBarcode.classList.add("d-none");
  inputNombre.value = "";
  inputNombre.focus();
}
