import { createAnuncio } from "./createAnuncio.js";

export const createAnuncioController = async (createAnuncioFormElement) => {
    createAnuncioFormElement.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(createAnuncioFormElement);
        const nombreContent = formData.get('nombreContent');
        const descripcionContent = formData.get('descripcionContent');
        const precioContent = formData.get('precioContent');
        const tipoContent = formData.get('tipoContent');
        const imagenContent = formData.get('imagenContent');

        try {
            await createAnuncio(nombreContent, descripcionContent, precioContent, tipoContent, imagenContent)
            window.location = '/'
        } catch (error) {
            alert(error)
        }
    })
}