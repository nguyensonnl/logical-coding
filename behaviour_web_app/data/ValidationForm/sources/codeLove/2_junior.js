//1. select element
const btnSignupSelector = document.querySelector(".btn-signup");
const inputAllSelector = document.querySelectorAll(".form-group input");
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//create input data
const rules = {
  name: {
    required: true,
  },
  email: {
    required: true,
    minlength: 3,
    email: true,
  },
  password: {
    required: true,
    minlength: 8,
  },
  confirm_password: {
    required: true,
    minlength: 8,
    equal_to: "password",
  },
};

const methodsRule = {
  required(valueInput, paramsInput) {
    return valueInput ? true : false;
  },
  minlength(valueInput, paramsInput) {
    return valueInput.length >= paramsInput;
  },
  email(valueInput, paramsInput) {
    return regexEmail.test(valueInput);
  },
  equal_to(valueInput, paramsInput) {
    let passSelector = document.querySelector(`. ${paramsInput}`);
    let valuePass = passSelector.value;
    return valuePass === valueInput;
  },
};

const messages = {
  name_required: "Name không được để trống",
  password_required: "Password không được để trống",
  email_required: "Email không được để trống",
  confirm_password_required: "Confirm password không được để trống",
};

//2. handle event and onload first
function handleSignupClick(e) {
  e.preventDefault();
  //loop từng phần tử input validate
  for (const keyNameInput in rules) {
    //name, email, ơassword, confirm password
    let inputElement = document.querySelector(`. ${keyNameInput}`);
    //<input type="text" name = "name" class="name"/>
    let valueInput = inputElement.value;
    let ruleAllForInput = rules[keyNameInput];

    //reset all error
    resetAllError(inputElement);
    //loop qua từng rule validate của input đấy
    for (const ruleItemKey in ruleAllForInput) {
      //lấy ra value của object item rule
      let paramsInput = ruleAllForInput[ruleItemKey];
      //kết quả validate từng rule trả về
      let result = methodsRule[ruleItemKey](valueInput, paramsInput); //requỉed(valueInput, paramsInput)
      let keyMessage = keyNameInput + "_" + ruleItemKey;

      //kiểm tra validate rule thất bại
      if (!result) {
        showMessageError(inputElement, keyMessage, keyNameInput);
        break;
      }
    }
  }
}

function showMessageError(inputElement, keyMessage, keyNameInput) {
  let message = keyNameInput + " not valid";
  inputElement.classList.add("error");

  if (messages[keyMessage]) {
    message = messages[keyMessage];
  }
  inputElement.nextElementSibling.textContent = message;
}

function resetAllError(inputElement) {
  inputElement.classList.remove("error");
  inputElement.nextElementSibling.textContent = "";
}

//3. create function handle event for element
btnSignupSelector.addEventListener("click", handleSignupClick);
