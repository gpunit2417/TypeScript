var arr1 = ["Punit", "Sakshi", "Atul", "Monika"];
// const newArray = arr1.push("Raman")
// console.log(newArray);
// console.log(arr1);
// const removeArray = arr1.pop();
// console.log(removeArray);
// console.log(arr1);
// const anotherArray = arr1.unshift("Raman")
// console.log(anotherArray);
// console.log(arr1);
// const removeFirst = arr1.shift();
// console.log(removeFirst);
// console.log(arr1);
//Access elements using loops
//1. for loop
// for(let i=0; i<arr1.length; i++){
//     console.log(i + arr1[i]);
// }
//2. for...of loop
// for(const name of arr1){
//     console.log(name);
// }
//3. for...in loop
// for(const name in arr1){
//     console.log(arr1[name]);
// }
//4. forEach loop
arr1.forEach(function (element) {
    console.log(element);
});
