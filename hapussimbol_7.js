function hapusSimbol(str) {
  // you can only write your code here!
  // var alfabet ='abcdefghijklmnopqrstuvwxyz';
  // var angka = '0123456789';
  // var tmp = ''
  // for (var i = 0; i< str.length; i++){
  //   for( var j = 0; j  < alfabet.length; j++){
  //     console.log(alfabet[j]);
      
  //     for(var k =0; k < angka.length; k++){
  //       if(str[i]==alfabet[j]){
  //         tmp += str[i];
  //       }
  //       if(str[i]==angka[k]){
  //         tmp += str[i]
  //       }
  //     }
  //   }
  // }
  // return tmp
  var tmp =''
  for(var i =0; i < str.length; i++){
    tmp += str[i]
  }
  var final = tmp.replace(/[^a-z0-9]/gi,'');
  return final
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100