class Person{
    constructor(name){
        this.name=name;
    }
    sayName(){
        console.log(this.name)
    }
}

class Student extends Person{
    constructor(name,age){
        super(name)
        this.age=age
    }
    gender=true
    sayAge(){
        console.log(this.age)
    }
}