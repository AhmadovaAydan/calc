let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");
let button4 = document.querySelector("#button4");
let button5 = document.querySelector("#button5");
let text = document.querySelector("#text");

// let numbers = [];
// button1.addEventListener("click", function () {
//   let value1 = num1.value;
//   let value2 = num2.value;

//   if (value1 == "" || value2 == "") {
//     text.innerText = "Eded daxil edin";
//   } else {
//     numbers.push(value1, value2);
//     let addition = numbers.reduce(function (add, item) {
//       return Number(add) + Number(item);
//     });
//     text.innerText = `Result:${addition}`;
//   }
// });
// button2.addEventListener("click", function () {
//   let value1 = num1.value;
//   let value2 = num2.value;

//   if (value1 == "" || value2 == "") {
//     text.innerText = "Eded daxil edin";
//   } else {
//     numbers.push(value1, value2);
//     let addition = numbers.reduce(function (sub, item) {
//       return Number(sub) - Number(item);
//     });
//     text.innerText = `Result:${addition}`;
//   }
// });
// button3.addEventListener("click", function () {
//   let value1 = num1.value;
//   let value2 = num2.value;

//   if (value1 == "" || value2 == "") {
//     text.innerText = "Eded daxil edin";
//   } else {
//     numbers.push(value1, value2);
//     let addition = numbers.reduce(function (mul, item) {
//       return Number(mul) * Number(item);
//     });
//     text.innerText = `Result:${addition}`;
//   }
// });
// button4.addEventListener("click", function () {
//   let value1 = num1.value;
//   let value2 = num2.value;

//   if (value1 == "" || value2 == "") {
//     text.innerText = "Eded daxil edin";
//   } else {
//     numbers.push(value1, value2);
//     let addition = numbers.reduce(function (div, item) {
//       return Number(div) / Number(item);
//     });
//     text.innerText = `Result:${addition}`;
//   }
// });
// button5.addEventListener("click", function () {
//   num1.value = "";
//   num2.value = "";
//   text.innerText = "Netice:";
//   numbers = [];
// });
let numbers = [];

function calc(operator) {
  let value1 = num1.value;
  let value2 = num2.value;

  if (value1 === "" || value2 === "") {
    text.innerText = "Eded daxil edin";
  } else {
    numbers = [];
    numbers.push(value1, value2);
    let result;

    switch (operator) {
      case "add":
        result = numbers.reduce(function (add, item) {
          return Number(add) + Number(item);
        });
        break;
      case "sub":
        result = numbers.reduce(function (sub, item) {
          return Number(sub) - Number(item);
        });
        break;
      case "mul":
        result = numbers.reduce(function (mul, item) {
          return Number(mul) * Number(item);
        });
        break;
      case "div":
        result = numbers.reduce(function (div, item) {
          return Number(div) / Number(item);
        });
        break;
      default:
        result = "Invalid operator";
    }

    text.innerText = `Result: ${result}`;
  }
}

button1.addEventListener("click", function () {
  calc("add");
});

button2.addEventListener("click", function () {
  calc("sub");
});

button3.addEventListener("click", function () {
  calc("mul");
});

button4.addEventListener("click", function () {
  calc("div");
});

button5.addEventListener("click", function () {
  num1.value = "";
  num2.value = "";
  text.innerText = "Netice:";
  numbers = [];
});
