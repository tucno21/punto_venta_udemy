const barcode = document.getElementById("barcode");
const nombre = document.getElementById("nombre");
const grupoBarcode = document.getElementById("grupoBarcode");
const inputBarcode = document.getElementById("inputBarcode");
const grupoNombre = document.getElementById("grupoNombre");
const inputNombre = document.getElementById("inputNombre");
const tablaVentas = document.querySelector("#tablaVentas");
const totalPagar = document.querySelector("#totalPagar");
const formVentas = document.querySelector("#formVentas");
let productosCarrito = [];
let cantidadProducto = 0;
const modalApartados = new bootstrap.Modal("#modalApartados");
const fecha_apartado = document.querySelector("#fecha_apartado");
const fecha_retiro = document.querySelector("#fecha_retiro");
const abono = document.querySelector("#abono");
const linkListaApartado = document.querySelector("#listaApartado");
const procesoEntrega = new bootstrap.Modal("#procesoEntrega");

// console.log(linkListaApartado.getAttribute("data-link"));

// Listeners
cargarEventListeners();
function cargarEventListeners() {
  inputBarcode.addEventListener("keyup", agregarProductoBarcode);
  inputNombre.addEventListener("keyup", agregarProductoNombre);

  tablaVentas.addEventListener("click", eliminarProducto);

  barcode.addEventListener("click", cambioBarcode);
  nombre.addEventListener("click", cambioNombre);

  // NUEVO: Contenido cargado
  document.addEventListener("DOMContentLoaded", () => {
    productosCarrito =
      JSON.parse(localStorage.getItem("apartadosCarrito")) || [];
    // console.log(articulosCarrito);
    carritoHTML();

    buscarCliente();

    enviarCompra();

    inputBarcode.focus();

    var calendarEl = document.getElementById("calendar");
    var calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      },
      locale: "es",
      events: linkListaApartado.getAttribute("data-link"),
      dateClick: function (info) {
        const fechaActual = document.querySelector("#fechaActual").value;
        if (fechaActual > info.dateStr) {
          toastPersonalizado("warning", "No puedes apartar en fechas pasadas");
          return;
        } else {
          fecha_apartado.value = info.dateStr;
          fecha_retiro.setAttribute("min", fecha_apartado.value);
          modalApartados.show();
        }
      },
      eventClick: function (info) {
        // console.log(info.event.id);
        realizarEntrega(info.event.id);
      },
    });
    calendar.render();
  });
}
//realizar entrega
async function realizarEntrega(id) {
  const apartadoid = document.querySelector("#apartadoid");
  const link = apartadoid.getAttribute("data-link") + "?id=" + id;
  const clienteApartado = document.querySelector("#clienteApartado");
  const montoApartado = document.querySelector("#montoApartado");
  const abonoApartado = document.querySelector("#abonoApartado");
  const restanteApartado = document.querySelector("#restanteApartado");
  const id_apartado = document.querySelector("#id_apartado");

  clienteApartado.value = "";
  montoApartado.value = "";
  abonoApartado.value = "";
  restanteApartado.value = "";

  // ejecutar link
  const response = await fetch(link);
  const data = await response.json();

  clienteApartado.value = data.nombre;
  montoApartado.value = data.total;
  abonoApartado.value = data.abono;
  restanteApartado.value = data.total - data.abono;
  id_apartado.value = data.id;

  procesoEntrega.show();

  const buttonEdit = document.querySelector("#buttonEdit");
  buttonEdit.addEventListener("click", (e) => {
    e.preventDefault();
    const editarApartado = document.querySelector("#editarApartado");
    const linkEditar = editarApartado.getAttribute("data-link");

    const formData = new FormData();
    formData.append("id", id_apartado.value);

    fetch(linkEditar, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status) {
          toastPersonalizado("success", data.message);
          procesoEntrega.hide();
          // tiempo de 3000 milisegundos
          setTimeout(() => {
            location.reload();
          }, 4000);
        } else {
          toastPersonalizado("error", data.message);
        }
      });
  });
}

