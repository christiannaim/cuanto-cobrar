function calcular() {
  const horas = document.getElementById("horas").value;
  const tarifa = document.getElementById("tarifa").value;
  const moneda = document.getElementById("moneda").value;
  const resultadoDiv = document.getElementById("resultado");

  if (horas === "" || tarifa === "") {
    resultadoDiv.innerText = "Completa todos los campos";
    return;
  }

  const total = Number(horas) * Number(tarifa);
  const texto = "Deberías cobrar " + total + " " + moneda;

  resultadoDiv.innerText = texto;

  // GUARDAR
  localStorage.setItem("ultimoCalculo", texto);
}

// CARGAR AL ABRIR
document.addEventListener("DOMContentLoaded", function () {
  const guardado = localStorage.getItem("ultimoCalculo");
  if (guardado) {
    document.getElementById("resultado").innerText = guardado;
  }
});