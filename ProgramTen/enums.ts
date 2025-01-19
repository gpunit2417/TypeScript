// enums are commonly used when you want to represent a set of related values and choose one value from multiple options. Enums provide a convenient way to define a set of named values and associate them with specific meanings.

//in TS, when enums constants are not explicitly assigned numeric values, they are automatically assigned incremental numeric values starting from 0. The first numeric values for first enum constant is 0, and subsequent enum constants are incremented by 1.

enum Roles {
    user = "user",
    admin = "admin"
}
type LoginDetails = {
    name?: string,
    email: string,
    password: string,
    role: Roles
}

const userOne: LoginDetails = {
    name: "Punit",
    email: 'punit10@gmail.com',
    password: '123',
    role: Roles.admin
}

const userTwo: LoginDetails = {
    email: 'deep@123gmail.com',
    password: '234',
    role: Roles.user
}


const isAdmin = (user: LoginDetails): string => {
    const {email, role} = user;
    return role === Roles.admin ? `Welcome ${email}, you are now an ${role}` : `Welcome ${email}, you are an authorized ${role}`
}

console.log(isAdmin(userOne));
console.log(isAdmin(userTwo));
