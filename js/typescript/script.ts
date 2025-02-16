/**Question one */
interface User {
    id: number;
    name: string;
    email: string;
    age?: number;
}

/** usase example */
const obj1:User = {
    id: 2351,
    name: "amit",
    email: "amit@test.com",
    age: 17
}

const obj2:User = {
    id: 1245,
    name: "Harish",
    email: "harish@test.com",
    age: 27
}

/** QUestion 2 */

class UserManager {
    private users: User[] = [];

    addUser(user: User): void {
        this.users.push(user);
    }

    removeUser(id: number): void {
        this.users = this.users.filter(user => user.id !== id);
    }

    getUser(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }

    getAllUsers(): User[] {
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

const getUser = (name: string = "Guest"):string=>{
    return `Welcome ${name}`
}
console.log(getUser());

/** Question 4 */

 function printUserDetails(user: User & Record<string, any>): void {
    const {name,id,email,age,...extraInfo} = user;
    let showExtraInfo = Object.keys(extraInfo).length ? extraInfo : {};
    console.log(`Name: ${name}, Id: ${id}, Email: ${email}, Age: ${age}, Address: ${JSON.stringify(showExtraInfo)}`)
 }

 printUserDetails({...obj1, address:"Noida"})