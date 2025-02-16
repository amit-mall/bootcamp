var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
/** usase example */
const obj1 = {
    id: 2351,
    name: "amit",
    email: "amit@test.com",
    age: 17
};
const obj2 = {
    id: 1245,
    name: "Harish",
    email: "harish@test.com",
    age: 27
};
/** QUestion 2 */
class UserManager {
    constructor() {
        this.users = [];
    }
    addUser(user) {
        this.users.push(user);
    }
    removeUser(id) {
        this.users = this.users.filter(user => user.id !== id);
    }
    getUser(id) {
        return this.users.find(user => user.id === id);
    }
    getAllUsers() {
        return this.users;
    }
}
/** usase example */
const userManager = new UserManager();
console.log(userManager.addUser(obj1));
console.log(userManager.addUser(obj2));
console.log(userManager.getUser(2351));
console.log(userManager.getUser(1245));
console.log(userManager.getUser(3421));
console.log(userManager.removeUser(2351));
console.log(userManager.getAllUsers());
/** question 3 */
const getUser = (name = "Guest") => {
    return `Welcome ${name}`;
};
console.log(getUser());
/** Question 4 */
function printUserDetails(user) {
    const { name, id, email, age } = user, extraInfo = __rest(user, ["name", "id", "email", "age"]);
    let showExtraInfo = Object.keys(extraInfo).length ? extraInfo : {};
    console.log(`Name: ${name}, Id: ${id}, Email: ${email}, Age: ${age}, Address: ${JSON.stringify(showExtraInfo)}`);
}
printUserDetails(Object.assign(Object.assign({}, obj1), { address: "Noida" }));
