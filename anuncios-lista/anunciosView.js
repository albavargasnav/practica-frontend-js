// el anuncios View se encarga de pintar los anuncios en el html

//recibe el anuncio
export function buildAnuncioView(anuncio) {
    //añadimos y creamos nodo article
    const newAnuncioElement = document.createElement('article');
    //añadimos la clase css anuncio de cada article
    newAnuncioElement.classList.add('anuncio')
    //es la fecha 

    // generar el HTML que representará un anuncio
    //rellena el anuncio con dos article que incluyen dos <p>
    newAnuncioElement.innerHTML = ` 
        <a href="/anuncio-detail.html?anuncioId=${anuncio.id}">
        <h3>${anuncio.nombre}</h3>
        <p></p>
        <img  src="${anuncio.imagen}" style="max-width: 120px;"/>
        <p><b>Descripción:</b> ${anuncio.descripcion}</p>
        <p><b>Precio: </b>${anuncio.precio}€</p>
        <p><b>Tipo: </b>${anuncio.tipo}</p>
        </a>
        <br>
        <hr>
        <br>
        `;
    //devuelve un nuevo anuncio
    return newAnuncioElement; 
}

export function buildSpinnerView() {
    return `<div class="spinner"><div></div><div></div><div></div></div>`
}

export function buildErrorLoadingAnuncios() {
    return `<p class="load-error">Ha habido un problema cargando los anuncios. Inténtalo de nuevo más tarde</p>`
}

export function buildEmptyAnuncioLista() {
    return `<p>No hay resultados disponibles</p>`; 
}