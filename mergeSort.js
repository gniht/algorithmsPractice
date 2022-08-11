export function mergeSort (arr){
  if(arr.length === 1){
    return arr;
  }
  //split array
  let front = [];  
  let back = [];    

  for(let i = 0; i < arr.length; i++){
    if(i < arr.length/2){
      front.push(arr[i]);
    }else{
      back.push(arr[i]);
    }
  }
  
  return merge(mergeSort(front), mergeSort(back));
}

export function merge(arr1, arr2){
  if(!arr2){
    return arr1;
  }
  let result = [];
  let index1 = 0;
  let index2 = 0;
  let count = arr1.length + arr2.length;

  while(count > 0){
    let check = smallerOf(arr1[index1], arr2[index2]);
    if(check === 0 || index2 >= arr2.length){
      result.push(arr1[index1]);
      index1++;
    }else if(check === 1 || index1 >= arr1.length){
      result.push(arr2[index2]);
      index2++;
    }
    count--;
  }
  return result;
}

export function smallerOf (a, b){
  if(a && b || ( a === 0 || b === 0) ){
    return a <= b ? 0 : 1;    
  }else{
    if(a){
      return a;
    }
    if(b){
      return b;
    }
  }  
}

