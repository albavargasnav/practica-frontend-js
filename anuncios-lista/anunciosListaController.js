import { pubSub } from "../pubSub.js";
import { getAnuncios } from "./anuncios.js";
import { buildAnuncioView, buildSpinnerView, buildErrorLoadingAnuncios, buildEmptyAnuncioLista } from "./anunciosView.js";


export async function anuncioListaController(anuncioListaElement) {
    anuncioListaElement.innerHTML = buildSpinnerView();
    let anuncios = [];

    try { 
        anuncios = await getAnuncios()
        console.log(anuncios);
        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Los anuncios se cargaron correctamente')

        if (anuncios.length > 0) {
            drawAnuncios(anuncios, anuncioListaElement);
        } else {
            showEmptyMessage(anuncioListaElement);
        }

    } catch (error){
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
    for (const anuncio of anuncios) {
      const newAnuncioElement = buildAnuncioView(anuncio);
      anuncioListaElement.appendChild(newAnuncioElement); 
    }
}

function showEmptyMessage(anuncioListaElement) {
    anuncioListaElement.innerHTML = buildEmptyAnuncioLista();
}

