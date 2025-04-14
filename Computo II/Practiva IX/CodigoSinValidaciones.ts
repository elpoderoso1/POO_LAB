class User001 {
    constructor(
        public name: string,
        public age: number,
        public email: string
    ) {}
}

class UserService001 {
    addUser(user: User001): void {
        console.log(`Usuario agregado: ${user.name}\nEdad: ${user.age}\nCorreo: ${user.email}`);
    }
}

const userService = new UserService001();
const user = new User001("", -5, "no-email")
userService.addUser(user);