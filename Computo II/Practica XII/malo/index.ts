// index.ts
class User {
    name: string;
    email: string;
    age: number;
    registrationDate: Date;
  
    constructor(name: string, email: string, age: number) {
      this.name = name;
      this.email = email;
      this.age = age;
      this.registrationDate = new Date();
    }
  }
  
  class UserManager {
    register(user: User, notificationType: string) {
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
  
      if (errors.length > 0) {
        console.log("Errores al registrar usuario:");
        errors.forEach(e => console.log("- " + e));
        return;
      }
  
      console.log(`Usuario ${user.name} registrado correctamente.`);
  
      if (notificationType === "email") {
        console.log(`Enviando notificación por email a ${user.email}...`);
        console.log(`📧 Bienvenido ${user.name}, gracias por registrarte.`);
      } else if (notificationType === "sms") {
        console.log(`Enviando notificación por SMS al número (simulado)...`);
        console.log(`📱 Bienvenido ${user.name}, gracias por registrarte.`);
      } else {
        console.log(`Tipo de notificación no soportado.`);
      }
    }
  }
  // Prueba
  const userManager = new UserManager();
  const user1 = new User("Ana", "ana@example.com", 25);
  userManager.register(user1, "sms");
  console.log("\n------------------------\n");
  const user2 = new User("", "no-email", -1);
  userManager.register(user2, "sms");
  





  
  /*Características de este código:
  
La clase UserManager hace demasiadas cosas:

Valida los datos del usuario.

Decide el canal de notificación.

Envía la notificación (simulada).

Maneja los errores.

Todo está mezclado en una sola clase, hardcoded, difícil de extender o mantener.
   */