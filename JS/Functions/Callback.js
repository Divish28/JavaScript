//callback Function

function SelfIntro(Name,native){
    console.log(`I am ${Name}`)
    native("Hosur")
}
function NativePlace(place){
    console.log (`I am from ${place}`)
}
SelfIntro("Divish",NativePlace)
