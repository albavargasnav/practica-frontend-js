// el anuncios View se encarga de pintar los anuncios en el html

//recibe el anuncio
export function buildAnuncioView(anuncio) {
    //añadimos y creamos nodo article
    const newAnuncioElement = document.createElement('article');
    //es la fecha 
    const anuncioDate = new Date(anuncio.date)

    // generar el HTML que representará un anuncio
    //rellena el anuncio con dos article que incluyen dos <p>
    newAnuncioElement.innerHTML = ` 
        <p>${anuncio.handle}</p> 
        // Aqui se ve el anuncio del avatar
        <img src="${anuncio.avatar}"/> 
        <p>${anuncio.content} - ${anuncioDate.toISOString()}</p>
        <span></span><span></span><span></span>
    `;

    //devuelve un nuevo anuncio
    return newAnuncioElement; 
}