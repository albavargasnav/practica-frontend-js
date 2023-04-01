export const buildAnuncioDetail = (anuncio) => {
    const anuncioDate = new Date(anuncio.date)
    // revisar si hay que quitar el user info
    return `
      <div class="user-info">
        <span>${anuncio.handle}</span>
        <img style="width: 100px" src="${anuncio.avatar}" />
      </div>
      <p>${anuncio.content} - ${anuncioDate.toISOString()}</p>
    `
  }