const nombreInput = document.getElementById("cardholder-name");
const displayNombre = document.getElementById("displayNombre") 

// const actualizarNombre = () => {
//     const nombre = nombreInput.value;
//     displayNombre.innerText = nombre
    
// }
nombreInput.addEventListener('input', () => {
  const nombre = nombreInput.value;
  displayNombre.innerText = nombre
  
});

const numeroInput = document.getElementById("card-number");
const displayNumero = document.getElementById("displayNumero")

const actualizarNumero = () => {
    const numero = numeroInput.value;
    displayNumero.innerText = numero
    
}
numeroInput.addEventListener('input', actualizarNumero);

const mesInput = document.getElementById("expiration-month");
const displayFecha = document.getElementById("displayFecha") 
const fechaInput = document.getElementById("expiration-year");

const actualizarFecha = () => {
    const mes = mesInput.value;
    const fecha = fechaInput.value
    displayFecha.innerText = mes + "/" + fecha
}

mesInput.addEventListener('input', actualizarFecha);
fechaInput.addEventListener('input', actualizarFecha);

// const cvcInput = document.getElementById("cvc");
// const displayCvc = document.getElementById("displayCvc") 

const actualizarCvc = () => {
    const cvc = cvcInput.value;
    displayCvc.innerText = cvc
    
}
cvcInput.addEventListener('input', actualizarCvc);

const errorMessageMM = document.getElementById('error-message-mm');
  const inputFieldMM = document.getElementById('expiration-month');

  function showErrorMM(message) {
    errorMessageMM.innerHTML = message;
  }

  function validateInputMM() {
    let input = inputFieldMM.value;

    if (input.length !== 2 || isNaN(input) || input < 1 || input > 12) {
      showErrorMM('Error: Ingresa un mes válido (01-12).');
    } else {
      errorMessageMM.innerHTML = "";
    }
  }

  const errorMessageCVC = document.getElementById('error-message-cvc');
  const inputFieldCVC = document.getElementById('cvc');

  function showErrorCVC(message) {
    errorMessageCVC.innerHTML = message;
  }

  function validateInputCVC() {
    let input = inputFieldCVC.value;

    if (input.length !== 3 || isNaN(input)) {
      showErrorCVC("Can't be blank");
    } else {
      errorMessageCVC.innerHTML = "";
    }
  }

  const displayCvc = document.getElementById("displayCvc");
  const cvcInput = document.getElementById("cvc");

  function actualizarCvc() {
    const cvc = cvcInput.value;
    displayCvc.innerText = cvc;
  }

  inputFieldMM.addEventListener('input', validateInputMM);
  inputFieldCVC.addEventListener('input', validateInputCVC);
  cvcInput.addEventListener('input', actualizarCvc);

  const errorMessageNum = document.getElementById('error-message-num');
  errorMessageNum.innerHTML = 'Wrong format, numbers only';