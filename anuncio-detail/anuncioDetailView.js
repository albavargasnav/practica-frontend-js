export const buildAnuncioDetail = (anuncio) => {
    const anuncioDate = new Date(anuncio.updatedAt)
    return `
    <h3>${anuncio.nombre}</h3>
    <p></p>
    <img src="${anuncio.imagen}" style="max-width: 120px;"/>
    <p><b>Descripción:</b> ${anuncio.descripcion}</p>
    <p><b>Precio: </b>${anuncio.precio}€</p>
    <p><b>Tipo: </b>${anuncio.tipo}</p>
    <span>${anuncioDate.toISOString()}</span>
    <button class="borrar-anuncio" id="deleteAnuncio">Borrar anuncio</button>
  `
}