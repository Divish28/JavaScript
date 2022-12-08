var number1=document.getElementById('#fnum1')
var number2=document.getElementById('#fnum2')
var result=document.querySelector('#result')
var calculatebutton=document.querySelector('button')
calculatebutton.addEventListener('click',calculator)
function calculator(event){
    const add=number1+number2
    result.textContent=(add)
    const symbol=prompt("enter the operation to be done \n ' + ' , ' - '  , ' * ' , ' / ' ")

    //result.textContent="entered symbol is "+symbol
    if(symbol=="+"){
        let add=number1+number2
        result.textContent=`Addition of ${number1} and ${number2} is ${add}`
    }
    else if(symbol=="-"){
        result.textContent=number1-number2
        //return (a-b)
    }
    else if(symbol=="*"){
        result.textContent=number1*number2
        //return (a*b)
    }
    else if(symbol=="/"){
        result.textContent=number1/number2
        //return (a/b)
    }
    else{
        result.textContent="Enter the correct operation"
        //return ("Enter the correct operation")
    }
    event.preventDefault();
}
/*var number1=12
var number2=13
var symbol="+"
function calculate(){
    if(symbol == ""){
        return(number1+number2)
    }
    else{
        return("enter correct symbol")
    }
}
console.log(calculate())*/