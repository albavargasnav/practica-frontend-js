//importamos la funcion anuncioListaController 
import { notificationController } from "./notifications/notificationController.js"
import { anuncioListaController } from "./anuncios-lista/anunciosListaController.js"
import { userActionsController } from "./user-actions/userActionsController.js"


// accedemos al dom para obtener el nodo padre (anuncioListaElement)
const anuncioListaElement = document.querySelector('.lista-anuncio');
const notificationsElement = document.querySelector('.notifications');
const userActionsElement = document.querySelector('.user-actions');


notificationController(notificationsElement)
anuncioListaController(anuncioListaElement);
userActionsController(userActionsElement)




