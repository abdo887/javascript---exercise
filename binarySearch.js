 function binarySearchAlgo(arr,val){
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while (arr[middle] !==val && start <= end){
        if(val < arr[middle]){
       end = middle -1;
        }else {
            start = middle +1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === val){
        return middle;
    }
    return -1;
    }

 // console.log(binarysearch([2,5,6,9,13,15,28,30],28)); 
//  module.exports = {binarySearchAlgo}

// module.exports = {
//     binarySearchAlgo: binarySearchAlgo,
//     algo: algo,
// };



