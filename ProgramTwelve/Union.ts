//union in TS is implemented using pipe(|) operation. It is used to combine different values

// const inputValue = (userValue: string | number | boolean) => {
//     console.log(userValue);
    
// }

// inputValue("Punit")
// inputValue(2417)
// inputValue(true)

// Practice Question

// const inputValue = (userValue: string | number | boolean) => {
//     if(typeof userValue === "string"){
//         console.log(userValue.toUpperCase());        
//     }
//     else if(typeof userValue === "number"){
//         console.log(userValue*2);
//     }
//     else if(typeof userValue === "boolean"){
//         console.log(userValue);
//     }
// }

// inputValue("Punit")
// inputValue(2417)
// inputValue(true)



// const inputValue = (userValue: string | number | boolean) => {
//     if(typeof userValue === "string"){
//         console.log(userValue[0].toUpperCase() + userValue.slice(1));        
//     }
//     else if(typeof userValue === "number"){
//         console.log("$" + userValue.toFixed(2));
//     }
//     else if(typeof userValue === "boolean"){
//         console.log(userValue === true ? "Yes" : "No");
//     }
// }

// inputValue("punit")
// inputValue(2417)
// inputValue(true)


//Union using objects
// In union, we have to define every property of atleast one type aliased function and can define one or more property of other type aliased function.


// type person = {
//     name: string, 
//     age: number
// }

// type Employee = {
//     id: number,
//     dept: string
// }

// type EmployeeDetails = person | Employee

// // both are acceptable in UNION
// const employee: EmployeeDetails = {
//     // name: "Punit",
//     age: 22,
//     id: 11212505,
//     dept: "CSE"
// }

// const employee1: EmployeeDetails = {
//     name: "Punit",
//     age: 22,
//     id: 11212505,
//     dept: "CSE"
// }


//Intersection in TS
//intersection using objects

// type person = {
//     name: string, 
//     age: number
// }

// type Employee = {
//     id: number,
//     dept: string
// }

// type EmployeeDetails = person & Employee

//not acceptable in intersection as not all properties are defined
// const employee: EmployeeDetails = {
//     // name: "Punit",
//     age: 22,
//     id: 11212505,
//     dept: "CSE"
// }


//acceptable in intersection as all properties are defined
// const employee1: EmployeeDetails = {
//     name: "Punit",
//     age: 22,
//     id: 11212505,
//     dept: "CSE"
// }


//Practice question 

// type User = {
//     name: string,
//     age: number
// }

// type MyLocation = {
//     city: string,
//     country: string
// }

// const user: User = {name: "Punit", age: 22}
// const myLocation: MyLocation = {city: "Hisar", country: "India"}

// const completeDetails = (usr: User, loc: MyLocation) => {
//     return {...user, ...myLocation}
// }

// const myCompleteDetail: User & MyLocation = completeDetails(user, myLocation)
// console.log(myCompleteDetail);


type User = {
    name: string,
    id: number,
    email: string
}

type Account = {
    accId: number,
    accountType: string,
    balance: number
}

const userDetail: User = {name: "Punit Goyal", id: 123, email: "punit@123gmail.com"}
const accountDetail: Account = {accId: 12, accountType: 'saving', balance: 25000}


const completeAccDetails = (userDetail:User, accountDetail: Account) => {
    return {...userDetail, ...accountDetail}
}
const completeUserAccountDetails: User & Account = completeAccDetails(userDetail, accountDetail)
console.log(completeUserAccountDetails);

