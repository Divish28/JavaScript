const change=document.querySelector('p')
change.addEventListener('click',nameChange)
document.cookie="Name= Divi";


function nameChange(){
    const name= prompt("Change the user name");
    change.textContent=`User Name: ${name}`;
}