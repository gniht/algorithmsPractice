import { fib } from "./fibonacci.js";

const body = document.querySelector("body");
const output = document.createElement("div");
body.appendChild(output);

let num1 = 10;

output.innerText = `Fibonacci of ${num1} is ${fib(num1)}.`;
