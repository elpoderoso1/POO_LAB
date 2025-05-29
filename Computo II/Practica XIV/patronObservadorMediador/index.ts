import { ChatRoom } from "./mediator/ChatRoom.ts";
import { User } from "./observer/User.ts";

const chatRoom = new ChatRoom();

const ana = new User("Ana");
const bob = new User("Bob");
const carla = new User("Carla");

chatRoom.register(ana);
chatRoom.register(bob);
chatRoom.register(carla);

// Simulación de mensajes
chatRoom.sendMessage("Ana", "¡Hola a todos!");
chatRoom.sendMessage("Bob", "¡Hola Ana! ¿Cómo estás?");
chatRoom.sendMessage("Carla", "¿Listos para la reunión?");

/*
¿Qué se está aplicando?
Patrón Observer:
ChatRoom notifica a cada usuario cuando llega un mensaje.

Los usuarios actúan como observadores.

Patrón Mediador:
ChatRoom es el mediador que centraliza la comunicación.

Los usuarios no se envían mensajes directamente entre ellos.
*/