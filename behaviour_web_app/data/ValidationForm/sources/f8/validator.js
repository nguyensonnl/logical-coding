//Tạo đối tượng
function Validator(options) {
  //hàm thực hiện validate
  function validate(inputElement, rule) {
    let errorMessage = rule.test(inputElement.value);
    let errorElement = inputElement.parentElement.querySelector(options.errorSelector);
    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.parentElement.classList.add("invalid");
    } else {
      errorElement.innerText = "";
      inputElement.parentElement.classList.remove("invalid");
    }
  }

  //lấy element của form cần validate
  let formELement = document.querySelector(options.form);
  if (formELement) {
    options.rules.forEach(function (rule) {
      let inputElement = formELement.querySelector(rule.selector);

      if (inputElement) {
        //xử lý trường hợp blur khởi input
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };

        //xử lý mỗi khi người dùng nhập vào input
        inputElement.oninput = function () {
          validate(inputElement, rule);
        };
      }
    });
  }
}

//Định nghĩa các rule là các hàm
Validator.isRequired = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "Vui lòng nhập trường này";
    },
  };
};

Validator.isEmail = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : "Trường này phải là email";
    },
  };
};

Validator.minLength = function (selector, min) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min ? undefined : `Vui lòng nhập vào tối thiểu ${min} ký tự`;
    },
  };
};
