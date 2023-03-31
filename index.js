//importamos la funcion anuncioListaController 
import { notificationController } from "./notifications/notificationController.js"
import { anuncioListaController } from "./anuncios-lista/anunciosListaController.js"
import { userActionsController } from "./user-actions/userActionsController.js"

// accedemos al dom para obtener el nodo padre (anuncioListaElement)
const anuncioListaElement = document.querySelector('.lista-anuncio');
const notificationsElement = document.querySelector('.notifications');
const userActionsElement = document.querySelector('.user-actions');

const showMessage = notificationController(notificationsElement);
//ejecuto el anuncioListaElement de anuncios-lista
anuncioListaController(anuncioListaElement);
userActionsController(userActionsElement)

anuncioListaElement.addEventListener('newNotification', (event) => {
    console.log('He recibido el evento,', event.detail.message);
    showMessage(event.detail.message)
})


