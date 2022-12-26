import React from "react";
import { ContainerMessages, Warning, Author, Day, Text } from "../index.js";

export const MessageContainer = ({ msgContainer }) => {
    return (
        <ContainerMessages>
            {msgContainer.length === 0 ? (
                <Warning>NO HAY MENSAJES</Warning>
            ) : (
                msgContainer.map((d) => (
                    <div key={d._id}>
                        <Author>{d.author.id}</Author>
                        <Day>
                            [{d.day}-{d.hour}]
                        </Day>
                        :<Text>{d.text}</Text>
                    </div>
                ))
            )}
        </ContainerMessages>
    );
};
