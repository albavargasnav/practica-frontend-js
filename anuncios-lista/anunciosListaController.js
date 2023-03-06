// importar los datos array de anuncios.js
import { anuncios } from "./anuncios.js";
import { buildAnuncioView } from "./anunciosView.js";


export function anuncioListaController(anuncioListaElement) {
    
        // vamos a recorrer el array de anuncios situado en anuncios.js
        for (const anuncio of anuncios) { //por cada anuncio de mi array de anuncios
            const newAnuncioElement = buildAnuncioView(anuncio) //construimos los anuncio construye la vista
            //Esa vista de anuncios la añade al DOM
            anuncioListaElement.appendChild(newAnuncioElement) 
        } 
}