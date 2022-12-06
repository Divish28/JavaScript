//if..else condition

let mark= 39
if (mark>="40")
{
    console.log("you have passed the exam")
}
else{
    console.log("You have gave a good try")
}

//else if

/*const option=document.querySelector('input')
const submit=document.querySelector('button')
const para=document.querySelector('p')
submit.addEventListener('click',findGrade)

function findGrade(){*/
const choice=40
if (choice >= 90) {
    console.log("A+")
   // para.textContent="A+"
}
else if(choice>=80){
    console.log("A")
    //para.textContent="A"
}
else if(choice>=70){
    console.log("B")
   // para.textContent="B"
}
else if(choice>=60){
    console.log("C")
   // para.textContent="C"
}
else if(choice>=50){
    console.log("D")
  //  para.textContent="D"
}
else{
    console.log="Sorry you have failed the test"
  //  para.textContent="Sorry you have failed the test"
}
