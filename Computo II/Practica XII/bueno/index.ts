import { User } from "./models/User.ts";
import { EmailNotifier } from "./notifiers/EmailNotifier.ts";
import { SMSNotifier } from "./notifiers/SMSNotifier.ts";
import { UserService } from "./services/UserService.ts";

// Con notificador por email
const emailNotifier = new EmailNotifier();
const userServiceEmail = new UserService(emailNotifier);

const user1 = new User("Ana", "ana@example.com", 25);
userServiceEmail.register(user1);

console.log("\n------------------------\n");

// Con notificador por SMS
const smsNotifier = new SMSNotifier();
const userServiceSMS = new UserService(smsNotifier);

const user2 = new User("", "no-email", -1);
userServiceSMS.register(user2);


/*
=>
==>
!=
=
==
===

*/