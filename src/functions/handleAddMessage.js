import { socket } from "../App";

export const handleAddMessage = (value) => {
    let hour = new Date();
    const msg = {
        author: {
            id: value.id,
            nombre: "test",
            apellido: "test",
            edad: "test",
            alias: "test",
            avatar: "test",
        },
        text: value.text,
        day: hour.toLocaleDateString(),
        hour: hour.toLocaleTimeString(),
    };

    socket.emit("newMsg", msg);
    return false;
};
