 //methods in array == []


 //push,unshift, pop,shift,at,indexof,index,includes,reverse,concat,join, ------


 let names=["snehal","saru","samiksha","chinmay","himanshu"]

 console.log(names)
 console.log(names[1])

 names.push("nikita") ///add last
 console.log(names)

names.unshift("sayli") // add first
console.log(names)



names.pop()
console.log(names) /// delete last

names.shift()
console.log(names) // delte first


//at,indexof,index,includes,reverse,concat,join,

//at

city=["nagpur","hinganghat","jam","pune","chandrapur"]
q1=city.at(2)
console.log(q1) //strore bacause returning value

q2=city.at(1)
console.log(q2)


//indexof

q3=city.indexOf("nagpur")
console.log(q3)

q4=city.indexOf("pune")
console.log(q4)

q6 =city.indexOf(2) //only pass string else return -1

console.log(q6)




// num=[1,55,88,25]
//  a4 = num.indexOf(55)
//  console.log(a4)



//includes,reverse,concat,join,

//includes()

fruits=['mango','kiwi','banana','chiku','apple','orange']
a1=fruits.includes("mango")
console.log(a1)


a2=fruits.includes("Apple")///return bollean vlaue

console.log(a2)


//reverse

city2 = ["jam","nagpur","pune","kalayn","mumbai"]
a2=city2.reverse()
console.log(a2)


//concat

number=[1,2,5,6,4]
number1=[4,22,8,55,44,11]
num = number.concat(number1)
console.log(num)



///join

info=["snehal",'kawadu',"kamble","9284496572"]
a3 = info.join('#')
console.log(a3)


///index of 

// num=[1,55,88,25]
//  a4 = num.indexOf(55)0
//  console.log(a4)


//  a5=info.join("==")
//  console.log(a5)



//  let name="snehal"
//  a = name.split()
//  console.log(a)



city11="snehal"
let b = city11.split('');
let c = city11.reverse();
let d = city11.join()
console.log(c)

