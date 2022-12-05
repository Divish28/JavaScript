let randomNumber=Math.floor(Math.random*1000)+1
const number=document.querySelector('input')

function guess()
{
    if (number==randomNumber){
        console.log("congrats you have gussed right")
    }
    if (number >randomNumber) {
        console.log("you have gussed is too high")
    } else {
        console.log("you have gessed is too low")   
    }
}
