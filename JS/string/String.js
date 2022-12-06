//String Creation
const myName="Divish"
console.log(myName)

//Single and double quotes string
//single quote string

const single_quote='This string is decleared inside single quote.'
console.log(single_quote)

//double quotes

const double_quotes="This string is decleared inside double quotes."
console.log(double_quotes)

//concatenate string

const concate=`hello ${myName}`
console.log(concate)

//concatenate string using +

console.log("This is concatenated using + by "+myName)

//converting number to string
const number_type=1234
const String_type=number_type.toString()
console.log(String_type+" is String not a number")

//adding expression in string
const mark=195
const total=300
const statement=`The has scored ${(mark/total)*100} percentage`
console.log(statement)

// Multiline string
const multiline="This is multi line string\nBecause this statement is printed in the next line"
console.log(multiline)

