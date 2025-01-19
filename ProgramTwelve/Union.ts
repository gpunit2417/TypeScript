//union in TS is implemented using pipe(|) operation. It is used to combine different values

const inputValue = (userValue: string | number | boolean) => {
    console.log(userValue);
    
}

inputValue("Punit")
inputValue(2417)
inputValue(true)