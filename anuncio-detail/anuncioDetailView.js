export const buildAnuncioDetail = (anuncio) => {
    const anuncioDate = new Date(anuncio.updatedAt)
    return `
    <p>${anuncio.content} - ${anuncioDate.toISOString()}</p>
  `
}