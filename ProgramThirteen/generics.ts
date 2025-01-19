// function logAndReturn<T>(value: T): T {
//     return value
// }

// const numResult = logAndReturn<number>(23)
// console.log(numResult);

// const boolResult = logAndReturn<boolean>(true)
// console.log(boolResult);

// const stringResult = logAndReturn<string>("23")
// console.log(stringResult);


//Practice Question

function add<T>(a:T,b:T):T ;
function add(a:any,b:any):any {
     return a+b;
}

const result1 = add<number>(5,10);
const result2 = add<string>("Hello ","World!");
console.log(result1);
console.log(result2);

