# Alternating Sums 

Code Signal Arcade #14 

> Sum alternating numbers in an array. 


## Solution 

Define totals. 

```
 let total1 = 0
 let total2 = 0    
 
 ```
 
 Loop through to add alternating numbers using the index.
 
 ```
   for(let i = 0; i < a.length; i++){
        if(i % 2 == 0){
            total2 += a[i]
        } else {
            total1+= a[i]
        }
```

Push totals new array. 

```
let newArray = []
    newArray.push(total2, total1)
   return newArray
   
```
