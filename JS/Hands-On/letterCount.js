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

/*let para="But good morning! Good morning to ye and thou! Id say to all my patients, because I was the worse of the hypocrites, of all the hypocrites, the cruel and phony hypocrites, I was the very worst."
//console.log(para.split('m').length -1)*//*let para="But good morning! Good morning to ye and thou! Id say to all my patients, because I was the worse of the hypocrites, of all the hypocrites, the cruel and phony hypocrites, I was the very worst."
//console.log(para.split('m').length -1)*/