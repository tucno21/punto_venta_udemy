window.onload = function (event) {
  var toastElList = [].slice.call(document.querySelectorAll(".toast"));
  var toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl);
  });
  toastList.forEach((toast) => toast.show());
};

let deleteItem = document.querySelectorAll(".deleteItem");
let userStatus = document.querySelectorAll(".userStatus");
let medidasStatus = document.querySelectorAll(".medidasStatus");
let categoriaStatus = document.querySelectorAll(".categoriaStatus");

if (deleteItem) {
  deleteItem.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      let urlRequest = element.getAttribute("href");
      //alert
      deleteAlert(urlRequest);
    });
  });
}

if (userStatus) {
  //   console.log("hol");
  userStatus.forEach((element) => {
    element.addEventListener("click", (e) => {
      //capturar data-link
      let urlRequest = element.getAttribute("data-link");
      //alert
      statusAlert(urlRequest);
      //   console.log(urlRequest);
    });
  });
}

if (medidasStatus) {
  //   console.log("hol");
  medidasStatus.forEach((element) => {
    element.addEventListener("click", (e) => {
      //capturar data-link
      let urlRequest = element.getAttribute("data-link");
      //alert
      statusAlert(urlRequest);
      //   console.log(urlRequest);
    });
  });
}
if (categoriaStatus) {
  //   console.log("hol");
  categoriaStatus.forEach((element) => {
    element.addEventListener("click", (e) => {
      //capturar data-link
      let urlRequest = element.getAttribute("data-link");
      //alert
      statusAlert(urlRequest);
      //   console.log(urlRequest);
    });
  });
}

function deleteAlert(urlRequest) {
  Swal.fire({
    title: "¿esta seguro?",
    text: "¡No podrás revertir esto!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "¡Sí, bórralo!",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = urlRequest;
    }
  });
}

function statusAlert(urlRequest) {
  Swal.fire({
    title: "¿esta seguro?",
    text: "desea cambiar el estado",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "¡Sí, cambiar!",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = urlRequest;
    }
  });
}
