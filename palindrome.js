// Un palindromo es una frase que se lee igual tanto de derecha ha 
// d-i  i-d

function palindromeString(stringVar){
  stringVar=stringVar.toLowerCase(stringVar);
  stringVar=stringVar.replace(/,/g,'');
  stringVar=stringVar.replace(/ /g,'');
  // variable y la convertir en elementos
  console.log(stringVar);
 // console.log(stringVar.split('').reverse().join(''));
  if(stringVar == stringVar.split('').reverse().join('')){
    console.log('true');
    return true;
  }
  console.log('false')
  return false
 
  
}
palindromeString('racecar'); // true
palindromeString('Madam'); // true

palindromeString('Edison'); // false
// change to lowe cases

palindromeString('Rotator'); // true
palindromeString('Red rum, sir, is murder'); // true

