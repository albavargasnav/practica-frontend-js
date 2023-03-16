export function signupController(signupElement){

    signupElement.addEventListener('submit', (event) => {
        //previene que en la url se muestren los datos introducidos en el formulario
        event.preventDefault();

        if (isFormValid()) {
            // crear usuario
        }
        
    })
    
    function isPasswordValid(signupElement){ 
        //verifica si se incluye las expresiones regulares en el email
        const mailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        const emailElement = signupElement.querySelector('#username');

        // Si mailregexp cumple la expresion regular saca un alert
        if (!mailRegExp.test(emailElement.value)) {
            alert('El email no esta bien escrito');
            return  false
        }

        return true;

    }
        

    //se comprueba que las contraseñas sean iguales
    function isEmailValid(signupElement) {
        const passwordElement = signupElement.querySelector('#password')
        const passwordConfirmElement = signupElement.querySelector('#passwordConfirm')  

        if (passwordElement.value !== passwordConfirmElement.value) {
            alert('Las contraseñas no son iguales');
            return false
        }

        return true;
    }    
    
    function isFormValid(signupElement) {
       return isEmailValid(signupElement) && isPasswordValid(signupElement)
    }
}