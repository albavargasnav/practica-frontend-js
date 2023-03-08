//importamos la funcion anuncioListaController 
import { anuncioListaController } from "./anuncios-lista/anunciosListaController.js"

// accedemos al dom para obtener el nodo padre (anuncioListaElement)
const anuncioListaElement = document.querySelector('.lista-anuncio')

anuncioListaController(anuncioListaElement)