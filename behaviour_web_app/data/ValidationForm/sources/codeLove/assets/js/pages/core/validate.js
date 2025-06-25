function Validate(options) {
  const btnSingUpSelector = document.querySelector(".btn-signup");
  console.log(options);

  function initEventAndData() {
    btnSingUpSelector.addEventListener("click", handleSignupClick);
  }

  function handleSignupClick(event) {
    event.preventDefault();
  }

  //add event listener + data init
  initEventAndData();
}
