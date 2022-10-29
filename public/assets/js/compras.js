const barcode = document.getElementById("barcode");
const nombre = document.getElementById("nombre");
const grupoBarcode = document.getElementById("grupoBarcode");
const inputBarcode = document.getElementById("inputBarcode");
const grupoNombre = document.getElementById("grupoNombre");
const inputNombre = document.getElementById("inputNombre");
const tablaCompras = document.querySelector("#tablaCompras");
const totalPagar = document.querySelector("#totalPagar");
const formCompras = document.querySelector("#formCompras");
let productosCarrito = [];

// Listeners
cargarEventListeners();
function cargarEventListeners() {
  inputBarcode.addEventListener("keyup", agregarProductoBarcode);
  inputNombre.addEventListener("keyup", agregarProductoNombre);

  tablaCompras.addEventListener("click", eliminarProducto);

  barcode.addEventListener("click", cambioBarcode);
  nombre.addEventListener("click", cambioNombre);

  // NUEVO: Contenido cargado
  document.addEventListener("DOMContentLoaded", () => {
    productosCarrito = JSON.parse(localStorage.getItem("productos")) || [];
    // console.log(articulosCarrito);
    carritoHTML();

    buscarProveedor();

    enviarCompra();

    inputBarcode.focus();
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
      precio: data.data.precio_compra,
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
  tablaCompras.innerHTML = "";
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
    tablaCompras.appendChild(row);
  });

  //agregar el carrito de compras al storage
  sincronizarStorage();
  sumaPagar();
  //agregar evento a los input cantidad
  aumentarCantidad();
}
//pasar datos a localStorage
function sincronizarStorage() {
  localStorage.setItem("productos", JSON.stringify(productosCarrito));
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

//cambiar cantidad de productos
function aumentarCantidad() {
  const productoCantidad = document.querySelectorAll(".productoCantidad");
  productoCantidad.forEach((cantidad) => {
    cantidad.addEventListener("change", (e) => {
      const productoId = e.target.getAttribute("data-id");
      const cantidad = e.target.value;
      productosCarrito.forEach((producto) => {
        if (producto.id === parseInt(productoId)) {
          producto.cantidad = parseInt(cantidad);
        }
      });
      carritoHTML();
    });
  });
}

//buscar proveedor
function buscarProveedor() {
  const inputProveedor = document.querySelector("#inputProveedor");
  const link = inputProveedor.getAttribute("data-link");

  $("#inputProveedor").autocomplete({
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
      let nombreProveedor = document.querySelector("#nombreProveedor");
      let direccionProveedor = document.querySelector("#direccionProveedor");
      let idProveedor = document.querySelector("#idProveedor");
      //valores
      nombreProveedor.value = ui.item.nombre;
      direccionProveedor.value = ui.item.direccion;
      idProveedor.value = ui.item.id;
    },
  });
}

//enviar compras
function enviarCompra() {
  formCompras.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(formCompras);
    //carrito vacio
    if (productosCarrito.length === 0) {
      toastPersonalizado("error", "Carrito vacio");
      return;
    }

    if (data.get("id_proveedor") === "") {
      toastPersonalizado("error", "Seleccione un proveedor");
      return;
    }

    if (data.get("serie") === "") {
      toastPersonalizado("error", "Ingrese la serie");
      return;
    }

    data.append("productos", JSON.stringify(productosCarrito));
    //add total
    data.append("total", totalPagar.value);
    //enviar
    fetch(formCompras.action, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          //limpiar carrito
          productosCarrito = [];
          //eliminar localstorage
          localStorage.removeItem("productos");
          carritoHTML();
          //limpiar form
          formCompras.reset();

          let idProveedor = document.querySelector("#idProveedor");
          idProveedor.value = "";
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
              // location.reload();
            } else if (result.isDenied) {
              const linkFactura =
                linkpdf.getAttribute("data-link") +
                `?id=${data.message}&tipo=factura`;
              window.open(linkFactura, "_blank");
              //recargar pagina actual
              // location.reload();
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
