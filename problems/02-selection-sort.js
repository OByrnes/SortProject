// Implement Selection Sort

// Implement swap without looking at bubble sort
function swap(arr, index1, index2) {
  [arr[index1],arr[index2]] = [arr[index2], arr[index1]]
  
}

let list = [7,6,8,3,4,5,1,2,9,0]

function selectionSort(list) {
  // your code here
  for (let i=0; i< list.length; i++){
    let minIndex = i
    
    for (let j=i+1; j< list.length; j++){
      let ele = list[j]
      
      if (list[minIndex] > ele){
        
        minIndex=j
      }
      swap(list, i, minIndex)
    }
    
  }
  console.log(list)
  return list
}


selectionSort(list)
module.exports = {
  selectionSort,
  swap
};
