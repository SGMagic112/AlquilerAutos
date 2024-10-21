// Obtener elementos
const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const openModal1 = document.getElementById("openModal1");
const closeModal1 = document.getElementById("closeModal1");
const openModal2 = document.getElementById("openModal2");
const closeModal2 = document.getElementById("closeModal2");

// Función para abrir el primer modal
openModal1.onclick = function() {
    modal1.classList.add("show"); // Añadir clase para mostrar
    setTimeout(() => modal1.classList.add("active"), 10); // Añadir clase de animación
}

// Función para cerrar el primer modal
closeModal1.onclick = function() {
    modal1.classList.remove("active"); // Remover clase de animación
    setTimeout(() => modal1.classList.remove("show"), 300); // Ocultar después de la animación
}

// Función para abrir el segundo modal
openModal2.onclick = function() {
    closeModal1.onclick(); // Cerrar el primer modal
    modal2.classList.add("show"); // Añadir clase para mostrar
    setTimeout(() => modal2.classList.add("active"), 10); // Añadir clase de animación

}
// Función para cerrar el segundo modal
closeModal2.onclick = function() {
    modal2.classList.remove("active"); // Remover clase de animación
    setTimeout(() => modal2.classList.remove("show"), 300); // Ocultar después de la animación
}

// Cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {
    if (event.target === modal1) {
        closeModal1.onclick(); // Usar la función de cierre
    }
    if (event.target === modal2) {
        closeModal2.onclick(); // Usar la función de cierre
    }
}

// Agregar eventos para cerrar la modal al hacer clic en la 'x'
const closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(button => {
    button.onclick = () => {
        const modal = button.closest('.modal');
        if (modal) {
            modal.classList.remove('active'); // Remover clase de animación
            setTimeout(() => modal.classList.remove('show'), 300); // Ocultar después de la animación
        }
    };
});
