import { ProductForm, Messages } from "./index.js";
import { socket } from "../App.jsx";

export function Home() {
    socket.emit("deploy", "deploy");
    return (
        <div className="container mt-3">
            <ProductForm />
            <Messages />
        </div>
    );
}
