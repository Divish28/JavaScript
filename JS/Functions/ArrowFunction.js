//normal function
const array=[2,3,4]
const double=array.map(doubleArray)
function doubleArray(item){
    return item*2
}
console.log(double)


//Using arrow function. 
//since it is one line code return and curly brackets are removed.
const arrowArray=[1,2,3]
const arrowDouble=arrowArray.map((items)=>items*2);
console.log(arrowDouble)