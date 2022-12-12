//Constructor
function Introduce(name,age){
    this.name=name,this.age=age,this.selfIntro=function(){
        return("I,am "+this.name+". My Age is "+this.age)
    }
}

const object1=new Introduce("Divish",22)          // Initializing the first Constructor.
console.log(obj1.selfIntro())

const object2=new Introduce("Kavi",21)            // Initializing the second Constructor.
console.log(obj2.selfIntro())
