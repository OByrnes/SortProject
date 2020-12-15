// Implement Insertion Sort

function insertionSort(list) {
  let position = 1;

  while (position < list.length) {
    for (let i = position; i >= 0; i--) {

      if (list[i] < list[i-1]) {
        let deleted = list.splice(i-1, 2, list[i], list[i-1]);

      
      }
    }
    position++;
  }
}

let array = [5, 4, 3, 2, 9, 1, 0, 6];
insertionSort(array);
console.log(array);

module.exports = {
  insertionSort
};
