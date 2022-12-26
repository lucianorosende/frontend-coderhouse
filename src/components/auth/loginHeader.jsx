import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleFetch } from "../../functions/index.js";

export const LoginHeader = () => {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleUser = async () => {
        let data = await handleFetch("session", true);
        setName(data);
    };
    useEffect(() => {
        handleUser();
        if (name === undefined) {
            navigate("/");
        }
    }, [name]);

    return (
        <h1 className="alert alert-success">
            Bienvenido {name}
            <Link to="/logout">
                <button className="btn btn-warning m-3 justify-content-end">
                    Desloguear
                </button>
            </Link>
        </h1>
    );
};
