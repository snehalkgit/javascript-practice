//array methods



info = ["snehal","kamble",1254698546,24]
console.log(info[0])

//update

info[0] = "nikita"
console.log(info)

//add

info.push("pune")
console.log(info)

info.unshift("language")
console.log(info)

//delete

info.pop()
info.unshift()
console.log(info)


info2={
      firstname:"snehal",
      lastname:"kamble",
      city:"mumbai",
      age:25
}
//retirve
info2.firstname
console.log(info2)


//update
info2.firstname="nikita"
console.log(info2)

//add

info2.city="pune"
console.log(info2)

//delete

delete info2.firstname
console.log(info2)



//reverse

name1=["snehal","sayli","chinmay","sarika"]
let a1 = name1.reverse()
console.log(a1)
console.log(name1)


///sort() /// sorting alphabetical in order


name1.sort()
console.log(name1)


///join()

fruits=["mango","banana","kiwi",515466400]

let a2 = fruits.join("-")
console.log(a2)


///concat  -- join two diff array


num=[11,54,6,66,85,78]
num2=[55,85,14,22,34,58]
let num3= num.concat(num2)
console.log(num3)


///slice (startIndex,endIndex(not included))


city=["delhi","mumbai","pune","hinganghat","goa"]
let q3=city.splice(1,3)

console.log(q3)
city.splice("pune","hinganghat")
console.log(city)
city.splice(1,3)
console.log(city)


///flat() -- combine all

num4=[[14,55],[22,66,77],[47,63]]
console.log(num4[0,1])
console.log(num4[2,2])

let q5 = num4.flat()
console.log(q5)










