function fn(){
    console.log(this)
}
let fn1=fn.bind("abc")
let fn2=()=>console.log(this)
fn1()
let obj={name:"john",say:fn1}
obj.say()



