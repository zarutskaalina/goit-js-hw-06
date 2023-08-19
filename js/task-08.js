const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const inputEl = event.currentTarget;

  const { email, password } = inputEl.elements;
  const data = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  if (data.email === "" || data.password === "") {
    alert("All fields must be filled.");
    return;
  }

  console.log(data);

  document.querySelector(".login-form").reset();
}
