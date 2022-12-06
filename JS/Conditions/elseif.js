//else if

const option=document.getElementById("grade")
const submit=document.querySelector('button')
const para=document.querySelector('p')
submit.addEventListener('click',findGrade)

function findGrade(){
const choice= option.value
if (choice >= 90) {
   // console.log("A+")
   para.textContent="A+"
}
else if(choice>=80){
    //console.log("A")
    para.textContent="A"
}
else if(choice>=70){
    //console.log("B")
   para.textContent="B"
}
else if(choice>=60){
   // console.log("C")
    para.textContent="C"
}
else if(choice>=50){
    //console.log("D")
    para.textContent="D"
}
else{
    //console.log="Sorry you have failed the test"
    para.textContent="Sorry you have failed the test"
}
}