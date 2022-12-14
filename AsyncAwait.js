//AsyncAwait
const prom=new Promise(function(resolve,reject){
    console.log("Hello")
    setTimeout(function(){
        let a=2,b=3
        let c=a+b
        resolve(`sum is ${c}`)
    },3000)
})

async function Async(){

    console.log("World")
    let wait=await prom
    console.log(wait)
}
Async()