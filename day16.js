//program 1

/////program --

let info = [
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

    },
    {
        firstname: "sayli",
        lastname: "jogi",
        age: 22,
        city: "nagpur"
    }
]


// printing firstName and lastName


info.forEach(function(el,index,arry){
    console.log(el.firstname+ " "+ el .lastname)
})

/// printing name of people above 20

info.forEach(function(el){
    if (el.age > 25 ){
        console.log(el.firstname + el .lastname)

    }
})




///add country to object


info.forEach(function(el){
    el.country = "India"
})
console.log(info)

////add skilss in form of array


info.forEach(function(el){
    el.skills=["sql"]
})

console.log(info)

///add skills in same arry 

info.forEach(function(el){
    el.skills.push("javascript")
})

console.log(info)



info.forEach(function(el){
    delete el.age
})
console.log(info)







