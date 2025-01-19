function logAndReturn<T>(value: T): T {
    return value
}

const numResult = logAndReturn<number>(23)
console.log(numResult);

const boolResult = logAndReturn<boolean>(true)
console.log(boolResult);

const stringResult = logAndReturn<string>("23")
console.log(stringResult);
