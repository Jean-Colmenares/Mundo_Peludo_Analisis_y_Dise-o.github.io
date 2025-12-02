document.addEventListener('DOMContentLoaded', () => {
    // ESTE CÓDIGO MANEJA LA CANCELACIÓN EN LA VISTA DE LA AGENDA/RECEPCIONISTA
    
    // Elementos de la tabla
    const cancelButtons = document.querySelectorAll('.cancel-appointment-btn');
    
    // Modales (Deben existir en inicio_recepcionista.html)
    const modalConfirm = document.getElementById('modal-cancel-confirm');
    const modalSuccess = document.getElementById('modal-cancel-success');
    
    // Botones internos de los modales (Deben existir en inicio_recepcionista.html)
    const btnConfirmCancel = document.getElementById('btn-confirm-cancel');
    const btnConfirmAccept = document.getElementById('btn-confirm-accept');
    const btnCancelSuccessAccept = document.getElementById('btn-cancel-success-accept'); 

    let appointmentToDelete = null; 

    const showModal = (modalElement) => { modalElement.classList.add('visible'); };
    const hideModal = (modalElement) => { modalElement.classList.remove('visible'); };
    
    // --- LÓGICA DE CANCELACIÓN ---

    // 1. Manejar el clic en el icono de la Papelera
    cancelButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Encuentra el contenedor principal de la cita para eliminarlo después
            appointmentToDelete = e.target.closest('.appointment'); 
            showModal(modalConfirm);
        });
    });

    // 2. Si da clic en "Cancelar" (sale del proceso)
    if (btnConfirmCancel) {
        btnConfirmCancel.addEventListener('click', () => {
            hideModal(modalConfirm);
            appointmentToDelete = null;
        });
    }

    // 3. Si da clic en "Aceptar" (Cancela y elimina la cita)
    if (btnConfirmAccept) {
        btnConfirmAccept.addEventListener('click', () => {
            hideModal(modalConfirm);
            
            if (appointmentToDelete) {
                appointmentToDelete.remove(); // ¡Eliminación visual!
                appointmentToDelete = null; 
            }

            showModal(modalSuccess);
        });
    }

    // 4. Cita cancelada correctamente
    if (btnCancelSuccessAccept) {
        btnCancelSuccessAccept.addEventListener('click', () => {
            hideModal(modalSuccess);
            console.log("Proceso de cancelación finalizado.");
        });
    }
});