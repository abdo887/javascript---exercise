function pivot(arr, start=0, end =arr.length+1) {
    function swap(array, i, j) {
      var temp =array[i];
       array[i]=array[j];
       array[j]=temp;
}

var pivot =arr[start];
var swapIdx = start;

for (var i =start+1; i < arr.length; i++){
if(pivot > arr[i]) {
    swapIdx++;
    swap(arr,swapIdx,i)
    }
}
swap(arr,start,swapIdx) 
return swapIdx
}


function quicksort(arr,left=0,right = arr.length -1){
    let pivotIndex = pivot(arr,left,right)
   if (left < right){
       quicksort(arr,left,pivotIndex-1)
       quicksort(arr,pivotIndex+1,right)
   } 
   return arr;
}
console.log(quicksort([4,6,9,1,2,5])); 
