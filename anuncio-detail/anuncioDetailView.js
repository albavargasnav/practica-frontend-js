export const buildAnuncioDetail = (anuncio) => {
    const anuncioDate = new Date(anuncio.updatedAt)
    return `
    <p>${anuncio.nombre}</p>
    <p>${anuncio.descripcion}</p>
    <p>${anuncio.precio}</p>
    <p>${anuncio.tipo}</p>
    <p>${anuncio.imagen}</p>
    <p>${anuncioDate.toISOString()}</p>
    <button id="deleteAnuncio">Borrar anuncio</button>
  `
}