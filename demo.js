

/**
 Desarrollar una función en Javascript que me permita obtener todos los elementos de una serie fibonacci.
definiendo sus primeros dos elemento s
 «cada término es la suma de los dos anteriores»,
Elementos:
0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597

Definición:   Fn = Fn-1+Fn-2

              Print(n1)
(n1=0  n2=1)    0   =>  n1=1  n2=(0+1)=1        
(n1=1  n2=1)    1   =>  n1=1  n2=(1+1)=2
(n1=1  n2=2)    1   =>  n1=2  n2=(1+2)=3
(n1=2  n2=3)    2   =>  n1=3  n2=(2+3)=5
(n1=3  n2=5)    3   =>  n1=5  n2=(3+5)=8
 */

function fibonacii(number){
  let n1 = 0, n2 =1, nextNumber
  let array=[]
  for(let i=1; i <= number; i++ ){
     // console.log(n1)
      array.push(n1)
      nextNumber= n1 + n2 
      n1= n2
      n2= nextNumber

  }
  console.log(array)
}

fibonacii(5) // 0 1 1 2 3   
fibonacii(8) // 0 1 1 2 3 5 8 13  
