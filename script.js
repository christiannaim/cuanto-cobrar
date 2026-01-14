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

  if (!texto || texto.includes("Completa")) {
    alert("Primero calcula un monto");
    return;
  }

  const mensaje =
    texto +
    "\n\nCalculado con esta herramienta:\n" +
    "https://christianmdim.github.io/cuanto-cobrar/";

  const link = "https://api.whatsapp.com/send?text=" + encodeURIComponent(mensaje);

  // abrir en la misma pestaña (NO lo bloquea el navegador)
  window.location.href = link;
}