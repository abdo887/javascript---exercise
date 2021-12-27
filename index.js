//function linearseach(arr,val){
    //for(var i=1; i < arr.length; i++){
    //if(arr[i] === val) return i;
    //}
    //return -1
   // }
 //console.log(linearseach([34,56,1,2],3));
 
 
// function binarysearch(arr,val){
//     var start = 0;
  //   var end = arr.length - 1;
    // var middle = Math.floor((start + end) / 2);
   //  while (arr[middle] !==val && start <= end){
     //    if(val < arr[middle]){
   //     end = middle -1;
     //    }else {
      //       start = middle +1;
   //      }
     //    middle = Math.floor((start + end) / 2);
  //   }
   //  if(arr[middle] === val){
    //     return middle;
   //  }
    // return -1;
    // }
 // console.log(binarysearch([2,5,6,9,13,15,28,30],28)); 


//function bubblesort(arr){
//    var noSwaps;
  //  for (let i = arr.length;  i > 0; i--) {
    //   noSwaps=true;
   // for (let j = 0; j < i - 1; j++) {
//        if (arr[j] > arr[j+1]) {
  //          var temp =arr[j];
    //        arr[j]=arr[j+1];
      //      arr[j+1]=temp;
//        //    noSwaps=false;  
  //      }
//    }   
 //   if (noSwaps) break;
  //  }
   // return arr
//}
//console.log(bubblesort([10,1,2,3,4,5,6,7,8]));

//function selcectionsort(arr) {
//    for (let i = 0; i < arr.length; i++) {
 //       var min =i;
   //     for (let j = i+1; j < arr.length; j++){
     //  if (arr[min] > arr[j]){
       // min = j;
//       }   
  //      }
   //     if (i !== min) {
    //     var temp =arr[i];
     //   arr[i]=arr[min];
      //  arr[min]=temp; 
       // }        
//    }
 //   return arr;
//}
//console.log(selcectionsort([34,22,10,19,17])); 

function merge(arr1,arr2) {
    let result= [];
    let i =0;
    let j=0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j]> arr1[i]) {
      result.push(arr1[i]);
      i++;
    }else {
      result.push(arr2[j]);
      j++;
    }
  }
    while (i <arr1.length) {
    result.push(arr1[i]);
    i++;
    }
    while (j <arr2.length) {
      result.push(arr2[j]);
      j++;
      } 
  return result;
}
console.log(merge([1,8,5,9],[11,19,15,17,18]));
