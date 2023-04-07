import { anuncioDetailController } from "./anuncioDetailController.js";

const params = new URLSearchParams(window.location.search)
const anuncioId = params.get('anuncioId');

if (!anuncioId) {
  window.location = '/'
} else {
  const anuncioDetailElement = document.querySelector('.anuncio-detail');

  anuncioDetailController(anuncioDetailElement, anuncioId)
}
