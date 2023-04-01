import { createAnuncio } from "./createAnuncio.js";

export const createAnuncioController = async (createAnuncioFormElement) => {
    createAnuncioFormElement.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(createAnuncioFormElement);
        const anuncioContent = formData.get('anuncioContent');

        try {
            //cuando creamos el anuncio se redirecciona al listado de anuncios
            await createAnuncio(anuncioContent)
            window.location = '/'
        } catch (error) {
            alert(error)
        }
    })
}