

const body = document.querySelector("body");
const output = document.createElement("div");
body.appendChild(output);

function fib(n) {  
  if(n == 0 || n == 1){
    return n;
  }
  return fib(n-1) + fib(n-2);  
}


let num = 10;


output.innerText = `Fibonacci of ${num} is ${fib(num)}.`;
