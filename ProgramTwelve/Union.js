//union in TS is implemented using pipe(|) operation. It is used to combine different values
// const inputValue = (userValue: string | number | boolean) => {
//     console.log(userValue);
// }
// inputValue("Punit")
// inputValue(2417)
// inputValue(true)
// Practice Question
var inputValue = function (userValue) {
    if (typeof userValue === "string") {
        console.log(userValue.toUpperCase());
    }
    else if (typeof userValue === "number") {
        console.log(userValue * 2);
    }
    else if (typeof userValue === "boolean") {
        console.log(userValue);
    }
};
inputValue("Punit");
inputValue(2417);
inputValue(true);
