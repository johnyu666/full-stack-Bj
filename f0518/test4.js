function Person(name){
    this.name=name
    this.say=function(){
        console.log(this.name)
    }
}

function Student(name,age){
    Person.call(this,name)
    this.age=age;
    this.sayAge=function(){
        console.log(this.age)
    }
}
Student.prototype=new Person("")


let p=new Person("john")
let s=new Student("tom",23)
s.say()
s.sayAge()

console.log(s instanceof Person)