console.log('hello')

////variables

// let var const


// program 1

 let x = 10
console.log(x)

 let y = 100
console.log(y)

//   const y = 100
//   console.log(y)  we cannot redeclared same variable
 // in constant 

 //program 2 


 let a = 15
 let b = 10

  console.log(a+b)
  console.log(a-b)
  console.log(a*b)
  console.log(a/b)
  console.log(a%b)



  // function - keyword------
// Calculator - functionName-----------
// () - parenthesis----------
// x,y - parameter-------------
// {} - blocks------------

//let is block and function scope 
// var is function scope





function Calculator (x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
  
}

Calculator(12,5)
Calculator(12,88)
//we can use one function for multiple output


//
// function without parameter and without return type
function add(){
  console.log(10+5)
}
add()


// function with parameter and without return type 
 function adds(x,y){
  console.log(x+y)
 }

 adds(12,5)
 adds(14,55)
 adds(41,2)

 // function with parameter and with return type

 function addA(x,y){
  return(x+y)
 }

 let a1 = addA(12,4)
 console.log(a1)
 console.log(a1+55)
 console.log(a1-45)
 console.log(a1*5)
 console.log(a1/2)
 console.log(a1%5)





