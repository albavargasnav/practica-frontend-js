// //array de objetos
// export const anuncios = [
//   {
//     nombre: "Bicicleta",
//     descripcion: "Bicicleta de montaña",
//     precio: "20",
//     tipo: "venta",
//     usuario: "@usuario1",
//     imagen:
//       "https://rebusbike.odoo.com/web/image/product.template/1554/image_256/%5BFODI290BR%5D%20Bicicleta%20Foxter%20Negro%20c-%20Rojo%2029%20FODI290BR?unique=88fff58",
//   },
//   {
//     nombre: "Bicicleta2",
//     descripcion: "Bicicleta de montaña",
//     precio: "20",
//     tipo: "venta",
//     usuario: "@usuario2",
//     imagen:
//       "https://rebusbike.odoo.com/web/image/product.template/1554/image_256/%5BFODI290BR%5D%20Bicicleta%20Foxter%20Negro%20c-%20Rojo%2029%20FODI290BR?unique=88fff58",
//   },
//   {
//     nombre: "Bicicleta3",
//     descripcion: "Bicicleta de montaña",
//     precio: "20",
//     tipo: "venta",
//     usuario: "@usuario3",
//     imagen:
//       "https://rebusbike.odoo.com/web/image/product.template/1554/image_256/%5BFODI290BR%5D%20Bicicleta%20Foxter%20Negro%20c-%20Rojo%2029%20FODI290BR?unique=88fff58",
//   },
// ]

// es para coger datos de fuera a traves de un link en vez de tener un listado json aqui
export async function getAnuncios() { //get anuncios devuelve una promesa porque async es quien devuelve la promesa
  //abajo comentado los datos antiguos en json
  //const anunciosUrl = 'https://gist.githubusercontent.com/edu-aguilar/8c9a509ec582d04da0640be2b0ede8d5/raw/f75c68645821f3c33d82d9c2c048215584d1d332/tweets.json'
  const anunciosUrl = 'http://localhost:8000/api/anuncios';


  //hacemos peticiones http a la api, fetch nos devuelve una promesa
  const response = await fetch(anunciosUrl);
  //se obtienen los datos en crudos en json
  const anuncios = await response.json()

  return anuncios
}
