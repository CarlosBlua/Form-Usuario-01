/*
let user = document.getElementById("username").value;
console.log(user);

let pass = document.getElementById("password").value;
console.log(pass);
*/

function disableElement() {
    document.getElementById("btn01").disabled = true;
}

const btn = document.querySelector('button');
const txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.textContent === 'Start machine') {
    btn.textContent = 'Stop machine';
    txt.textContent = 'The machine has started!';
  } else {
    btn.textContent = 'Start machine';
    txt.textContent = 'The machine is stopped.';
  }
}
