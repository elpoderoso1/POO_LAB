import { User } from "./Models/User";
import { UserService } from "./Service/UserService";

const userService = new UserService();

const user1 = new User("", -5, "no-email");
userService.addUser(user1);
console.log("---------------------------------------------------");

const user2 = new User("Ana Torres", 29, "ana.torres@example.com");
userService.addUser(user2);

