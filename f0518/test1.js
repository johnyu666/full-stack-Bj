function sum(a,b){
    return a+b;
}

let sum1=new Function("a","b","return a+b")

let sum2=sum1;
let sum3=sum;
let sum4=function(a,b){ return a+b;}
let sum5=(a,b)=>a+b;

function dbl(x){
    return 2*x;
}

//返回一个闭包的函数，也称为偏函数
function processorFactory(n){
    return function(x){
        return n*x;
    }
}

//高阶函数
function sumPro(a,b,processor){
   return processor(a+b)
}


let r1=sumPro(1,2,dbl)

let r2=sumPro(1,2,processorFactory(4))
console.log(r2)

//函数调用

sum(1,2)
sum.call(null,1,2);
r2=sum.apply(null,[1,2])
console.log(r2)


//this：
function fn(){
    console.log(this)
}
let fn1=fn.bind()
fn1()

// fn.call(new Date())
// let obj={name:'john',say:fn}
// //fn()//global

// obj.say()