// cuando selecciona barcode se oculta nombre
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
//cuando ingresa datos en input barcode
function agregarProductoBarcode(e) {
  if (barcode.checked) {
    let link = barcode.getAttribute("data-link");
    let linkCompleto = link + e.target.value;
    //cuando da enter llamar funcion
    if (e.keyCode === 13) {
      buscarBarcode(linkCompleto);
      inputBarcode.value = "";
      inputBarcode.focus();
    }
  }
}
//cuando ingresa datos en input nombre
function agregarProductoNombre(e) {
  if (nombre.checked) {
    let link = nombre.getAttribute("data-link");
    buscarNombreProducto(link);
  }
}
//traer datos de barcode
async function buscarBarcode(link) {
  const response = await fetch(link);
  const data = await response.json();

  if (data.status) {
    // console.log(data.data);
    const result = {
      id: data.data.id,
      label: data.data.descripcion,
      precio: data.data.precio_venta,
    };
    agregarProductoCarrito(result);
  } else {
    toastPersonalizado("error", "No se encontro el producto");
    return;
  }
}
//traer datos por nombre jquery
function buscarNombreProducto(link) {
  $("#inputNombre").autocomplete({
    source: function (request, response) {
      $.ajax({
        url: link,
        dataType: "json",
        data: {
          term: request.term,
        },
        success: function (data) {
          response(data);
        },
      });
    },
    minLength: 2,
    select: function (event, ui) {
      //limpiar input
      agregarProductoCarrito(ui.item);
    },
  });
}
//generar html
function carritoHTML() {
  //limpiar html
  tablaVentas.innerHTML = "";
  //recorre el carrito y genera el html
  productosCarrito.forEach((producto) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${producto.product}</td>
        <td width="100"><input type="number" class="form-control form-control-sm productoCantidad" data-id="${
          producto.id
        }"  value="${producto.cantidad}"></td>
        <td>${producto.precio}</td>
        <td>${producto.cantidad * producto.precio}</td>
        <td>
            <a href="#" class="borrar-producto text-danger" data-id="${
              producto.id
            }"><i class="bi bi-trash3"></i></a>
        </td>
        `;
    //agrega el html del carrito en el tbody
    tablaVentas.appendChild(row);
  });

  //agregar el carrito de compras al storage
  sincronizarStorage();
  sumaPagar();
  //agregar evento a los input cantidad
  aumentarCantidad();
}
//pasar datos a localStorage
function sincronizarStorage() {
  localStorage.setItem("apartadosCarrito", JSON.stringify(productosCarrito));
}
//eliminar lista de carrito
function eliminarProducto(e) {
  e.preventDefault();
  //e.target padre del elemento que se presiona
  if (e.target.parentNode.classList.contains("borrar-producto")) {
    const productoId = e.target.parentNode.getAttribute("data-id");
    //convertir de string a numero
    productosCarrito = productosCarrito.filter(
      (producto) => producto.id !== parseInt(productoId)
    );

    carritoHTML();
  }
}
//agregar lista de carrito
function agregarProductoCarrito(data) {
  const producto = {
    id: data.id,
    product: data.label,
    precio: data.precio,
    cantidad: 1,
  };
  // console.log(producto);
  //comparar si el producto ya existe
  if (productosCarrito.some((prod) => prod.id === producto.id)) {
    const productos = productosCarrito.map((prod) => {
      if (prod.id === producto.id) {
        cantProducto(prod.id);
        //cantidadProducto !== undefined
        if (cantidadProducto !== 0) {
          if (parseInt(prod.cantidad) > parseInt(cantidadProducto) - 1) {
            //toast error
            toastPersonalizado(
              "error",
              "Solo hay " + cantidadProducto + " productos"
            );
            let cantidad = parseInt(cantidadProducto);
            prod.cantidad = cantidad;
            return prod;
          }
        }

        let cantidad = parseInt(prod.cantidad);
        cantidad++;
        prod.cantidad = cantidad;
        return prod;
      } else {
        return prod;
      }
    });
    productosCarrito = [...productos];
  } else {
    //si no existe agregar
    productosCarrito = [...productosCarrito, producto];
  }
  carritoHTML();
}

//consultar cantidad de producto
async function cantProducto(id) {
  const cantProducto = document.querySelector("#cantProducto");
  const link = cantProducto.getAttribute("data-link") + "?id=" + id;
  const response = await fetch(link);
  const data = await response.json();
  // console.log(data.cant);
  cantidadProducto = data.cant;
  return cantidadProducto;
}

//cambiar cantidad de productos
function aumentarCantidad() {
  const productoCantidad = document.querySelectorAll(".productoCantidad");
  productoCantidad.forEach((cantidad) => {
    cantidad.addEventListener("change", async (e) => {
      const productoId = e.target.getAttribute("data-id");

      //consultar cantProducto
      const cantProducto = document.querySelector("#cantProducto");
      const link = cantProducto.getAttribute("data-link") + "?id=" + productoId;
      const response = await fetch(link);
      const data = await response.json();

      //cantidad de venta
      const cantidad = e.target.value;

      //comparar si la cantidad es mayor a la cantidad de productos
      if (cantidad > data.cant) {
        toastPersonalizado("error", "Solo hay " + data.cant + " productos");
        //ejecutar funcion para actualizar el carrito
        productosCarrito = productosCarrito.map((prod) => {
          if (prod.id === parseInt(productoId)) {
            prod.cantidad = data.cant;
            return prod;
          } else {
            return prod;
          }
        });
        carritoHTML();
        return;
      }

      productosCarrito.forEach((producto) => {
        if (producto.id === parseInt(productoId)) {
          producto.cantidad = parseInt(cantidad);
        }
      });
      carritoHTML();
    });
  });
}

//suma total a pagar
function sumaPagar() {
  totalPagar.value = "";
  let total = 0;
  productosCarrito.forEach((producto) => {
    total += producto.cantidad * producto.precio;
  });
  // return total;
  totalPagar.value = total;
}

//buscar proveedor
function buscarCliente() {
  const inputCliente = document.querySelector("#inputCliente");
  const link = inputCliente.getAttribute("data-link");

  $("#inputCliente").autocomplete({
    source: function (request, response) {
      $.ajax({
        url: link,
        dataType: "json",
        data: {
          term: request.term,
        },
        success: function (data) {
          response(data);
        },
      });
    },
    minLength: 2,
    select: function (event, ui) {
      let nombreCliente = document.querySelector("#nombreCliente");
      let direccionCliente = document.querySelector("#direccionCliente");
      let idCliente = document.querySelector("#idCliente");
      //valores
      nombreCliente.value = ui.item.nombre;
      direccionCliente.value = ui.item.telefono;
      idCliente.value = ui.item.id;
    },
  });
}

//enviar compras
function enviarCompra() {
  formVentas.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(formVentas);
    //carrito vacio
    if (productosCarrito.length === 0) {
      toastPersonalizado("error", "Carrito vacio");
      return;
    }

    if (data.get("id_cliente") === "") {
      toastPersonalizado("error", "Seleccione un cliente");
      return;
    }

    const serie = document.getElementById("serie");
    if (serie.value === "") {
      toastPersonalizado("error", "Ingrese la serie");
      return;
    }

    if (data.get("fecha_apartado") === "") {
      toastPersonalizado("error", "Seleccione la fecha de apartado");
      return;
    }

    if (data.get("fecha_retiro") === "") {
      toastPersonalizado("error", "Seleccione la fecha de retiro");
      return;
    }

    if (data.get("abono") === "") {
      toastPersonalizado("error", "Ingrese el abono");
      return;
    }

    if (parseInt(data.get("abono")) > parseInt(totalPagar.value)) {
      toastPersonalizado("error", "El abono no puede ser mayor al total");
      return;
    }

    data.append("productos", JSON.stringify(productosCarrito));
    //add total
    data.append("total", totalPagar.value);
    //serie
    data.append("serie", serie.value);
    //enviar
    fetch(formVentas.action, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          //cerrar modal bootstrap 5
          modalApartados.hide();
          //limpiar carrito
          productosCarrito = [];
          //eliminar localstorage
          localStorage.removeItem("apartadosCarrito");
          carritoHTML();
          //limpiar form
          formVentas.reset();

          serie.value = "";
          let idCliente = document.querySelector("#idCliente");
          idCliente.value = "";
          inputBarcode.value = "";
          inputNombre.value = "";

          if (barcode.checked) {
            inputBarcode.focus();
          } else if (nombre.checked) {
            inputNombre.focus();
          }

          const linkpdf = document.querySelector("#linkPdf");

          //swetalert
          Swal.fire({
            title: "Compra registrada, desea imprimir?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "ticket",
            denyButtonText: "Factura",
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              const linkTicket =
                linkpdf.getAttribute("data-link") +
                `?id=${data.message}&tipo=ticket`;
              window.open(linkTicket, "_blank");
              //recargar pagina actual
              location.reload();
            } else if (result.isDenied) {
              const linkFactura =
                linkpdf.getAttribute("data-link") +
                `?id=${data.message}&tipo=factura`;
              window.open(linkFactura, "_blank");
              //recargar pagina actual
              location.reload();
            }
          });
        }
      });
  });
}

//funcion toast personalizado
function toastPersonalizado(icon, title) {
  Swal.fire({
    toast: true,
    position: "top-right",
    icon: icon,
    title: title,
    showConfirmButton: false,
    timer: 2000,
    //modificar color
    iconColor: "white",
    customClass: {
      popup: "colored-toast",
    },
    timerProgressBar: true,
  });
}
