import { round } from "./mathExtensions";

// const form = document.querySelector("form");
const submitButton = document.querySelector("input[type='submit']");

const inpA = document.querySelector("#inp-a");
const inpB = document.querySelector("#inp-b");
const inpX = document.querySelector("#inp-x");

let a, b, x;

const submit = () => {
  a = parseFloat(inpA.value);
  b = parseFloat(inpB.value);
  x = parseFloat(inpX.value);

  const y = Math.cos(x ** 2) ** 2 - x / Math.sqrt(a ** 2 + b ** 2);
  const w = Math.sqrt(x ** 2 + b * y) - (b ** 2 * setInterval(x + a) ** 2) / x;

  if (a && b && x) {
    alert(
      `Here is the result for a -> ${a} | b -> ${b} | x -> ${x}\ny -> ${round(
        y,
        2
      )}\nw -> ${round(w, 2)}`
    );
    return;
  }

  alert("Fill all the inputs in the form!");
};

// form.onsubmit = submit;
// form.addEventListener("submit", submit);

submitButton.addEventListener("click", submit);
