function calcular() {
  const horas = document.getElementById("horas").value;
  const precio = document.getElementById("precio").value;

  if (horas === "" || precio === "") {
    document.getElementById("resultado").innerText =
      "❌ Completa todos los campos";
    return;
  }

  const total = horas * precio;

  document.getElementById("resultado").innerText =
    "✅ Deberías cobrar: $" + total;
}