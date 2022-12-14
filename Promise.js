const prom= new Promise(function(resolve,reject){
    let num=3
    if(num==2){
        resolve("Promise is resolved")
    }
    else{
        reject("Promise is rejected")
    }
})

prom.then((Out)=>console.log(Out))
.catch((Out)=>console.log(Out))