// Realizar un script en par  encontrar dos elementos de un array numerico que sumados den como resultado una suma esperada enviada como parametro 

function encontrarSuma(numeros, objetivo){
    let lista=[]
    for( numero of numeros){
      // numero: 4    13 -4 : 9
        complemento= objetivo - numero

         if ( lista.includes(complemento)){
          return `${numero} y ${complemento} suman ${objetivo}`
         }

        lista.push(numero)
   

    }
    return  undefined
}

console.log(encontrarSuma([4, 5, 6, 7], 13))  // 6 y 7
console.log(encontrarSuma([4, 4, 6, 2], 8))   // 4 y 4


