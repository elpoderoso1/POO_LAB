import { User } from "../Models/User";
import { UserValidator } from "./UserValidation";

export class UserService {
    addUser(user: User): void {
        const errors = UserValidator.validate(user);

        if (errors.length > 0) {
            console.error("Errores de validacion", errors.join(" | "));
            return;
        }

        console.log(`Usuario agregado correctamente: ${user.name}\nEdad: ${user.age}\nEmail: ${user.email}`);
        
    }
}