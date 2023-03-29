import { isEmailValid } from '../utils/isEmailValid.js';
import { loginUser } from './login.js';

export function loginController(loginElement){

  loginElement.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailElement = loginElement.querySelector('#username');

    if (!isEmailValid(emailElement.value)) {
      alert('El email no es válido')
    } else {
       //aqui se verifican que los datos estan en sparrest 
      logUser(loginElement)
    }
  })

  async function logUser(loginElement) {
    const formData = new FormData(loginElement);
    const username = formData.get('username')
    const password = formData.get('password')

    try {
      const jwt = await loginUser(username, password)
      localStorage.setItem('token', jwt)
      window.location = '/';
    } catch (error) {
      alert(error.message)
    }
  }
}