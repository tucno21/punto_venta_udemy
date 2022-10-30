const addAbono = document.querySelectorAll(".addAbono");
const cliente = document.querySelector("#cliente");
const serie = document.querySelector("#serie");
const totalVenta = document.querySelector("#totalVenta");
const montoRestante = document.querySelector("#montoRestante");
const abonar = document.querySelector("#abonar");

cargarEventListeners();
function cargarEventListeners() {
  document.addEventListener("DOMContentLoaded", () => {
    consultarAbono();
  });
}

function consultarAbono() {
  addAbono.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      e.preventDefault();
      abonar.value = "";
      serie.value = "";
      totalVenta.value = "";
      montoRestante.value = "";

      //data-link
      const link = e.target.parentNode.getAttribute("data-link");
      //consultar
      const response = await fetch(link);
      const data = await response.json();
      console.log(data.data);
      if (data.status) {
        //<span id="cliente"> agregar texto nombre cliente

        cliente.textContent = data.data.nombre;
        serie.value = data.data.serie;
        totalVenta.value = data.data.monto;
        //mostrar con dos decimales
        let faltante = data.data.monto - data.data.abono;
        montoRestante.value = faltante.toFixed(2);
        // montoRestante.value = data.data.total - data.data.abono;
        abonar.focus();

        eviarAbonoUser(data.data.id, faltante);
      }
    });
  });
}

function eviarAbonoUser(id, faltante) {
  const enviarAbono = document.querySelector("#enviarAbono");
  enviarAbono.addEventListener("click", async (e) => {
    e.preventDefault();
    const link = e.target.getAttribute("data-link");

    if (abonar.value !== "") {
      if (parseInt(abonar.value) > parseInt(faltante)) {
        toastPersonalizado(
          "error",
          "El abono no puede ser mayor al monto restante"
        );
        return;
      }

      let data = new FormData();
      data.append("abono", abonar.value);
      data.append("id_credito", id);
      //post
      const response = await fetch(link, {
        method: "POST",
        body: data,
      });
      const dataResponse = await response.json();
      if (dataResponse.status) {
        toastPersonalizado("success", dataResponse.message);
        setTimeout(() => {
          location.reload();
        }, 2000);
      } else {
        toastPersonalizado("error", dataResponse.message);
        setTimeout(() => {
          location.reload();
        }, 2000);
      }
    } else {
      toastPersonalizado("error", "Ingrese un monto");
    }
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
