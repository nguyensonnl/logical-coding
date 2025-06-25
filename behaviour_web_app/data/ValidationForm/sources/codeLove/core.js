function Validate(options) {
  const btnClassSubmit = options.btnClassSubmit || "btn-signup";
  const errorClass = options.errorClass || "error";
  const errorMessageClass = options.errorMessage || "error_message";
  const formGroupClass = options.formGroupClass || "form-group";

  const rules = options.rules;
  const messages = options.messages;

  //truy vấn DOM của thư viện
  const container = document.querySelector(options.container);
  const btnSignupSelector = container.querySelector(`.${btnClassSubmit}`);

  const messageDefault = {
    required: "This field is required ",
    minlength: "Please enter at latest {min} characters",
    regex: "Please enter true format",
    equal_to: "This field not same value",
  };
  let erros;
  const rulesMethod = {
    required: function (valueInput, valueRule) {
      return valueInput !== "";
    },
    minlength: function (valueInput, valueRule) {
      return valueInput.length >= valueRule;
    },
    regex: function (valueInput, valueRule) {
      return valueRule.test(valueInput);
    },
    equal_to: function (valueInput, valueRule) {
      let passwordSelector = container.querySelector(`.${valueRule}`);
      let valuePass = passwordSelector.value;
      return valueInput === valuePass;
    },
  };

  function intitEventAndData() {
    btnSignupSelector.addEventListener("click", handleSignupClick);
  }

  function handleSignupClick(e) {
    e.preventDefault();
    erros = [];

    for (const keyInputName in rules) {
      const inputSelector = container.querySelector(`.${keyInputName}`);
      const valueInput = inputSelector.value;
      const ruleAllForInputItem = rules[keyInputName];
      //reset all error
      resetError(inputSelector);

      for (const ruleItemKey in ruleAllForInputItem) {
        const valueRule = ruleAllForInputItem[ruleItemKey];
        const reuslt = rulesMethod[ruleItemKey](valueInput, valueRule);
        const keyMessage = keyInputName + "_" + ruleItemKey;
        if (!reuslt) {
          let messageErrorDefault = messageDefault[ruleItemKey];
          messageErrorDefault = messageErrorDefault.replace("{min}", valueRule);
          erros.push({
            elementError: inputSelector,
            message: messages[keyMessage] ? messages[keyMessage] : messageErrorDefault,
          });
          break;
        }
      }
    }
  }

  if (erros.length) {
    showError();
  }

  function resetError(inputSelector) {
    inputSelector.classList.remove(errorClass);
    let divError = inputSelector.closest(`.${formGroupClass}`).querySelector(`.${errorMessageClass}`);
    divError.textContent = "";
  }

  function showError() {
    //Hiển thị lỗi
    erros.forEach((element) => {
      let inputElement = element.elementError;
      let divError = inputElement.closest(`.${formGroupClass}`).querySelector(`.${errorMessageClass}`);
      inputElement.classList.add(errorClass);
      divError.textContent = element.message;
    });
  }

  //add event listner + data init
  intitEventAndData();
}
