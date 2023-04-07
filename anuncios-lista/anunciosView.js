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
        <div class="user-info">
        // Aqui se ve el anuncio del avatar
        <img src="${anuncio.avatar}"/> 
        </div>
      <p>${anuncio.nombre}</p>
      <p>${anuncio.descripcion}</p>
      <p>${anuncio.precio}</p>
      <p>${anuncio.tipo}</p>
      <p>${anuncio.imagen}</p>
    </a>
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