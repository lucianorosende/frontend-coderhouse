import { useState } from "react";
import { Link } from "react-router-dom";
import { ContainerLogin, H1Author } from "../index.js";
import { Label, Send } from "../../utilities/index.js";
import { handleInputChange, handlePost } from "../../functions/index";

export const Register = () => {
    const [reg, setReg] = useState({
        email: "",
        password: "",
    });

    return (
        <ContainerLogin>
            <div>
                <H1Author>Register</H1Author>
                <br />
                <form
                    autoComplete="off"
                    onSubmit={(e) => handlePost(e, reg, "register")}
                >
                    <Label
                        id="email"
                        labelName="Registre su Email"
                        className="form-control"
                        type="email"
                        name="nombre"
                        required
                        onBlur={(e) => handleInputChange(e, setReg)}
                    />
                    <Label
                        id="password"
                        labelName="Registre su contraseña"
                        className="form-control"
                        type="password"
                        name="nombre"
                        required
                        onBlur={(e) => handleInputChange(e, setReg)}
                    />

                    <Send type="submit" value="Registrar" />
                </form>
                <Link to="/">
                    <Send type="button" value="Ir a Login" />
                </Link>
            </div>
        </ContainerLogin>
    );
};
