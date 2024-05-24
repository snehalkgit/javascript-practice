//ternary operator 

let a = 10
let b = 55


a > b ? console.log("a is grreater") : console.log("b is greater ")


// program2 

let age = 19
age >= 18 ? console.log("can drive") : console.log("can not drive")




///switch cases
let city = "hinganghat"

switch (city) {
    case "hinganghat":
        console.log("MH")
    case "mumbai":
        console.log("mh")
    case "nagpur":
        console.log("mh")
    default:
        console.log("incorrect city name ")
}



let city2 = "mumbai"

switch (city2) {
    case "hinganghat":
        console.log("MH")
        break
    case "mumbai":
        console.log("mh")
        break
    case "jaipur ":
        console.log("rj")
        break
    default:
        console.log("incorrect city name ")
}



//program 3

 let city3 = "kanpur"



switch (city3) {
    case "hinganghat":
    case "varora":
        console.log("MH")
        break
    case "indore":
    case "kanpur":
        console.log("up")
        break
    case "jaipur ":
    case "indore":
        console.log("rj")
        break
    default:
        console.log("incorrect city name ")
}



//program  4

let a1 =5
let a2 =100
let a3 = 50



 if(a1>a2 && a1 >a3){
    console.log("a1 is greater ")
 }
 if(a2>a1 && a2 >a3){
    console.log("a2 is greater ")
 }

 else{
    console.log("a3 is greater ")
 }



 
 let a11 =5
 let a22 =100
 let a33 = 5000

  let flag = true 
  switch(flag){
    case a11>a22 && a1 >a33:
        console.log("a1 is greater ")
        break
     case a22>a11 && a22 >a33:
        console.log("a2 is greater")
        break
        default:
            console.log("a3 is greater ")
        
  }












