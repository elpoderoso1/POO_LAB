import { User } from "../models/User.ts";

export class UserValidator {
  static validate(user: User): string[] {
    const errors: string[] = [];

    if (!user.name.trim()) {
      errors.push("El nombre no puede estar vacío.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
      errors.push("El email no es válido.");
    }

    if (user.age <= 0) {
      errors.push("La edad debe ser positiva.");
    }

    if (user.registrationDate > new Date()) {
      errors.push("La fecha de registro no puede ser futura.");
    }

    return errors;
  }
}
