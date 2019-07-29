function kaliTerusRekursif(angka) {
  // you can only write your code here!
  var str = angka.toString();
  if (str.length == 1){
    return angka
  }
  else{
    var tmp = 1;
    for( var i =0; i < str.length; i++){
        tmp *= parseInt(str[i])

    }  
    return kaliTerusRekursif(tmp)
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6