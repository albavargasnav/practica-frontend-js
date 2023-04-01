import { getAnuncioById } from "./anuncio-detail.js"
import { buildAnuncioDetail } from "./anuncioDetailView.js"

export const anuncioDetailController = async (anuncioDetailElement, anuncioId) => {

  try {
    const anuncio = await getAnuncioById(anuncioId)
    anuncioDetailElement.innerHTML = buildAnuncioDetail(anuncio)
  } catch (error) {
    alert(error)
  }
}