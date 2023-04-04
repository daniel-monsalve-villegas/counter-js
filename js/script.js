let add = document.querySelector('#add');
let subtract = document.querySelector('#subtract');
let output = document.querySelector('#output');

add.addEventListener('click', function () {
  let result = Number(output.innerText) + 1;

  if (result > 10) {
    result = 0;
  }

  output.innerText = result;
});

subtract.addEventListener('click', function () {
  let result = Number(output.innerText) - 1;

  if (result < 0) {
    result = 0;
  }

  output.innerText = result;
});
