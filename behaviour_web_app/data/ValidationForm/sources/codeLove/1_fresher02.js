/*
vòng lặp kết hợp if else
tách hàm tránh trung lặp code

nguyên tắc soild
một hàm chỉ làm một nhiệm vụ

//validate cho từng field một (từng ô input một)
//trong từng ô input check sẽ đính kèm các rule (quy tắc validate) của nó

fresher > 6 tháng kinh nghiệm
tách hàm theo từng logic:
xác đinh được input, output
tái sử dụng
khi được sử dụng chung ->Tách hàm

xử lý tuần tự if else, if else if rất nhiều
*/

//1. chọn element
//dùng vòng lặp for lấy ra mảng tất cả ô input
const btnSignupSelector = document.querySelector(".btn-signup");
const inputAllSelector = document.querySelectorAll(".form-group input");
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const errorMessageAll = document.querySelectorAll(".error_message");

//------------------------ start listner function -----------------------------
//2. function xử lí sự kiện + chạy ngay lần đầu khi load
function handleSignupClick(e) {
  e.preventDefault();

  let isNameValid;
  let isEmailValid;
  let isPasswordValid;
  let isConfirmPasswordValid;

  //1. thực hiện validate
  for (let i = 0; i < inputAllSelector.length; i++) {
    let inputSelector = inputAllSelector[i];
    let name = inputSelector.name;
    if (name === "name") {
      isNameValid = validateName(inputSelector);
    } else if (name === "email") {
      isEmailValid = validateEmail(inputSelector);
    } else if (name === "password") {
      isPasswordValid = validatePassword(inputSelector);
    } else {
      isConfirmPasswordValid = validateConfirmPassword(inputSelector);
    }
  }

  //kiểm tra không có ô input nào có lôi validate
  //1 lưu user vào localStorage
  //2 redirect đến màn hình login
  if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
    console.log("Go to page login");
  }
}

//hàm chỉ chạy khi người dùng nhập value có sự thay đổi
function handleChangeValue(event) {
  let inputSelector = event.target;
  let nameInput = inputSelector.name;
  if (nameInput === "name") {
    validateName(inputSelector);
  } else if (nameInput === "email") {
    validateEmail(inputSelector);
  } else if (nameInput === "password") {
    validatePassword(inputSelector);
  } else {
    validateConfirmPassword(inputSelector);
  }
}
//----------------------------------------- end listner function -----------------------------

//-------------------------------------- start validate function -----------------------------
function validateName(inputSelector) {
  let isValid = false;
  if (!require(inputSelector)) {
    showError(inputSelector, "Tên không được để trống");
  } else {
    isValid = true;
    showSuccess(inputSelector);
  }
  return isValid;
}

function validateEmail(inputSelector) {
  let isValid = false;
  if (!require(inputSelector)) {
    showError(inputSelector, "Email không được để trống");
  } else if (!minlength(inputSelector)) {
    showError(inputSelector, `Email tối thiểu ${inputSelector.getAttribute("min_length")} ký tự`);
  } else if (!emailRegex(inputSelector)) {
    showError(inputSelector, `Email không đúng định dạng`);
  } else {
    isValid = true;
    showSuccess(inputSelector);
  }
  return isValid;
}

function validatePassword(inputSelector) {
  let isValid = false;
  if (!require(inputSelector)) {
    showError(inputSelector, "Password không được để trống");
  } else if (!minlength(inputSelector)) {
    showError(inputSelector, `Passwork tối thiểu ${inputSelector.getAttribute("min_length")} ký tự`);
  } else {
    isValid = true;
    showSuccess(inputSelector);
  }
  return isValid;
}

function validateConfirmPassword(inputSelector) {
  let isValid = false;
  if (!require(inputSelector)) {
    showError(inputSelector, "Confirm password không được để trống");
  } else if (!minlength(inputSelector)) {
    showError(inputSelector, `Confirm password tối thiểu ${inputSelector.getAttribute("min_length")} ký tự`);
  } else if (!comparePass(inputSelector)) {
    showError(inputSelector, "Confirm passwork không giống với password");
  } else {
    isValid = true;
    showSuccess(inputSelector);
  }
  return isValid;
}
//-------------------------------------- end validate function -------------------------------

//------------------------- start rules function ----------------------------
//output: return true or false
function require(inputSelector) {
  return inputSelector.value ? true : false;
}
//output: return true or false
function minlength(inputSelector) {
  let minLength = inputSelector.getAttribute("min_length");
  let inputValue = inputSelector.value;
  if (inputValue.length < minLength) {
    return false;
  }
  return true;
}
//output: return true or false
function emailRegex(inputSelector) {
  let inputValue = inputSelector.value;
  return regexEmail.test(inputValue);
}
//ouput: return true or false
function comparePass(inputSelector) {
  let valueConfirmPass = inputSelector.value;
  let passwordSelector = document.querySelector("." + inputSelector.getAttribute("selector_compare"));
  let valuePassword = passwordSelector.value;
  return valueConfirmPass === valuePassword;
}
//---------------------------- end rules function ----------------------------------------------------

//----------------------------- start message function ----------------------------------------------
function showSuccess(inputSelector) {
  let divMessageSelector = inputSelector.closest(".form-group").querySelector(".error_message");
  divMessageSelector.textContent = "";
  inputSelector.classList.remove("error");
}

function showError(inputSelector, message = null) {
  let divMessageSelector = inputSelector.closest(".form-group").querySelector(".error_message");
  divMessageSelector.textContent = message;
  inputSelector.classList.add("error");
}
//------------------------------ end message function --------------------------------------------------

//3. thêm sự kiện cho phần tử
btnSignupSelector.addEventListener("click", handleSignupClick);
//thêm sự kiện input cho các ô nhập liệu
for (let i = 0; i < inputAllSelector.length; i++) {
  let inputElement = inputAllSelector[i];
  inputElement.addEventListener("blur", handleChangeValue); //input
}
