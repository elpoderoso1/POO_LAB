import { NotifierFactory, Channel } from "./factories/NotifierFactory";
import { ValidatorFactory } from "./factories/ValidatorFactory";
import { NotificationService } from "./services/NotificationService";

const channels: Channel[] = ["email", "sms", "push"];

channels.forEach(channel => {
    console.log("--------------------------------------------------------------");
    console.log(`Canal ${channel.toUpperCase()}`);
    
    const notifier = NotifierFactory.create(channel);
    const validator = ValidatorFactory.create(channel);
    const service = new NotificationService(notifier, validator);

    const msg = channel == "email" ? "contacto@empresarandom.com.es.ue.sv.correo.de.gobierno.promedio" : "Hola, te voy a cobrar los impuesto x2";
    service.notify(msg);
});