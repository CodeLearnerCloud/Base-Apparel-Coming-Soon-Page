const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(validateEmail(input.value)) {
    form.classList.remove('verify');
  } else {
    form.classList.add('verify');
  }
})

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};