function sorting(arrNumber) {
  // code di sini
  // console.log(arrNumber.length); 
  var length = arrNumber.length;
  for (var i = 0; i < length; i++) { 
    for(var j =0; j < length; j++){
      if(arrNumber[i] < arrNumber[j] && i != j) {
        var tmp = arrNumber[i]; 
        arrNumber[i] = arrNumber[j]; 
        arrNumber[j] = tmp
      }
    }          
  }  
    return arrNumber      
}
function getTotal(arrNumber) {
  // code di sini
  // console.log(arrNumber);
  var count = 0;
  for( var k = 0; k < arrNumber.length; k++){
    if ( arrNumber[k]== arrNumber[arrNumber.length-1]){
      count ++
    }    
  }
  return count;
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  // console.log(listSort)
  if (listSort.length==0){
    return "''"
  }
  return 'angka paling besar adalah'+ ' '+ listSort[listSort.length-1]+' '+'dan jumlah kemunculan sebanyak'+ ' '+ countHighest+' '+'kali';
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
