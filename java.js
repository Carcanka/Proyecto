const nombreInput = document.getElementById("cardholder-name");
const displayNombre = document.getElementById("displayNombre");

const actualizarNombre = () => {
  const nombre = nombreInput.value;
  displayNombre.innerText = nombre;
};

nombreInput.addEventListener("input", actualizarNombre);

const numeroInput = document.getElementById("card-number");
const displayNumero = document.getElementById("displayNumero");
const numError = document.getElementById ("error-message-num")

const actualizarNumero = () => {
  const numero = numeroInput.value;
  displayNumero.innerText = numero;

  if (numero.length === 0 || numero.length === 19) {
    numError.innerText = "";
    numError.style.display = "none";
  } else {
    numError.innerText = "Solo se permiten 16 caracteres";
    numError.style.display = "block";
  }
};

cardNumberInput.addEventListener("input", updateDisplayNumero);

// NO BORRA EL MENSAJE "Solo se permiten caracteres numéricos"
// if (numero.length === 0 || numero.length === 16) {
//   if (/^\d+$/.test(numero)) {
//     numError.innerText = "";
//     numError.style.display = "none";
//   } else {
//     numError.innerText = "Solo se permiten caracteres numéricos";
//     numError.style.display = "block";
//   }
// } else {
//   numError.innerText = "Solo se permiten 16 caracteres";
//   numError.style.display = "block";
// }
// };

const mesInput = document.getElementById("expiration-month");
const displayFecha = document.getElementById("displayFecha");
const fechaInput = document.getElementById("expiration-year");
const fechaError = document.getElementById ("error-message-mm")

//No Funciona
const actualizarFecha = () => {
  const mes = mesInput.value;
  const fecha = fechaInput.value;
  displayFecha.innerText = mes + "/" + fecha;

if (mes.length === 0 || mes.length === 2) {
  fechaError.innerText = "";
  fechaError.style.display = "none";
  } else {
    fechaError.innerText = "";
    fechaError.innerText = "Can't be blank";
    fechaError.style.display = "block";
  }
};

mesInput.addEventListener("input", actualizarFecha);
fechaInput.addEventListener("input", actualizarFecha);

const cvcInput = document.getElementById("cvc");
const displayCvc = document.getElementById("displayCvc");
const cvcError = document.getElementById ("error-message-cvc");

const actualizarCvc = () => {
  const cvc = cvcInput.value;
  displayCvc.innerText = cvc;

  if (cvc.length === 0 || cvc.length === 3) {
    cvcError.innerText = "";
    cvcError.style.display = "none";
    } else {
      cvcError.innerText = "";
      cvcError.innerText = "Can't be blank";
      cvcError.style.display = "block";
    }
};
cvcInput.addEventListener("input", actualizarCvc);

const errorMessageMM = document.getElementById("error-message-mm");
const inputFieldMM = document.getElementById("expiration-month");

function showErrorMM(message) {
  errorMessageMM.innerHTML = message;
}

const cardNumberInput = document.getElementById("card-number");

const formatCardNumber = (cardNumber) => {
  const formattedCardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, "$1 ");
  return formattedCardNumber;
};

const updateDisplayNumero = () => {
  const cardNumber = cardNumberInput.value;
  const formattedCardNumber = formatCardNumber(cardNumber);
  displayNumero.innerText = formattedCardNumber;
};

cardNumberInput.addEventListener("input", updateDisplayNumero);

const updateInputValue = () => {
  const cardNumber = cardNumberInput.value;
  const formattedCardNumber = formatCardNumber(cardNumber);
  cardNumberInput.value = formattedCardNumber;
};

cardNumberInput.addEventListener("input", () => {
  updateDisplayNumero();
  updateInputValue();
});

// NO FUNCIONA
// const validateInputMM = document.getElementById("expiration-month")

//    function validateInputMM() {
//     let input = inputFieldMM.value;

//       if (input.length !== 2 || isNaN(input) || input < 1 || input > 12) {
//         showErrorMM('Error: Ingresa un mes válido (01-12).');
//      } else {
//         errorMessageMM.innerHTML = "";
//      }
//     }

//NO FUNCIONA
//  const errorMessageCVC = document.getElementById("error-message-cvc");
//  const inputFieldCVC = document.getElementById("cvc");

//  function showErrorCVC(message) {
//    errorMessageCVC.innerHTML = message;
//  }
//  const validateInputCVC = document.getElementById("cvc")

//   function validateInputCVC() {
//     let input = inputFieldCVC.value;

//      if (input.length !== 3 || isNaN(input)) {
//        showErrorCVC("Can't be blank");
//      } else {
//        errorMessageCVC.innerHTML = "";
//     }
//   }
//   function actualizarCvc() {
//     const cvc = cvcInput.value;
//     displayCvc.innerText = cvc;
//   }

inputFieldMM.addEventListener("input", validateInputMM);
inputFieldCVC.addEventListener("input", validateInputCVC);
cvcInput.addEventListener("input", actualizarCvc);
