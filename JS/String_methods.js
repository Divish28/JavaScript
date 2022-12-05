//string to lower case
const Name=" Divish Kumar "
const change_lower=Name.toLowerCase()
console.log(change_lower)

//string to upper case
const change_upper=Name.toUpperCase()
console.log(change_upper)

//string trim
const change_trim=Name.trim()
console.log(change_trim)
const trim_start=Name.trimStart()
console.log(trim_start)
const trim_end=Name.trimEnd()
console.log(trim_end)

//CharAT
console.log(Name.charAt(6))

//replace
console.log(Name.replace("D","d"))

//length
console.log(Name.length)

//charCodeAT
console.log(Name.charCodeAt(8))

//split
//split will convert string into array
console.log(Name.split("m"))

//slice cut the string
console.log(Name.slice(5))
console.log(Name.slice(3,7))
console.log(Name.slice(-100,7))

//Substring
console.log(Name.substring(1000,3))

//substr
console.log(Name.substr(3,5))