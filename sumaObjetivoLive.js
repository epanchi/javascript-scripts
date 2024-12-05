// Encontrar dos elementos de un array que sumados den como resultado una suma esperada ( parametro)

function encontrarSuma(numeros, objetivo){
    // [4, 5, 6, 7], 13)
   let lista=[]
    for ( numero of numeros){
       complemento = objetivo - numero 
        // numero:4 complemento:9  
        if ( lista.includes(complemento)){
           return `${numero} y ${complemento} suman ${objetivo}`
        }
        lista.push(numero)
    }
    

   return undefined;

}

console.log(encontrarSuma([4, 5, 6, 7], 13))  // 6 y 7
console.log(encontrarSuma([4, 4, 6, 2], 8))   // 4 y 4



