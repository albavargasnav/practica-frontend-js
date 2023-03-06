//importamos la funcion anuncioListaController 
import { anuncioListaController } from "./anuncios-lista/anunciosListaController.js"

// accedemos al dom para obtener el nodo padre (anuncioListaElement)
const anuncioListaElement = document.querySelector('.lista-anuncio')
const loadAnunciosButtonElement = document.querySelector('#loadAnunciosButton')

//cuando hacemos click que se ejecute esa funcion
loadAnunciosButtonElement.addEventListener('click', () => {
    anuncioListaController(anuncioListaElement);
})

//cuando hacemos click que se ejecute esa funcion
//loadAnunciosButtonElement.addEventListener('mouseover', () => {
//    console.log('button hovered');
//})

// aqui recibe un nodo del dom (anuncioListaElement)
//anuncioListaController(anuncioListaElement)