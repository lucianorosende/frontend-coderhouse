import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContainerLogin, H1Author } from "../index.js";
import { Label, Send } from "../../utilities/index.js";
import { handleInputChange, handlePost } from "../../functions/index.js";

export function Login() {
    const [IsLogged, setIsLogged] = useState("");
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    useEffect(() => {
        if (IsLogged?.success) {
            alert("Logged Successfully");
            navigate("/home");
        }
        if (IsLogged?.error) {
            alert("User incorrect");
        }
    }, [IsLogged]);

    return (
        <ContainerLogin>
            <div>
                <H1Author>Login</H1Author>
                <br />
                <form
                    autoComplete="off"
                    onSubmit={(e) => handlePost(e, data, "login", setIsLogged)}
                >
                    <Label
                        id="email"
                        labelName="Email"
                        className="form-control"
                        type="email"
                        name="nombre"
                        required
                        onBlur={(e) => handleInputChange(e, setData)}
                    />
                    <Label
                        id="password"
                        labelName="Contraseña"
                        className="form-control"
                        type="password"
                        name="nombre"
                        required
                        onBlur={(e) => handleInputChange(e, setData)}
                    />

                    <Send type="submit" value="Logear" />
                </form>
                <Link to="/register">
                    <Send type="button" value="Ir a Registrar" />
                </Link>
            </div>
        </ContainerLogin>
    );
}
