//callback Function

function SelfIntro(Name,native){
    native("Hosur")
    console.log(`I am ${Name}`)
}
function NativePlace(place){
    console.log (`I am from ${place}`)
}
SelfIntro("Divish",NativePlace)
