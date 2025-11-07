function mostrar(id) {
const secciones = document.querySelectorAll('.info');
secciones.forEach(sec => sec.style.display = 'none');
document.getElementById(id).style.display = 'block';
}