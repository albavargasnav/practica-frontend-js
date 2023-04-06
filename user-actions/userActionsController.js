//va al localstorage a buscar el valor del token para que cuando entre en login se muestre el crear anuncio 
import { decodeToken } from "../utils/decodeToken.js"
import { buildGreeting } from "./userActionView.js"

export function userActionsController(userActionsElement) {
    const token = localStorage.getItem('token')
    const closeSessionElement = userActionsElement.querySelector('#closeSession')

    if (token) {
        // borra el link de login y sign up
        const loginLinkElement = userActionsElement.querySelector('#loginLink')
        const signupLinkElement = userActionsElement.querySelector('#signupLink')
        loginLinkElement.remove()
        signupLinkElement.remove()

        const payload = decodeToken(token)
        buildGreeting(payload.username)
        userActionsElement.appendChild(buildGreeting(payload.username))
        closeSessionElement.addEventListener('click', () => {
            localStorage.removeItem('token')
            window.location.reload()
          })
    } else {
        // si no tenemos token borra el link de crear anuncio
        const createAnuncioLinkElement = userActionsElement.querySelector('#createAnuncioLink')
        createAnuncioLinkElement.remove()
        closeSessionElement.remove()
    }
}

