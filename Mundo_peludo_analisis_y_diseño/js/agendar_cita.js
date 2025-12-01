        const mainSaveBtn = document.getElementById('main-save-btn');
        const mainCancelBtn = document.getElementById('main-cancel-btn');

        // Modales
        const modalSuccess = document.getElementById('modal-success');
        const modalCancelConfirm = document.getElementById('modal-cancel-confirm');
        const modalCancelSuccess = document.getElementById('modal-cancel-success'); 

        // Botones internos
        const btnSuccessAccept = document.getElementById('btn-success-accept');
        const btnConfirmCancel = document.getElementById('btn-confirm-cancel');
        const btnConfirmAccept = document.getElementById('btn-confirm-accept');
        const btnCancelSuccessAccept = document.getElementById('btn-cancel-success-accept'); 

        // FLUJO GUARDAR 
        mainSaveBtn.addEventListener('click', () => {
            modalSuccess.classList.add('visible');
        });
        btnSuccessAccept.addEventListener('click', () => {
            modalSuccess.classList.remove('visible');
        });

        //  FLUJO CANCELAR 
        
        // advertencia "¿Seguro?"
        mainCancelBtn.addEventListener('click', () => {
            modalCancelConfirm.classList.add('visible');
        });

        // si da clic en "Cancelar" 
        btnConfirmCancel.addEventListener('click', () => {
            modalCancelConfirm.classList.remove('visible');
        });

        // si da clic en "Aceptar" 
        btnConfirmAccept.addEventListener('click', () => {
            modalCancelConfirm.classList.remove('visible');
            modalCancelSuccess.classList.add('visible');   
        });

        // Cita cancelada correctamente
        btnCancelSuccessAccept.addEventListener('click', () => {
            modalCancelSuccess.classList.remove('visible');
            //limpiar el formulario
            console.log("Proceso de cancelación finalizado.");
        });