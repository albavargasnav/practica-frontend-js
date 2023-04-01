export const getAnuncioById = async (anuncioId) => {
    const response = await fetch(`http://localhost:8000/api/anuncios/${anuncioId}`)
  
    if (!response.ok) {
      throw new Error('El anuncio solicitado no existe')
    }
  
    const tweet = await response.json();
  
    return tweet;
  }