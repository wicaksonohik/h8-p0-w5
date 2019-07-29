function cariPelaku(str) {
  // you can only write your code here!
  var tmp = '';
  for(var i = 0; i < str.length; i++){
    tmp += str[i];
  }
  var result = tmp.match(/abc/g)
  return result.length
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2