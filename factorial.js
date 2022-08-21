export function iteratingFactorial(n){
  let result = n
  for(let i = n-1; i > 1; i--){
    result *= i;
  }
  return result;
}

export function factorial (n) {  
  if(n === 2){
    return 2;
  }
  return n *= factorial(n-1);
}




