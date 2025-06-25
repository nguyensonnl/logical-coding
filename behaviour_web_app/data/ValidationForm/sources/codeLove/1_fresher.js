/*
vòng lặp kết hợp if else
tách hàm tránh trung lặp code
*/

//1. chọn element
const btnSignupSelector = document.querySelector(".btn-signup");
const inputNameSelector = document.querySelector(".name");
const inputEmailSelector = document.querySelector(".email");
const inputPasswordSelector = document.querySelector(".password");
const inputConfirmPasswordSelector = document.querySelector(".confirm_password");

//dùng vòng lặp for lấy ra mảng tất cả ô input
const inputAllSelector = document.querySelectorAll(".form-group input");
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const errorMessageAll = document.querySelectorAll(".error_message");

//validate cho từng field một (từng ô input một)
//trong từng ô input check sẽ đính kèm các rule (quy tắc validate) của nó

//2. function xử lí sự kiện + chạy ngay lần đầu khi load
function handleSignupClick(e) {
  e.preventDefault();
  let isFormValid = true; //flag
  //1. thực hiện validate
  for (let i = 0; i < inputAllSelector.length; i++) {
    let inputSelector = inputAllSelector[i];
    let valueInput = inputSelector.value;
    let divMessageSelector = inputSelector.closest(".form-group").querySelector(".error_message");
    let name = inputSelector.name;

    //validate not emtpy
    if (name === "name") {
      let isRequireValid = requireValidate(inputSelector, name);
      if (isRequireValid) {
        showSuccess(inputSelector, divMessageSelector);
      }
    } else if (name === "email") {
      let isMinLengthValid;
      let isEmailRegexValid;
      let isRequireValid = requireValidate(inputSelector, name);
      //validate email tối thiểu 3 ký tự
      if (isRequireValid) {
        isMinLengthValid = minLengthValidate(inputSelector, name);
      }
      if (isRequireValid && isMinLengthValid) {
        isEmailRegexValid = emailRegexValidation(inputSelector, name);
      }

      //validate khác
      //check validate success
      if (isEmailRegexValid && isMinLengthValid && isRequireValid) {
        showSuccess(inputSelector, divMessageSelector);
      }
    } else if (name === "password") {
      let isRequireValid = requireValidate(inputSelector, name);
      let isMinLengthValid;
      if (isRequireValid) {
        isMinLengthValid = minLengthValidate(inputSelector, name);
      }
      //Check success
      if (isRequireValid && isMinLengthValid) {
        showSuccess(inputSelector, divMessageSelector);
      }
    } else {
      let isRequireValid = requireValidate(inputSelector, name);
      let isMinLengthValid;
      let isCompareValid;
      if (isRequireValid) {
        isMinLengthValid = minLengthValidate(inputSelector, name);
      }
      if (isRequireValid && isMinLengthValid) {
        isCompareValid = compareFieldsValidate(inputSelector, name);
      }
      //Check success
      if (isRequireValid && isMinLengthValid && isCompareValid) {
        showSuccess(inputSelector, divMessageSelector);
      }
    }
  }

  //kiểm tra không có ô input nào có lôi validate
  //1 lưu user vào localStorage
  //2 redirect đến màn hình login

  for (let i = 0; i < errorMessageAll.length; i++) {
    if (errorMessageAll[i].textContent !== "") {
      isFormValid = false;
      break;
    }
  }

  if (isFormValid) {
    window.location.href = "./login.html";
  }
}

//show success
function showSuccess(inputSelector, divMessageSelector) {
  inputSelector.classList.remove("error");
  divMessageSelector.textContent = "";
}

//show error
function showError(inputSelector, divMessageSelector, name) {
  //thêm viền đỏ cho input
  inputSelector.classList.add("error");
  //hiển thị message lỗi
  let message = name + " không được để trống";
  divMessageSelector.textContent = message;
}

//rule compare data
function compareFieldsValidate(inputSelector, name, message) {
  let isValid = true;
  let valueInput = inputSelector.value;
  let compareSelectorClass = inputSelector.getAttribute("selector_compare");
  let compareSelector = document.querySelector("." + compareSelectorClass);
  let divMessageSelector = inputSelector.closest(".form-group").querySelector(".error_message");
  if (compareSelector !== valueInput) {
    isValid = false;
    inputSelector.classList.add("error");
    let messageError = "Dữ liệu nhập ở" + name + " không trùng với dữ liệu nhập ở" + compareSelectorClass;
    if (message) {
      messageError = message;
    }
    divMessageSelector.textContent = messageError;
  }
  return isValid;
}

//rule require validate
function requireValidate(inputSelector, name, message) {
  let isValid = true;
  let valueInput = inputSelector.value;
  let divMessageSelector = inputSelector.closest(".form-group").querySelector(".error_message");
  if (valueInput === "") {
    isValid = false;
    //thêm viền đỏ cho input
    inputSelector.classList.add("error");
    //hiển thị message lỗi
    let messageError = name + " không được để trống";
    if (message) {
      messageError = message;
    }
    divMessageSelector.textContent = messageError;
  }
  return isValid;
}
//rule validation email
function emailRegexValidation(inputSelector, name, message) {
  let isValid = true;
  let valueInput = inputSelector.value;
  let isValidRegex = regexEmail.test(valueInput);
  let divMessageSelector = inputSelector.closest(".form-group").querySelector(".error_message");

  if (isValidRegex === false) {
    isValid = false;
    inputSelector.classList.add("error");
    let messageError = name + " không phải định dạng email hợp lệ";
    if (message) {
      messageError = message;
    }

    divMessageSelector.textContent = messageError;
  }

  return isValid;
}

//rule validation minlength: tách hàm
function minLengthValidate(inputSelector, name, message) {
  let isValid = true;
  let valueInput = inputSelector.value;
  let divMessageSelector = inputSelector.closest(".form-group").querySelector(".error_message");
  //optional
  let minLength = inputSelector.getAttribute("min_length");
  if (valueInput.length < +minLength) {
    isValid = false;
    inputSelector.classList.add("error");
    let messageError = `${name} tối thiểu ${minLength} ký tự`;
    if (message) {
      messageError = message;
    }
    divMessageSelector.textContent = messageError;
  }

  return isValid;
}

//lession 26

//3. thêm sự kiện cho phần tử
btnSignupSelector.addEventListener("click", handleSignupClick);
