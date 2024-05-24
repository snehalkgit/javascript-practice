
let birthYear = [1998, 1996, 1995, 1989, 1985]
ages = []
for (let i = 0; i < birthYear.length; i++) {
    console.log(i)
    console.log(birthYear[i])
    age = 2024 - birthYear[i]
    ages.push(age)
}
console.log(ages)

///program 1 


//by usng map method

let q1 = birthYear.map(function (el, index, arry) {
    return 2024 - el
})
console.log(q1)
// console.log(birthYear)


q2 = birthYear.map(function (el, index, arry) {


    return 2024 - el + 2

})

console.log(q2)

//program 2


number = [12, 55, 44, 77, 88, 99, 658, 452, 88]
// let q3 = number.map(function(el,index,arry){
//     //return el + 2
//    // return el*2
//     return el+2*3
// })


let above60 = []
for (let i = 0; i < number.length; i++) {
    // console.log(number)
    // console.log(number[i])
    if (number[i] > 60) {
        above60.push(number[i])
    }
}

//console.log(q3)
console.log(above60)



//program 3

///filter method


number2 = [11, 54, 77, 85, 88, 99, 89, 96, 59, 78, 92, 83, 87, 85, 94]
console.log(number2)

//filter

let s2 = number2.filter(function (el, index, arry) {
    return el > 55
})

console.log(s2)


let a1 = number2.filter(function (el, index, arry) {
    return el % 2 == 0
})

console.log(a1) ///even


let a2 = number2.filter(function (el, index, arry) {
    return el % 2 !== 0
})

console.log(a2)//oddd



//progggram 4

///sum


sum = [12, 45, 2]

total = 0
for (let i = 0; i < sum.length; i++) {
    console.log(i)
    console.log(sum[i])
}


let q4 = sum.reduce(function (acc, el, index, arry) {
    return acc + el * 2
}, 0)

console.log(q4)



sum2 = [12, 45, 25, 58, 33]
let q5 = sum2.reduce(function (acc, el, index, arry) {
    return acc + el % 2 !== 0
}, 0)

console.log(q5) // return true or false // bollean vlaue






let sum3 = [12, 45, 25, 58, 33];
let a3 = sum3.reduce(function (acc, el) {
    if (el % 2 === 0) {
        acc.even += el; // Add to even sum if the element is even
    } else {
        acc.odd += el; // Add to odd sum if the element is odd
    }
    return acc;
}, { even: 0, odd: 0 }); // Initialize the accumulator object with even and odd properties

console.log(a3); // This will give you an object with the sums of odd and even numbers



///program 5 

/// only even number  return 

let sum6 = [12, 44, 33, 11, 33];
let even = sum6.reduce(function (acc, el, index, arry) {
    if (el % 2 == 0) {
        //acc + el; // Add to the accumulator if the element is even
    }
    return acc + el;
}, 0); // Initialize the accumulator to 0

console.log(even); // This will give you the sum of even numbers



// return odd ond even numbers

let sum7 = [12, 44, 33, 11, 33];

let result = sum7.reduce(function (acc, el) {
    if (el % 2 == 0) {
        acc.even.push(el); // Add to the even array if the element is even
    } else {
        acc.odd.push(el); // Add to the odd array if the element is odd
    }
    return acc;
}, { even: [], odd: [] }); // Initialize the accumulator with empty arrays for even and odd numbers

console.log(result); // This will give you an object with arrays of odd and even numbers




///program 6
let suma1 = [12, 44, 33, 11, 33, 44, 85, 69, 21, 15];

let evenNumbers = suma1.filter(function (el) {
    return el % 2 == 0; // Keep elements that are even
});

let oddNumbers = suma1.filter(function (el) {
    return el % 2 !== 0; // Keep elements that are odd
});

console.log({ even: evenNumbers, odd: oddNumbers }); // This will give you an object with arrays of odd and even numbers



let marks=[12,42,11]
let q3=marks.reduce(function(acc,el,index,arry){
    return acc + el 
},0)

console.log(q3)


///foreach method 

//action  => perform action with each ele
//return => ntg


let names=["snehal","sayli","chinmay","kawadu","nikita"]
console.log(names)

names.forEach(function(el,index,arry){
    console.log("heelo " + el +" !")
})


