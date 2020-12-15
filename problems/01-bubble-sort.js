// Implement Bubble Sort

function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

function bubbleSort(array) {
  
  let swapped = true;
  while (swapped) {
    swapped = false;
    
    for (let i = 0; i < array.length - 1; i++) {
      let ele = array[i];
      if (ele > array[i+1]) {
        swap(array, i, i+1);
        swapped = true;
      } 
    }
  }
  
  return array;
}

let array = [3,7,6,5,4,9,8,0,2,1];

bubbleSort(array);




module.exports = {
  bubbleSort,
  swap
};
