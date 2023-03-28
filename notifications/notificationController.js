import { pubSub } from "../pubSub.js";
import { buildNotificationView } from "./notificationView.js";


export function notificationController(notificationsElement) {

    function showMessage(message) {
        notificationsElement.innerHTML = buildNotificationView(message)
        setTimeout(() => {
            notificationsElement.innerHTML = ''
        }, 5000);
    }

    pubSub.subscribe(pubSub.TOPICS.SHOW_NOTIFICATION, (message) => {
        showMessage(message)
    })

    //notificationcontroller devuelve la funcion showmessage para que se vea de fuera
    return showMessage;
}