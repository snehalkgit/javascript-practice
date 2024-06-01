///dot notation and bracket notation

let info = {
    firstname: "snehal",
    lastname: "kmable",
    age: 25,
    city: "nagpur"

}
//dot notation

//retrive
console.log(info.firstname)
console.log(info.city)

//update

info.firstname = "kartik"
console.log(info)


//add

info.language = "English"
console.log(info)

//delete

delete info.city
console.log(info)

///bracket notation

//retrive

console.log(info['firstname'])

//update

info['city'] = "mumbai"
console.log(info)

//add

info['state'] = "maharshatra"
console.log(info)

//delete

delete info['age']
console.log(info)

///----------------------------------------------------------------------


///loop 
//let names=["snehal","chinmay","sayli","kartiki","samiksha"]
//console.log(names)
// //loop on names
// for (let i = 0;i < names.length;i++){
//     console.log(names[i])
//     console.log(i)
// }


///object -- loop

// dot notation does not work inside loop

let names = {
    name: "snehal",
    name2: "kartiki",
    name3: "sayli",
    name4: "vaishali"
}
for (let key in names) {
    console.log(key)
}

for (let key in names) {
    console.log(key, names[key])
}

for (let values in names) {
    console.log(values, names[values])
}


for (let items in names) {
    console.log(items, names[items])
}



/////program --

let students = [
    {
        firstname: "chinmay",
        lastname: "deshpande",
        age:34,
        city: "pune"

    },
    {
        firstname: "kartiki",
        lastname: "gharde",
        age: 28,
        city: "nagpur"

    },
    {
        firstname: "niki",
        lastname: "kamble",
        age: 27,
        city: "mumbai"

    }
]

for(let i = 0;i<students.length;i++){
    console.log(students[i].firstname +" "+students[i].lastname)
}

for(let i = 0;i <students.length;i++){
students[i].language="Hindi"
}
console.log(students)


///program ---

let info1 = {
    firstName:"snehal",
    lastName:"kamble",
    parent:{
        mother:"jyotsna kamble",
        lastName:"kawadu kamble"
    }
}

info1.parent.mother="jyotsna k kamble"
console.log(info1)


console.log(info1.parent.mother)

info1.parent.sister="niki"
console.log(info1)