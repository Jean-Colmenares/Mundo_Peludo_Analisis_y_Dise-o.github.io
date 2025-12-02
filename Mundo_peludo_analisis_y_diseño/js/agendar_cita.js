document.addEventListener('DOMContentLoaded', () => {
    // ESTE CÓDIGO MANEJA LA LÓGICA DE GUARDADO Y CANCELACIÓN DEL FORMULARIO DE AGENDAR CITA

    // Modales (Asumimos que estos modales están incluidos en agendar_cita.html)
    const modalConfirm = document.getElementById('modal-cancel-confirm'); // Advertencia
    const modalCancelSuccess = document.getElementById('modal-cancel-success'); // Cancelación
    const modalSaveSuccess = document.getElementById('modal-success'); // Agendado

    // Botones principales del formulario (deben tener estos IDs en el HTML del formulario)
    const mainSaveBtn = document.getElementById('main-save-btn');
    const mainCancelBtn = document.getElementById('main-cancel-btn'); 

    // Botones internos de los modales
    const btnConfirmCancel = document.getElementById('btn-confirm-cancel');
    const btnConfirmAccept = document.getElementById('btn-confirm-accept');
    const btnCancelSuccessAccept = document.getElementById('btn-cancel-success-accept'); 
    const btnSaveSuccessAccept = document.getElementById('btn-success-accept');

    // --- Funciones Auxiliares ---
    const showModal = (modalElement) => {
        modalElement.classList.add('visible');
    };

    const hideModal = (modalElement) => {
        modalElement.classList.remove('visible');
    };

    // --- FLUJO GUARDAR (Botón "Guardar" del formulario) ---
    if (mainSaveBtn) {
        mainSaveBtn.addEventListener('click', () => {
            // Lógica de validación y guardado...
            showModal(modalSaveSuccess); // Muestra éxito al agendar
        });
        if (btnSaveSuccessAccept) {
             btnSaveSuccessAccept.addEventListener('click', () => {
                hideModal(modalSaveSuccess);
            });
        }
    }

    // --- FLUJO CANCELAR (Botón "Cancelar" del formulario) ---
    if (mainCancelBtn) {
        mainCancelBtn.addEventListener('click', () => {
            showModal(modalConfirm); // Muestra la advertencia
        });

        // Si da clic en "Cancelar" en la advertencia (Sale del proceso)
        if (btnConfirmCancel) {
            btnConfirmCancel.addEventListener('click', () => {
                hideModal(modalConfirm);
            });
        }
        
        // Si da clic en "Aceptar" en la advertencia (Cancela el formulario)
        if (btnConfirmAccept) {
            btnConfirmAccept.addEventListener('click', () => {
                hideModal(modalConfirm);
                showModal(modalCancelSuccess); // Muestra la cancelación exitosa
            });
        }
        
        // Cita cancelada correctamente
        if (btnCancelSuccessAccept) {
            btnCancelSuccessAccept.addEventListener('click', () => {
                hideModal(modalCancelSuccess);
                console.log("Formulario cancelado y cerrado.");
                // Aquí podrías redirigir o cerrar el modal del formulario
            });
        }
    }
});