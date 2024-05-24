// one input and multiple outcomes
// numT > 0  && numT <= 5   -------> 20 % discount
// numT > 5  && numT <= 10  -------> 30 % discount 
// numT > 10                -------> 40 % discount

let numT = 10

if(numT > 0 && numT >= 5){
    console.log("20 % discount")
}
if(numT > 5 && numT <= 10){
    console.log("30 % discount")
}
if(numT >10){
    console.log("40 % discount")
}

//program 


let numT1 = 60

if(numT1 > 10 && numT1 <= 5){
    console.log("10 % discount")
}
if(numT1 > 5 && numT1 <= 15){
    console.log("20 % discount")
}
if(numT1 >30){
    console.log("50 % discount")
}

// program 2

let numT2  = -50

if(numT2 > 0 && numT2 <= 5){
    console.log("20 % discount")
}
else if(numT2 > 5 && numT <= 10){
    console.log("30 % discount")
}
else if(numT2 > 60){
    console.log("50 % discount")
}
else {
    console.log("incorrect input")
}

// program 3

let marks = 50

if(marks > 60){
    console.log("Grade A")
}
if(marks >= 85){
    console.log("Grade B")
}
if(marks >= 90){
    console.log("Grade C")
}

let marksB = 95
if(marksB > 80){
    console.log("Grade A")
}
else if(marksB >= 66){
    console.log("Grade B")
}
else if(marksB >= 50){
    console.log("Grade C")
}
else {
    console.log("fail")
}

// program 5

let x = 15 
let y  = 50

if(x > y){
    console.log("x is greater")
}
else {
    console.log("y is greater")
}

// program 6

let x1 = 10
let x2 = 70
let x3 = 4

if(x1 > x2 && x1 > x3){
    console.log("x1 is greater")
}
else if(x2 > x3 && x2 > x1){
    console.log("x2 is greater")
}
else {
    console.log("x3 is greater")
}



let x4 = 10
let x5 = 55
let x6 = 625

if(x4 > x5 && x4 > x6){
    console.log("x4 is greater")
}
else if(x5 > x4 && x5 > x6){
    console.log("x5 is greater")
}
else {
    console.log("x6 is greater")
}
