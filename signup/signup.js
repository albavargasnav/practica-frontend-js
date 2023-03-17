export async function createUser(email, password) {
    // construir un objeto con email y password siguiendo la interfaz definida en el endpoint /auth/register
    const user = {
      username: email,
      password: password
    }
  
    // consumir el api de sparrest, utilizando un POST y enviando los datos que ha introducido el usuario
    const response = await fetch('http://localhost:8000/auth/register', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
  
    const data = await response.json()
  
    return data;
  
  
    // gestionar la respuesta
  
  
  
  }