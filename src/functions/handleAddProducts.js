import { socket } from "../App";

export const handleAddProducts = (e, prod, setProduct) => {
    e.preventDefault();
    socket.emit("update", prod);
    e.target.reset();
    setProduct([]);
    return false;
};
