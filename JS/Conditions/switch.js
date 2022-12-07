const option=document.getElementById("grade")
const submit=document.querySelector('button')
const para=document.querySelector('p')
submit.addEventListener('click',SwitchCondition)

function SwitchCondition(event){
    const choice=option.value
    switch (true) {
        case choice >95 && choice<100:
            para.textContent="A*"
            break;
        case  choice >= 90:
            para.textContent="A+"
            break;
        case choice >= 80:
            para.textContent="A"
            break;
        case choice >= 70:
            para.textContent="B"
            break;
        case choice >=60:
            para.textContent="C"
            break;
        case choice >=50:
            para.textContent="D"
            break;    
        default:
            para.textContent="Sorry, Re-Try again"
            break;
    }
    event.preventDefault()
}