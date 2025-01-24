//* A typeof guard in TypeScript lets you narrow down the type of a variable based on
// its runtime value. In TypeScript, type narrowing allows you to write type-safe code by
// ensuring you only operate on the correct type under certain circumstances. This is
// particularly useful with union types and generic types.

const favHobbies = (hobby: string | string[]): string[] => {
    // If hobby is an array, map over it and return the array
    if (typeof hobby === "object" && Array.isArray(hobby)) {
      return hobby.map((e) => {
        console.log(e); // Log each element
        return e; // Return the element to build the new array
      });
    } else {
      // If hobby is a string, log it to the console and return an empty array
      console.log(hobby);
      return [];
    }
  };
  
  favHobbies("coding");
  favHobbies(["coding", "games"]);
  
