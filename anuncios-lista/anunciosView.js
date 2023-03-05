// el anuncios View se encarga de pintar los anuncios en el html

//recibe el anuncio
export function buildAnuncioView(anuncio) {
    //añadimos y creamos nodo article
    const newAnuncioElement = document.createElement('article');
    // generar el HTML que representará un anuncio
    //rellena el anuncio con dos article que incluyen dos <p>
    newAnuncioElement.innerHTML = ` 
        <p>${anuncio.usuario}</p>
        <p>${anuncio.descripcion} - ${anuncio.tipo}</p>
    `;

    //devuelve un nuevo anuncio
    return newAnuncioElement; 
}