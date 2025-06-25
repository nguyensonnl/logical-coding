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

//validate cho từng field một (từng ô input một)
//trong từng ô input check sẽ đính kèm các rule (quy tắc validate) của nó

//2. function xử lí sự kiện + chạy ngay lần đầu khi load
function handleSignupClick(e) {
  e.preventDefault();
  //1. thực hiện validate
  for (let i = 0; i < inputAllSelector.length; i++) {
    let inputSelector = inputAllSelector[i];
    let valueInput = inputSelector.value;
    let divMessageSelector = inputSelector.closest(".form-group").querySelector(".error_message");
    let name = inputSelector.name;

    //validate not emtpy
    if (valueInput === "") {
      //thêm viền đỏ cho input
      inputSelector.classList.add("error");
      //hiển thị message lỗi
      let message = name + " không được để trống";
      divMessageSelector.textContent = message;
    } else if (name === "email") {
      //validate email tối thiểu 3 ký tự

      let isMinLengthValid = minLengthValidate(inputSelector, name, "email phải có tối thiểu 3 ký tự");

      let isEmailRegexValid;

      if (isMinLengthValid) {
        isEmailRegexValid = emailRegexValidation(inputSelector, name);
      }

      //validate khác
      //check validate success
      if (isEmailRegexValid && isMinLengthValid) {
        showSuccess(inputSelector, divMessageSelector);
        // inputSelector.classList.remove("error");
        // divMessageSelector.textContent = "";
      }

      // let minLength = inputSelector.getAttribute("min_length");
      // if (valueInput.length < +minLength) {
      //   let message = `${name} tối thiểu ${minLength} ký tự`;
      //   divMessageSelector.textContent = message;
      // } else {
      //   divMessageSelector.textContent = "";
      // }
    } else if (name === "password") {
      //validate password tối thiểu 3 ký tự
      let isMinLengthValid = minLengthValidate(inputSelector, name, "password phải có tối thiểu 8 ký tự cho bảo mật");
      // let minLength = inputSelector.getAttribute("min_length");
      // if (valueInput.length < +minLength) {
      //   let message = `${name} tối thiểu ${minLength} ký tự`;
      //   divMessageSelector.textContent = message;
      // } else {
      //   divMessageSelector.textContent = "";
      // }
    } else {
      showSuccess(inputSelector, divMessageSelector);
      // divMessageSelector.textContent = "";
      // inputSelector.classList.remove("error");
    }
  }
}

//show success
function showSuccess(inputSelector, divMessageSelector) {
  inputSelector.classList.remove("error");
  divMessageSelector.textContent = "";
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
    let messageError = `${name} tối thiểu ${minLength} ký tự`;
    if (message) {
      messageError = message;
    }
    divMessageSelector.textContent = messageError;
  }

  return isValid;
}

//3. thêm sự kiện cho phần tử
btnSignupSelector.addEventListener("click", handleSignupClick);
