let deleteItem = document.querySelectorAll(".deleteItem");

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
