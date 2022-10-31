const modalApartados = new bootstrap.Modal("#modalApartados");
const fecha_apartado = document.querySelector("#fecha_apartado");
const fecha_retiro = document.querySelector("#fecha_retiro");

document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
    locale: "es",
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
  });
  calendar.render();
});
