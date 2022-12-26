import { socket } from "../App";

export const handleSockets = (data, setter) => {
    socket.on(data, (set) => {
        setter(set);
    });
};

export const deleteInfoSockets = (status) => {
    status === "message"
        ? socket.emit("deleteMessages", "delete")
        : status === "products"
        ? socket.emit("deleteProducts", "delete")
        : console.log("nothing to delete");
};
