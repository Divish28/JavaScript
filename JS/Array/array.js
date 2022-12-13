//creating array
var array=["d","i","v","i","s","h","['1','2','3']"]
console.log(array)

//length of the array
console.log(array.length)

//indexof
console.log(array.indexOf("v"))

//Push in array
console.log(array.push("k"))
console.log(array)

//Unshift - add element at the front of the array
console.log(array.unshift("12"))

//pop in array
console.log(array.pop("h"))
console.log(array)

//shift - delete element in the front
console.log(array.shift())
console.log(array)

//print the value using array index
console.log(array[2])
console.log(array[6][1])

//change value in array 
console.log(array[3]="n")
console.log(array)

//slice in array
console.log(array.slice(3))

//splice in array
//In this splice it will take 2 as a index and 3 as a length.
console.log(array.splice(2,3))
console.log(array)

//filter
function remove(){
    return array.length=10
}
console.log(array.filter(remove))
console.log(array)

//map
function maping(){
    return array.values+3
}
console.log(array.map(maping))

//diplaay one by one
for(const order of array){
    console.log(order)
}
console.log(array)

// insert element in center of the array
var insert=[1,2,4,5]
insert.splice(2,0,3)
console.log(insert)

//Sort the array in asending order
console.log(array.sort())

array1=['divish','arun']
console.log(array1.concat(array))