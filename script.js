function calcular() {
  const horas = document.getElementById("horas").value;
  const precio = document.getElementById("precio").value;
  const moneda = document.getElementById("moneda").value;
  const resultado = document.getElementById("resultado");

  if (horas === "" || precio === "") {
    resultado.innerText = "❌ Completa todos los campos";
    return;
  }

  const total = horas * precio;

  resultado.innerText = "✅ Deberías cobrar: " + moneda + " " + total;
}

function compartirWhatsApp() {
  const texto = document.getElementById("resultado").innerText;

  if (texto === "") {
    alert("Primero calcula un monto");
    return;
  }

  const mensaje = encodeURIComponent(
    texto + "\nCalculado en: https://christianmdim.github.io/cuanto-cobrar/"
  );

  const url = "https://wa.me/?text=" + mensaje;
  window.open(url, "_blank");
}