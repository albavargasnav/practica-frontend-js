// importar los datos array de anuncios.js
import { pubSub } from "../pubSub.js";
import { getAnuncios } from "./anuncios.js";
import { buildAnuncioView, buildSpinnerView, buildErrorLoadingAnuncios, buildEmptyAnuncioLista } from "./anunciosView.js";


export async function anuncioListaController(anuncioListaElement) {
    //cuando el controlador se ejecute lo primero que hace es mostrar la ruleta de carga
    anuncioListaElement.innerHTML = buildSpinnerView();
    let anuncios = [];

    try { 
        // mostrar ruleta de carga mientras espera a que se cargen los anuncios
        anuncios = await getAnuncios()
        //('Los anuncios se cargaron correctamente')
        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Los anuncios se cargaron correctamente')

        //si tengo anuncios se pintan
        if (anuncios.lenght > 0) {
            drawAnuncios(anuncios, anuncioListaElement);
        //si no se pintan sale el error
        } else {
            showEmptyMessage(anuncioListaElement);
        }

    } catch (error){
        //gestion del error
        //('No hemos podido cargar los anuncios');
        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'No hemos podido cargar los anuncios')
        
    } finally {
        hideSpinner(anuncioListaElement)
    }
}

function hideSpinner(anuncioListaElement) {
    const spinnerElement = anuncioListaElement.querySelector('.spinner');
    spinnerElement.classList.add('hide');
}

function drawAnuncios(anuncios, anuncioListaElement) {
    // vamos a recorrer el array de anuncios situado en anuncios.js
    for (const anuncio of anuncios) {
      //por cada anuncio de mi array de anuncios
      const newAnuncioElement = buildAnuncioView(anuncio); //construimos los anuncio construye la vista
      //Esa vista de anuncios la añade al DOM
      anuncioListaElement.appendChild(newAnuncioElement); //se pintan todos los anuncios a la vez
    }
}


function showEmptyMessage(anuncioListaElement) {
    anuncioListaElement.innerHTML = buildEmptyAnuncioLista();
}

