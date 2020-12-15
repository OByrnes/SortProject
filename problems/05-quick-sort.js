// Implement Quick Sort

function quickSort(array) {
  // base case
  if (array.length <= 1) {
    return array;
  }
  
  // recursive case
  let pivot = array[0];
  let left = []; 
  let right = []; 

  array.forEach((ele) => {
    if (ele < pivot) {
      left.push(ele);
    } else if (ele > pivot) {
      right.push(ele);
    }
  });
 
  // recursive step
  let leftHalf = quickSort(left);
  let rightHalf = quickSort(right);

  return [...leftHalf, pivot, ...rightHalf];
}

let array = [1, 9, 2, 8, 3, 7, 4, 6, 5, 0];
// quickSort(array);
// console.log(array);
console.log(quickSort(array));

module.exports = {
  quickSort
};
