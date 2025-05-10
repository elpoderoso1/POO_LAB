import { User } from "../models/User.ts";
import { UserValidator } from "../validators/UserValidator.ts";
import { INotifier } from "../notifiers/INotifier.ts";

export class UserService {
  constructor(private notifier: INotifier) {}

  register(user: User): void {
    const errors = UserValidator.validate(user);

    if (errors.length > 0) {
      console.log("Errores al registrar usuario:");
      errors.forEach(e => console.log("- " + e));
      return;
    }

    console.log(`✅ Usuario ${user.name} registrado correctamente.`);
    this.notifier.send(user.name);
  }
}
