import { deleteAnuncio, getAnuncioById } from "./anuncio-detail.js"
import { buildAnuncioDetail } from "./anuncioDetailView.js"
import { decodeToken } from '../utils/decodeToken.js'

export const anuncioDetailController = async (anuncioDetailElement, anuncioId) => {

  try {
    const anuncio = await getAnuncioById(anuncioId)
    anuncioDetailElement.innerHTML = buildAnuncioDetail(anuncio)
    handleDeleteAnuncioButton(anuncioDetailElement, anuncio)
  } catch (error) {
    alert(error)
  }

  function handleDeleteAnuncioButton(AnuncioDetailElement, anuncio) {
    const token = localStorage.getItem('token');
    const deleteButtonElement = anuncioDetailElement.querySelector('#deleteAnuncio');

    if (!token) {
      deleteButtonElement.remove()
    } else {
      const userInfo = decodeToken(token);
      if (anuncio.userId === userInfo.userId) {
        deleteButtonElement.addEventListener('click', async () => {
          const answer = confirm('¿Estas seguro de borrar el anuncio?')
          if (answer) {
            await deleteAnuncio(anuncio.id)
            window.location = '/'
          }
        })
      } else {
        deleteButtonElement.remove()
      }
    }
  }
}