//va al localstorage a buscar el valor del token para que cuando entre en login se muestre el crear anuncio 
export function userActionsController(userActionsElement) {
    const token = localStorage.getItem('token')

    if (token) {
        // borra el link de login y sign up
        const loginLinkElement = userActionsElement.querySelector('#loginLink')
        const signupLinkElement = userActionsElement.querySelector('#signupLink')
        loginLinkElement.remove()
        signupLinkElement.remove()
    } else {
        // si no tenemos token borra el link de crear anuncio
        const createAnuncioLinkElement = userActionsElement.querysSelector('#createAnuncio')
        createAnuncioLinkElement.remove()
    }
}