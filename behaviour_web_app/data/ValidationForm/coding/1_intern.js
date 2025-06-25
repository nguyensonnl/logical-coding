/*
if else
viêt tât cả trong 1 hàm
code trùng lặp rất nhiều
*/
const btnRegisterElement = document.querySelector(".btn-register");
const nameElement = document.querySelector(".name");
const emailElement = document.querySelector(".email");
const passwordElement = document.querySelector(".password");
const confirmPasswordElement = document.querySelector(".confirm-password");
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function errorSuccess(element) {
  const errorElement = document.querySelector(".form-group").querySelector(".error-message");
  errorElement.textContent = "";
}
function errorFailed(element, errorMessage) {
  let errorElement = element.closest(".form-group").querySelector(".error-message");
  let nameAttribute = element.getAttribute("name");
  if (errorMessage) {
    errorElement.textContent = errorMessage;
  } else {
    errorElement.textContent = `${nameAttribute} không hợp lệ`;
  }
}

function handleSubmitForm(e) {
  e.preventDefault();
  let nameValue = nameElement.value;
  let emailValue = emailElement.value;
  let passwordValue = passwordElement.value;
  let confirmPasswordValue = confirmPasswordElement.value;
  let isFormValid = false;

  //validate name: isRequired
  if (nameValue === "") {
    errorFailed(nameElement, "Name không được để trống");
  } else {
    errorSuccess(nameElement);
    isFormValid = true;
  }

  //validate email: isRequire, isEmail
  if (emailValue === "") {
    errorFailed(emailElement, "Email không được để trống");
  } else if (!regexEmail.test(emailValue)) {
    errorFailed(emailElement, "Email không đúng định dạng");
  } else {
    errorSuccess(emailElement);
    isFormValid = true;
  }

  //validate password: isRequired, minLength
  if (passwordValue === "") {
    errorFailed(passwordElement, "Passwork không được để trống");
  } else if (passwordValue.length < 3) {
    errorFailed(passwordElement, "Password phải tối thiểu 3 ký tự");
  } else {
    errorSuccess(passwordElement);
    isFormValid = true;
  }

  //validate confirm passowrd: isReuired, minLength, compare password
  //get attribute password
  const passwordElementCompare = confirmPasswordElement.getAttribute("compare");
  const comparePasswordValue = document.querySelector(`.${passwordElementCompare}`);

  if (confirmPasswordValue === "") {
    const errorElement = confirmPasswordElement.closest(".form-group").querySelector(".error-message");
    errorElement.textContent = "Password không được để trống";
  } else if (confirmPasswordValue.length < 3) {
    const errorElement = confirmPasswordElement.closest(".form-group").querySelector(".error-message");
    errorElement.textContent = "Password phải từ 3 ký tự";
  } else if (confirmPasswordValue !== comparePasswordValue.value) {
    const errorElement = confirmPasswordElement.closest(".form-group").querySelector(".error-message");
    errorElement.textContent = "Confirm password không giống password";
  } else {
    const errorElement = confirmPasswordElement.closest(".form-group").querySelector(".error-message");
    errorElement.textContent = "";
    isFormValid = true;
  }

  if (!isFormValid) {
    console.log("Failed");
  } else {
    console.log("Success");
    window.location.href = "https://google.com";
  }
}

btnRegisterElement.addEventListener("click", handleSubmitForm);
