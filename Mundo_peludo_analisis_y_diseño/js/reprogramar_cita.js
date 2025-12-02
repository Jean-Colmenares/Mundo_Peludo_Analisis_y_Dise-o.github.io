document.addEventListener('DOMContentLoaded', () => {
    
    // Elementos principales de la página
    const btnCancelar = document.getElementById('btn-cancelar-reprogramacion');
    const btnGuardar = document.getElementById('btn-guardar-reprogramacion');

    // Modales y sus botones
    const modalGuardar = document.getElementById('modal-guardar-confirmacion');
    const btnAceptarGuardado = document.getElementById('btn-aceptar-guardado');
    
    const modalCancelar = document.getElementById('modal-cancelar-advertencia');
    const btnAdvertenciaCancelar = document.getElementById('btn-advertencia-cancelar');
    const btnAdvertenciaAceptar = document.getElementById('btn-advertencia-aceptar');
    
    const PAGINA_AGENDA = 'inicio_recepcionsita.html';


    // Función para mostrar/ocultar modales
    function toggleModal(modal, isVisible) {
        if (isVisible) {
            modal.classList.add('visible');
        } else {
            modal.classList.remove('visible');
        }
    }

    // --- LÓGICA DEL BOTÓN GUARDAR ---
    if (btnGuardar) {
        btnGuardar.addEventListener('click', (e) => {
            e.preventDefault();
            // Simulación de guardar datos...
            console.log("Intentando guardar cambios...");

            // 1. Mostrar modal de éxito (Imagen 3)
            toggleModal(modalGuardar, true);
        });
    }

    // Acción después de aceptar el GUARDADO
    if (btnAceptarGuardado) {
        btnAceptarGuardado.addEventListener('click', () => {
            console.log("Guardado confirmado. Redirigiendo a la agenda.");
            // 2. Redirigir a la página de la agenda
            window.location.href = PAGINA_AGENDA;
        });
    }

    // --- LÓGICA DEL BOTÓN CANCELAR ---
    if (btnCancelar) {
        btnCancelar.addEventListener('click', (e) => {
            e.preventDefault();
            // 1. Mostrar modal de advertencia de cancelación (Imagen 4)
            toggleModal(modalCancelar, true);
        });
    }

    // Acción: El usuario pulsa 'Cancelar' en la advertencia
    if (btnAdvertenciaCancelar) {
        btnAdvertenciaCancelar.addEventListener('click', () => {
            // 2. Solo cierra el modal de advertencia
            toggleModal(modalCancelar, false);
        });
    }

    // Acción: El usuario pulsa 'Aceptar' en la advertencia
    if (btnAdvertenciaAceptar) {
        btnAdvertenciaAceptar.addEventListener('click', () => {
            console.log("Cancelación de cambios aceptada. Redirigiendo a la agenda.");
            // 2. Redirigir a la página de la agenda
            window.location.href = PAGINA_AGENDA;
        });
    }

});