/// Array 
let arr = [10,2,5,7,8,9,4,10,5,22,6,31,7,8,59,63,47,8,9,96,3,1]
for(let cont = 0; cont < arr.length; cont++){
    console.log(arr[cont])
}
console.log(typeof arr)

// forEach
arr.forEach(a => console.log(a))

// Map
let arrMap = arr.map(a => a + ' anos')
console.log(arrMap)

// Filter
let arrFilter = arr.filter(a => a >= 18 )
console.log(arrFilter)

// Reduce
let arrReduce = arr.reduce ((ar, curr)=>{
    return ar + curr
},0)
console.log(arrReduce)