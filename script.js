// Función principal para procesar la acción (encriptar/desencriptar)
function procesar() {
  const texto = document.getElementById('texto').value.toLowerCase();
  const opcion = document.getElementById('opcion').value;
  let resultado = '';

  // Seleccionar función según la opción
  switch (opcion) {
    case 'encriptar':
      resultado = encriptar(texto);
      break;
    case 'desencriptar':
      resultado = desencriptar(texto);
      break;
    default:
      alert('Opción no válida');
      return;
  }

  // Mostrar resultado en la interfaz
  document.getElementById('resultado').value = resultado;
}

// Función para encriptar el texto según reglas especificadas
function encriptar(texto) {
  return texto
    .replace(/e/gi, 'enter')
    .replace(/i/gi, 'imes')
    .replace(/a/gi, 'ai')
    .replace(/o/gi, 'ober')
    .replace(/u/gi, 'ufat');
}

// Función para desencriptar el texto según reglas especificadas
function desencriptar(texto) {
  return texto
    .replace(/enter/gi, 'e')
    .replace(/imes/gi, 'i')
    .replace(/ai/gi, 'a')
    .replace(/ober/gi, 'o')
    .replace(/ufat/gi, 'u');
}

// Función para copiar el resultado al portapapeles
function copiarResultado() {
  const resultado = document.getElementById('resultado');
  resultado.select();
  document.execCommand('copy'); // Copia el contenido seleccionado al portapapeles
  alert('Texto copiado al portapapeles');
}
