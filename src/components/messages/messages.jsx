import React, { useEffect, useState } from "react";
import { MessageContainer, ContainerHandler, H1Author } from "../index.js";
import { Label, Send, Delete } from "../../utilities/index.js";
import {
    handleAddMessage,
    handleInputChange,
    deleteInfoSockets,
    handleSockets,
} from "../../functions/index.js";

export const Messages = () => {
    const [socketData, setSocketData] = useState([]);
    const [value, setValue] = useState({
        id: "",
        text: "",
    });
    useEffect(() => {
        handleSockets("messages", setSocketData);
    }, []);
    return (
        <ContainerHandler>
            <div>
                <H1Author>Centro de mensajes</H1Author>
                <br />

                <form autoComplete="off">
                    <Label
                        id="id"
                        labelName="Email"
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="lucianorosende@gmail.com"
                        onBlur={(e) => handleInputChange(e, setValue)}
                    />
                    <hr />
                    <MessageContainer msgContainer={socketData} />
                    <Label
                        id="text"
                        labelName="Tu mensaje..."
                        className="form-control"
                        type="text"
                        name="msg"
                        placeholder="Contanos lo que quieras!"
                        onBlur={(e) => handleInputChange(e, setValue)}
                    />

                    <Send
                        value="Enviar"
                        type="button"
                        onClick={() => handleAddMessage(value)}
                    />
                    <Delete onClick={() => deleteInfoSockets("message")} />
                </form>
            </div>
        </ContainerHandler>
    );
};
