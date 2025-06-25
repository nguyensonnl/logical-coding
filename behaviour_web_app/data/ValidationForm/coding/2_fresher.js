/*
tách hàm
*/
const nameSelector = document.querySelector(".name");
const emailSelector = document.querySelector(".email");
const passwordSelector = document.querySelector(".password");
const confirmPasswordSelector = document.querySelector(".confirm-password");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
const btnRegister = document.querySelector(".btn-register");

function showError(input, message) {
  let messageInput = input.closest(".form-group").querySelector(".error-message");
  messageInput.textContent = message;
}

function showSuccess(input) {
  let messageInput = input.closest(".form-group").querySelector(".error-message");
  messageInput.textContent = "";
}

function validateName() {
  let isValidate = false;
  let valueName = nameSelector.value.trim();
  if (valueName === "") {
    showError(nameSelector, "Tên không được để trống");
  } else {
    isValidate = true;
    showSuccess(nameSelector);
  }
  return isValidate;
}

function validateEmail() {
  let isValidate = false;
  let valueEmail = emailSelector.value.trim();
  if (valueEmail === "") {
    showError(emailSelector, "Email không được để trống");
  } else if (!emailRegex.test(valueEmail)) {
    showError(emailSelector, "Email không đúng định dạng");
  } else {
    isValidate = true;
    showSuccess(emailSelector);
  }
  return isValidate;
}

function validatePassword() {
  let isValidate = false;
  let valuePassword = passwordSelector.value.trim();
  if (valuePassword === "") {
    showError(passwordSelector, "Password không được để trống");
  } else if (passwordSelector.length < 8) {
    showError(passwordSelector, "Mật khẩu phải có ít nhất 8 ký tự");
  } else if (!passwordRegex.test(valuePassword)) {
    showError(passwordSelector, "Mật khẩu phải có ít nhất 1 ký tự hoa, thường, đặc biệt, số");
  } else {
    isValidate = true;
    showSuccess(passwordSelector);
  }
  return isValidate;
}

function validateConfirmPassword() {
  let isValidate = false;
  let valueConfirmPassword = confirmPasswordSelector.value.trim();
  let passwordValue = passwordSelector.value.trim();
  if (valueConfirmPassword === "") {
    showError(confirmPasswordSelector, "Confirm password không được để trống");
  } else if (valueConfirmPassword.length < 8) {
    showError(confirmPasswordSelector, "Confirm password phải có ít nhất 8 ký tự");
  } else if (!passwordRegex.test(valueConfirmPassword)) {
    showError(confirmPasswordSelector, "Confirm password phải có ít nhất 1 ký tự hoa, thường, đặc biệt, số");
  } else if (valueConfirmPassword !== passwordValue) {
    showError(confirmPasswordSelector, "Xác nhận mật khẩu không trùng mật khẩu");
  } else {
    isValidate = true;
    showSuccess(confirmPasswordSelector);
  }
  return isValidate;
}

function handleSubmitForm(e) {
  e.preventDefault();

  let isNameValid = validateName();
  let isEmailValid = validateEmail();
  let isPassword = validatePassword();
  let isConfirmPassword = validateConfirmPassword();

  if (isNameValid && isEmailValid && isPassword && isConfirmPassword) {
    alert("SUCESSS");
    return;
  }
}

btnRegister.addEventListener("click", handleSubmitForm);
