const a=20

try {
    if(a>=40){
        let c=5
        let d=a+c
        console.log(d)
        console.log("sucessful")
    }
    else{
        throw new Error("the number is low")
    }
    console.log("Hi,")
    
} catch (e) {

    console.log("error is defined")
    console.log("Error Message "+e.message)
}
finally{
    console.log("this is Finally")
}