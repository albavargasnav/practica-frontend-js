export function buildAnuncioView(anuncio) {

    const newAnuncioElement = document.createElement('article');
    newAnuncioElement.classList.add('anuncio')

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