import React from "react";
import { Warning, TDDesign } from "../index.js";

export const ProductContainer = ({ prod }) => {
    return (
        <>
            {prod.length === 0 ? (
                <Warning>NO HAY PRODUCTOS</Warning>
            ) : (
                <div className="table">
                    <table className="table table-responsive table-dark">
                        <tbody>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Precio</th>
                                <th>Foto</th>
                                <th>Codigo</th>
                                <th>Stock</th>
                                <th>ID</th>
                            </tr>
                            {prod.map((p) => (
                                <tr key={p._id}>
                                    <TDDesign>{p.nombre}</TDDesign>
                                    <TDDesign>{p.descripcion}</TDDesign>
                                    <TDDesign>${p.precio}</TDDesign>
                                    <TDDesign>
                                        <img
                                            width="50"
                                            src={p.foto}
                                            alt="not found"
                                        />
                                    </TDDesign>
                                    <TDDesign>{p.codigo}</TDDesign>
                                    <TDDesign>{p.stock}</TDDesign>
                                    <TDDesign>{p.productId}</TDDesign>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
};
