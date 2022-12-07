const generatebtn=document.querySelector('button')
const Generatednumber=document.querySelector('#luckyNumber')
generatebtn.addEventListener('click',LuckyNumber)


function LuckyNumber(){
    const number=[]
    for(i=100;i<=999;i++){
       number.push(i)
    }
const lucky=number[Math.floor(Math.random()*number.length)+2]
console.log(lucky)
Generatednumber.textContent=`Your Lucky number is ${lucky}`
}