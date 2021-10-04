const btn = document.querySelector('#v2');

btn.onclick = function () {
  console.log('YOU CLICKED ME!');
  console.log('I HOPE IT WORKED!');
}

function scream() {
  console.log("AAAAAAHHHHH");
  console.log("STOP TOUCHING ME!")
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
  alert('YOU CLICKED THE H1!!!!!');
}

const btn3 = document.querySelector('#v3');

btn3.addEventListener('mouseup', () => {
  alert('CLICKED!')
})

function twist() {
  console.log('TWIST!')
}

function shout() {
  console.log('SHOUT!')
}

const tas = document.querySelector('#tas');

tas.addEventListener('click', twist, { once: true });
tas.addEventListener('click', shout);
