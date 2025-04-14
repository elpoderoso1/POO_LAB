import { User } from "../Models/User";

export class UserValidator { 
    static isValidName(name: string): boolean { 
        return name.trim().length > 0; 
    } 

    static isValidAge(age: number): boolean { 
        return age > 0 && Number.isInteger(age); 
    } 

    static isValidEmail(email: string): boolean { 
        const emailRegex = /^[^\s@]+@ [^\s@]+\.[^\s@]+$/; 
        return emailRegex.test(email); 
    } 

    static validate(user: User): string[] { 
        const errors: string[] = []; 

        if (!this.isValidName(user.name)) { 
            errors.push("El nombre es inválido."); 
        } 

        if (!this.isValidAge (user.age)) { 
            errors.push("La edad debe ser un número positivo."); 
        } 

        if (!this.isValidEmail(user.email)) { 
            errors.push("El email no es válido."); 
        } 

        return errors; 
    }
}