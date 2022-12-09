var num=5
let x=num-1
if(num<0){
    return undefined
}
if(num===0){
    return 1
}
while(x>1){
    num *=x
    x--
}
console.log(num)