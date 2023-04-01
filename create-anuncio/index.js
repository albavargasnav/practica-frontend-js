import { createAnuncioController } from "./createAnuncioController.js";

//si un usuario no ha iniciado sesion se le manda a la home
const token = localStorage.getItem('token')

if (!token) {
    window.location = '/'
} else {
    const createAnuncioFormElement = document.querySelector('#createAnuncioForm');
    createAnuncioController(createAnuncioFormElement)
}