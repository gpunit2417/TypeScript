//In TS, tuples are the data structure that allows you to store a fixed-size collection of data of different types. They are similar to arrays, but with a key difference: the type of elements in a tuple are fixed and declared at the time of creation and arrays can hold elements of same type, and their sizes can vary.


type PersonInfo = readonly [number, string, boolean]

const display = (person: PersonInfo) => {
    const [age, name, hasDrivingLicense] = person
    console.log(`Your age is ${age}, name is ${name} and your hasDrivingLicense attribute is ${hasDrivingLicense? 'true': 'false'}`);
    
}

const personInfo1: PersonInfo = [22, "Punit", true]

const personInfo2: PersonInfo = [21, "Monika", false]

display(personInfo1)
display(personInfo2)