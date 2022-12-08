var number1=document.querySelector('#fnum1')
var number2=document.querySelector('#fnum2')
var result=document.querySelector('#result')
var calculatebutton=document.querySelector('button')
calculatebutton.addEventListener('click',calculator)
function calculator(event){
    const add=number1+number2
    result.textContent=(add)
    //const symbol=prompt("enter the operation to be done \n ' + ' , ' - '  , ' * ' , ' / ' ")

    /*//result.textContent="entered symbol is "+symbol
    if(symbol=="+"){
        let add=number1.value+number2.value
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
        result.textContent="enter the correct operation"
        //return ("Enter the correct operation")
    }*/
    event.preventDefault();
}