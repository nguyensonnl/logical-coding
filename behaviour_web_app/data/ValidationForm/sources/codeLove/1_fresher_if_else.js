//1. chọn element
const btnSignupSelector = document.querySelector(".btn-signup");
const inputNameSelector = document.querySelector(".name");
const inputEmailSelector = document.querySelector(".email");
const inputPasswordSelector = document.querySelector(".password");
const inputConfirmPasswordSelector = document.querySelector(".confirm_password");

//2. function xử lí sự kiện + chạy ngay lần đầu khi load
function handleSignupClick(e) {
  e.preventDefault();
  //1. thực hiện validate

  //1.1 validate cho input name
  let inputValueName = inputNameSelector.value;
  let errorNameSelector = inputNameSelector.closest(".form-group").querySelector(".error_message");

  if (inputValueName === "") {
    inputNameSelector.classList.add("error");
    errorNameSelector.textContent = "Tên không được để trống";
  } else {
    inputNameSelector.classList.remove("error");
    errorNameSelector.textContent = "";
  }

  //1.2 validate input email
  let inputValueEmail = inputEmailSelector.value;
  let errorEmailSelector = inputEmailSelector.closest(".form-group").querySelector(".error_message");

  if (inputValueEmail === "") {
    inputEmailSelector.classList.add("error");
    errorEmailSelector.textContent = "Email không được để trống";
  } else {
    inputEmailSelector.classList.remove("error");
    errorEmailSelector.textContent = "";
  }

  //1.3 validate input password
  let inputValuePassword = inputPasswordSelector.value;
  let errorPasswordSelector = inputPasswordSelector.closest(".form-group").querySelector(".error_message");

  if (inputValuePassword === "") {
    inputPasswordSelector.classList.add("error");
    errorPasswordSelector.textContent = "Password không được để trống";
  } else {
    inputPasswordSelector.classList.remove("error");
    errorPasswordSelector.textContent = "";
  }

  //1.4 validate input confirm password
  let inputValueConfirmPassword = inputConfirmPasswordSelector.value;
  let errorConfirmPassword = inputConfirmPasswordSelector.closest(".form-group").querySelector(".error_message");

  if (inputValueConfirmPassword === "") {
    inputConfirmPasswordSelector.classList.add("error");
    errorConfirmPassword.textContent = "Confirm password không được để trống";
  } else {
    inputConfirmPasswordSelector.classList.remove("error");
    errorConfirmPassword.textContent = "";
  }
}

//3. thêm sự kiện cho phần tử
btnSignupSelector.addEventListener("click", handleSignupClick);
