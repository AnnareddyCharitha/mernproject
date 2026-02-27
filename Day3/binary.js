function add(a,b){
    console.log(a+b)
}
add(2,4)
const sub=(a,b)=>{console.log(a-b)}
const mul=(a,b)=>{console.log(a*b)}
const calc=(a,b,func)=>{
    func(a,b)
}
calc(4,3,mul)
calc(5,8,add)