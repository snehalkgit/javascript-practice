let firstname = "snehal"
console.log(firstname)
console.log(typeof(firstname))



let a =50
console.log(a)
console.log(typeof(a))

////"string" ////

let info=["snehal","kamble",55,"nagpur"]
console.log(info)
console.log(info[2])


info[1] = "nikita"
console.log(info )

info.city = "hinganghat"
console.log(info)


let city = "mumbai"
console.log(city[2])
 //m u m b a i
 //0 1 2 3 4 5

 for(let i = 0 ; i < city.length;i++){
    console.log(i)
    console.log(city[i])
 }

///while

 i = 0
 while(i<city.length){
    console.log(city[i])
    i = i + 1
 }



let name = "snehal"
//count  of vowels

let count = 0
//count vowles
for(let i = 0; i<name.length; i ++){

    if(name[i] =="a"||name[i]=="e" || name[i]=="i"|| name[i]=="o"|| name[i]=="u" ){
count = count + 1
    }}
console.log(count)

 let city2 = "hydrabad"
 let rev = " "
 for(let i = 0;i <city2.length;i++){
    rev = city2[i] + rev
 }
console.log(rev)



let city3 = 'nagpur'
for(let i = city.length-1;i >=0;i--){
    console.log(i)
    console.log(city3[i])

}
