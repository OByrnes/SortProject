// Implement Merge Sort

function merge(array1, array2) {
  let res =[];
  while(array1.length > 0 && array2.length > 0){
    if (array1[0]<array2[0]){
      res.push(array1[0])
      array1.shift()
    }else {
      res.push(array2[0])
      array2.shift()
    }
    
  }
  while(array1.length>0){
    res.push(array1[0])
    array1.shift()
  }
  while(array2.length>0){
    res.push(array2[0])
    array2.shift()
  }

  return res
}

function mergeSort(array) {
  if(array.length <=1){
    return array
  }
  let mid= array.length/2
  let left = array.slice(0,mid)
  let right = array.slice(mid)
  let leftHalf = mergeSort(left)
  let rightHalf = mergeSort(right)
 return  merge(leftHalf, rightHalf)

}


let array = [6, 4, 5, 3, 2, 7]

let array1 = [1, 3, 5, 7, 9, 13]
let array2 = [2, 4, 6, 8, 10, 23, 30]

console.log(mergeSort(array))

module.exports = {
  merge,
  mergeSort
};
