let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");
let button4 = document.querySelector("#button4");
let button5 = document.querySelector("#button5");
let text = document.querySelector("#text");

let numbers = [];
button1.addEventListener("click", function () {
  let value1 = Number(num1.value);
  let value2 = Number(num2.value);

  if (value1 == "" || value2 == "") {
    text.innerText = "Eded daxil edin";
  } else {
    numbers.push(value1, value2);
    let addition = numbers.reduce(function (add, item) {
      return add + item;
    });
    text.innerText = `Result:${addition}`;
  }
});
button2.addEventListener("click", function () {
  let value1 = Number(num1.value);
  let value2 = Number(num2.value);

  if (value1 == "" || value2 == "") {
    text.innerText = "Eded daxil edin";
  } else {
    numbers.push(value1, value2);
    let addition = numbers.reduce(function (sub, item) {
      return sub - item;
    });
    text.innerText = `Result:${addition}`;
  }
});
button3.addEventListener("click", function () {
  let value1 = Number(num1.value);
  let value2 = Number(num2.value);

  if (value1 == "" || value2 == "") {
    text.innerText = "Eded daxil edin";
  } else {
    numbers.push(value1, value2);
    let addition = numbers.reduce(function (mul, item) {
      return mul * item;
    });
    text.innerText = `Result:${addition}`;
  }
});
button4.addEventListener("click", function () {
  let value1 = Number(num1.value);
  let value2 = Number(num2.value);

  if (value1 == "" || value2 == "") {
    text.innerText = "Eded daxil edin";
  } else {
    numbers.push(value1, value2);
    let addition = numbers.reduce(function (div, item) {
      return div / item;
    });
    text.innerText = `Result:${addition}`;
  }
});
button5.addEventListener("click", function () {
  num1.value = "";
  num2.valu2 = "";
  text.innerText = "Netice";
});
