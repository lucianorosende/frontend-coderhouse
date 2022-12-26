import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContainerLogin } from "../index.js";
import { handleFetch } from "../../functions/index.js";

export const Logout = () => {
    const [logInfo, setLogInfo] = useState("");
    const navigate = useNavigate();

    const handleLogout = async () => {
        setLogInfo(await handleFetch("logout", false, navigate));
    };
    useEffect(() => {
        handleLogout();
    }, []);

    return (
        <ContainerLogin>
            <h1 className="alert alert-primary">Hasta luego {logInfo}!</h1>
        </ContainerLogin>
    );
};
