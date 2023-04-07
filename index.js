import { notificationController } from "./notifications/notificationController.js"
import { anuncioListaController } from "./anuncios-lista/anunciosListaController.js"
import { userActionsController } from "./user-actions/userActionsController.js"

const anuncioListaElement = document.querySelector('.lista-anuncio');
const notificationsElement = document.querySelector('.notifications');
const userActionsElement = document.querySelector('.user-actions');


notificationController(notificationsElement)
anuncioListaController(anuncioListaElement);
userActionsController(userActionsElement)




