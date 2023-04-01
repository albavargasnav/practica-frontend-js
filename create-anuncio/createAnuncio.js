export const createAnuncio = async (anuncioContent) => {

    const newAnuncio = {
        content: anuncioContent
    }

    const token = localStorage.getItem('token')

    // como utilizo fetch para crear un anuncio
    await fetch('http://localhost:8000/api/anuncios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(newAnuncio)
    })

    //mirar si esta bien poner response con R mayuscula o minuscula
    if (!Response.ok) {
        throw new Error('Error al crear el anuncio')
    }
}