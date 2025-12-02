document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener los elementos del DOM

    // Botones de la tabla de la Agenda Principal (para la cancelación)
    const cancelButtons = document.querySelectorAll('.cancel-appointment-btn');
    
    // Modales
    const modalConfirm = document.getElementById('modal-cancel-confirm');
    const modalSuccess = document.getElementById('modal-cancel-success');
    const modalCancelSuccess = document.getElementById('modal-cancel-success'); // ID de cancelación exitosa

    // Botones internos de los modales
    const btnConfirmCancel = document.getElementById('btn-confirm-cancel');
    const btnConfirmAccept = document.getElementById('btn-confirm-accept');
    const btnCancelSuccessAccept = document.getElementById('btn-cancel-success-accept'); 

    // Variable para almacenar temporalmente el elemento de la cita que se va a eliminar
    let appointmentToDelete = null; 

    // --- Funciones Auxiliares ---
    
    const showModal = (modalElement) => {
        modalElement.classList.add('visible');
    };

    const hideModal = (modalElement) => {
        modalElement.classList.remove('visible');
    };
    
    // --- LÓGICA DE CANCELACIÓN DE CITA (Usando el icono de la Papelera en la tabla) ---

    // 2. Manejar el clic en el icono de la caneca de basura (Inicio Recepcionista)
    cancelButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Guardar la cita (el div 'appointment') que contiene el botón.
            appointmentToDelete = e.target.closest('.appointment'); 

            // Mostrar el modal de confirmación (Imagen 2)
            showModal(modalConfirm);
        });
    });

    // 3. Si da clic en "Cancelar" en la advertencia (modalConfirm)
    btnConfirmCancel.addEventListener('click', () => {
        // Ocultar el modal y limpiar la referencia temporal
        hideModal(modalConfirm);
        appointmentToDelete = null;
    });

    // 4. Si da clic en "Aceptar" en la advertencia (modalConfirm)
    btnConfirmAccept.addEventListener('click', () => {
        // 4a. Ocultar el modal de confirmación
        hideModal(modalConfirm);
        
        // 4b. *Lógica de eliminación de la cita de la tabla*
        if (appointmentToDelete) {
            // Eliminar visualmente el elemento del DOM
            appointmentToDelete.remove(); 
            appointmentToDelete = null; // Limpiar la referencia
        }

        // 4c. Mostrar el modal de cancelación exitosa (Imagen 1)
        showModal(modalCancelSuccess);
    });

    // 5. Cita cancelada correctamente (modalCancelSuccess)
    btnCancelSuccessAccept.addEventListener('click', () => {
        // Ocultar el modal de éxito y el proceso ha finalizado
        hideModal(modalCancelSuccess);
        console.log("Proceso de cancelación finalizado y cita eliminada visualmente.");
    });
    
    // --- LÓGICA DE LOS BOTONES DEL FORMULARIO DE AGENDAR CITA (Tu código original) ---
    
    const mainSaveBtn = document.getElementById('main-save-btn');
    const mainCancelBtn = document.getElementById('main-cancel-btn');
    const modalSaveSuccess = document.getElementById('modal-success');
    const btnSaveSuccessAccept = document.getElementById('btn-success-accept');

    // FLUJO GUARDAR 
    if (mainSaveBtn && modalSaveSuccess) {
        mainSaveBtn.addEventListener('click', () => {
            showModal(modalSaveSuccess);
        });
        btnSaveSuccessAccept.addEventListener('click', () => {
            hideModal(modalSaveSuccess);
            // Aquí podrías agregar la lógica para limpiar el formulario si es necesario
        });
    }

    // FLUJO CANCELAR (si presiona el botón principal en el formulario)
    if (mainCancelBtn && modalConfirm) {
        mainCancelBtn.addEventListener('click', () => {
            showModal(modalConfirm);
        });
        // La lógica de Aceptar/Cancelar en este modal ya está cubierta por los puntos 3 y 4 de arriba.
    }
});