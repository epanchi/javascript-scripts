// Programando una funcion que permita realizar un conteo hacia atras dado un numero enviado por paramterto


// 5 , 4 , 3 , 2 ,1 =0

// 5 -> (5-1)
// 4 ->  (4-1)
// 3 ->  (3-1)
// 2 ->  (2-1)
// 1 ->  (1-1)
// 0  : retorno

function conteo(numero){
    
    if (numero == 0)
        return
    console.log(numero)
    conteo(numero -1 )
}
conteo(5);