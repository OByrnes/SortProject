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
      console.log(`Comparing ${ele} ...`);
      console.log(`... to ${array[i+1]}`);
      if (ele > array[i+1]) {
        swap(array, i, i+1);
        swapped = true;
      } 
    }
  }
  console.log(`The sorted array is now ...`)
  console.log(array);
  return array;
}

let array = [3,7,6,5,4,9,8,0,2,1];
[3, 5, 4, 6, 7, 0, 2, 1, 8, 9]
bubbleSort(array);




module.exports = {
  bubbleSort,
  swap
};
