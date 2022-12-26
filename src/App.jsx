import { Login, Home, Logout, Register } from "./components";
import { Routes, Route } from "react-router-dom";
import "./bootstrap.css";
import io from "socket.io-client";

export const socket = io.connect("http://localhost:8081/");

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/logout" element={<Logout />} />
        </Routes>
    );
}

export default App;
