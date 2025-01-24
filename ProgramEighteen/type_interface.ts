// *************************
//* INTERFACE VS TYPE
// *************************

// 1:
//? Use custom types when you need unions, intersections, or mapped types.
//? Use interfaces when defining object shapes or classes that adhere to a contract.

// 2:
//? Interfaces can extend other interfaces to inherit their members.
//? Custom types can use unions and intersections for more complex type compositions.

// same Interface name treated as one

// type Stud = {
//   name: string;
//   age: number;
// };

// type StudAddr = {
//   city: string;
//   state: string;
// };

// type Data = Stud | StudAddr;

// const BioData: Data = {
//   name: "vinod",
//   city: "Pune",
//   state: "MH",
// };
// console.log(BioData);

// SUBSCRIBE TO THAPA TECHNICAL

interface Stud {
  name: string;
  age: number;
}

interface StudAddr {
  city: string;
  state: string;
}

interface Data extends Stud, StudAddr {}

class BioData implements Data {
  constructor(
    public name: string,
    public age: number,
    public city: string,
    public state: string
  ) {}
}

const std1 = new BioData("vinod", 29, "pune", "MH");

console.log(BioData);
