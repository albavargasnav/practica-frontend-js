export const createAnuncio = async (anuncioContent) => {

    const newAnuncio = {
        content: anuncioContent
    }

    const token = localStorage.getItem('token')

    // como utilizo fetch para crear un anuncio
    const Response = await fetch('http://localhost:8000/api/anuncios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(newAnuncio)
    })

    
    if (!Response.ok) {
        throw new Error('Error al crear el anuncio')
    }
}