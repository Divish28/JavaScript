//Declearing a JavaScript Methods.
var Details={Name:'Divish',
    age:22,
    Welcome:function(){
    return(`Welcome ${this.Name}, Your age is ${this.age}`)      //this keyword is for accessing key inside the object
}
}
Details.stream="cse"
Details.selfIntro=function(){
    console.log(`I am ${this.name} from the stream of ${this.stream}`)
}
Details.selfIntro()