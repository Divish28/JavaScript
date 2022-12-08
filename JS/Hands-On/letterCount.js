const paragraph=document.querySelector('textarea') //paragraph
const Selected=document.querySelector('#searchText') //text to be searched
const counted=document.querySelector('#count') //button
const input_text=document.querySelector('#Counted-words') //statement to be printed
counted.addEventListener('click',countLetters)
function countLetters(event){
    const para=paragraph.value
    const lowerPara=para.toLowerCase()
    const text=Selected.value
    const lowerText=text.toLowerCase()
    const numbers=lowerPara.split(lowerText).length -1
    input_text.textContent=`"${text}" is repeated ${numbers} times`
    event.preventDefault()
}   