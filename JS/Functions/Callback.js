//callback Function

function SelfIntro(Name,native){
    console.log(`I am ${Name}, and i am from ${native}`)
}
function NativePlace(place){
    return (place)
}
var display=new SelfIntro("Divish",NativePlace("hosur"))
console.log(display)