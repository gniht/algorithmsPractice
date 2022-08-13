import { fib } from "./fibonacci.js";
import { mergeSort } from "./mergeSort.js";
import LinkedList from "./linkedList.js";

const body = document.querySelector("body");
const output = document.createElement("div");
const sortedDiv = document.createElement("div");
body.appendChild(output);
body.appendChild(sortedDiv);

let num1 = 10;
const unsorted = [1, 12, 13, 4, 5, 9, 10, 3, 7, 6, 2, 8, 11, 0];
let sorted = mergeSort(unsorted);
output.innerText = `Fibonacci of ${num1} is ${fib(num1)}.`;
sortedDiv.innerText = `${unsorted.toString()} Sorts to: ${sorted}`;

let test = new LinkedList();
console.log("tail: ",test.getTail());
test.append(21);
console.log("head: ",test.getHead());
console.log("tail: ",test.getTail());
test.prepend(3);
console.log("head: ",test.getHead());
console.log("tail: ",test.getTail());
console.log("tail: ",test.at(1).value);
console.log("size: ",test.size());



