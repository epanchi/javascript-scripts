function prepareGifts(gifts) {
    let notDuplicated=[]
    gifts.forEach(element =>{
        if ( !notDuplicated.includes(element)){
            notDuplicated.push(element)
        }
    })
    // Code here
    return notDuplicated.sort()
    
   
  }
  
  const gifts1 = [3, 1, 2, 3, 4, 2, 5]
  const preparedGifts1 = prepareGifts(gifts1)
  console.log(preparedGifts1) 
  
  // https://www.geeksforgeeks.org/how-to-remove-duplicate-elements-from-javascript-array/