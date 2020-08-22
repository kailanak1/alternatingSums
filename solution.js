function alternatingSums(a) {
    let total1 = 0
    let total2 = 0    
    for(let i = 0; i < a.length; i++){
        if(i % 2 == 0){
            total2 += a[i]
        } else {
            total1+= a[i]
        }
    }
    let newArray = []
    newArray.push(total2, total1)
   return newArray
    
}
