//methods

//find() method

let marks = [44,58,77,88,44,56,98,25,65,36,95,86]
 let above55 = marks.find(function(el,index,arry){
    return el > 50
})
console.log(above55) // return first element by using find method



let marks1 = [44,88,55,77,88,44,56,98,25,65,36,95,86]
let above80 = marks1.findIndex(function(el,index,arry){
    return el >80
})
console.log(above80) //return  only index of element




//every()

let num=[54,22,45,66,35,96,11,25,22,36,44]

let s1= num.every(function(el,index,arry){
    return el > 60
})


console.log(s1) // false return boolean value  bcuse -- not every no is greater than 60


 //some

 let s2 = num.some(function(el,index,arry){
    return el > 50
 })
 console.log(s2) // true -- some are present so it gives true value 