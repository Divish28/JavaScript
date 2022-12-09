var result=document.querySelector('#result')
var calculatebutton=document.querySelector('#calculate')
calculatebutton.addEventListener('click',calculator)
function calculator(event){
    let number1=parseInt(prompt("enter number 1"))
    let number2=parseInt(prompt("enter number 2"))
    let symbol=prompt("enter the operation to be done \n ' + ' , ' - '  , ' * ' , ' / ' ")
    let calcu
    if(symbol=="+"){
        calcu=number1+number2
        result.textContent=`Addition of ${number1} and ${number2} is ${calcu}`
    }
    else if(symbol=="-"){
        calcu=number1-number2
        result.textContent=`Subraction of ${number1} and ${number2} is ${calcu}`
        //return (a-b)
    }
    else if(symbol=="*"){
        calcu=number1*number2
        result.textContent=`Multiplication of ${number1} and ${number2} is ${calcu}`
        //return (a*b)
    }
    else if(symbol=="/"){
        calcu=number1/number2
        result.textContent=`Division of ${number1} and ${number2} is ${calcu}`
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