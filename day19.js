//  string contact  topic

// string + string  -------> string 
// string + number  -------> string 
// number + string  -------> string 
// number + number  -------> number



let a = 10
let b = 50
let c = "snehal"
 console.log(a+b+c)
 console.log(c+a+b)
 console.log(c+b+a)



let fn = "snehal"
let ln= "kamble"

console.log('my firstname is  '+ fn + ' my last name is ' +ln)
console.log(`my firstname is ${fn} my last name is ${ln}`)


console.log(typeof(8)) ///number
console.log(typeof('5')) // string 
console.log(( typeof`4`))/// string 



// Methods and Properties 
// Object  ---- properties and methods 

//method have 2 proprties  === return and action 


firstname = "sneha"
console.log(firstname)
console.log(typeof(firstname))
console.log(firstname.length)


///uppercase()
let A = "SNEhal"
let q1=A.toUpperCase()
console.log(q1)



//lowercase()
 q2 = A.toLowerCase()
 console.log(q2)


 //includes

 names=["snehal","sarika"]
 let q3 = names.includes('snehal')
 console.log(q3)


let fruit = "Mango"
 let q4= fruit.includes('m')
 console.log(q4)


 let q5 = fruit.includes('an')
 console.log(q5)


 ///indexof 

let city = "mumbai"
let a2=city.indexOf('m')
console.log(a2)


//replace

 let line = "im learning js "
 let a3 = line.replace("js","sql")
 console.log(a3)



