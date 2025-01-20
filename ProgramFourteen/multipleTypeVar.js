// function add<T>(a:T,b:T):T ;
// function add(a:any,b:any):any {
//      return a+b;
// }
// const result1 = add<number>(5,10);
// const result2 = add<string>("Hello ","World!");
// console.log(result1);
// console.log(result2);
// The above function overloading can be written in a single line using generics
// function add<T>(a:T, b:T): void{
//     console.log(typeof a);
//     console.log(typeof b);
// }
// const one = add(5, 6)
// function add<T, U>(a:T, b:U): void{
//     console.log(typeof a);
//     console.log(typeof b);
// }
// const other = add(5, "Punit")
function add1(a, b, c) {
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
}
var result = add1("Punit", "goyal", true);
var resultone = add1("Punit", "goyal", true);
