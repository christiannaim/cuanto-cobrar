function calcular() {
  const horas = document.getElementById("horas").value;
  const tarifa = document.getElementById("tarifa").value;
  const moneda = document.getElementById("moneda").value;

  if (!horas || !tarifa) {
    document.getElementById("resultado").innerText = "Completa todos los campos";
    return;
  }

  const total = horas * tarifa;

  const texto = Deberías cobrar ${total} ${moneda};
  document.getElementById("resultado").innerText = texto;

  // GUARDAR CÁLCULO
  localStorage.setItem("ultimoCalculo", texto);
}

// CARGAR CÁLCULO GUARDADO
window.onload = function () {
  const guardado = localStorage.getItem("ultimoCalculo");
  if (guardado) {
    document.getElementById("resultado").innerText = guardado;
  }
};