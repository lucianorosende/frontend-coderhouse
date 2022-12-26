import { Label, Send, Delete } from "../../utilities/index.js";
import {
    handleAddProducts,
    handleInputChange,
    deleteInfoSockets,
} from "../../functions/index.js";
import { useState } from "react";

export const ProductList = () => {
    const [product, setProduct] = useState({
        nombre: "",
        descripcion: "",
        precio: undefined,
        foto: "",
        codigo: "",
        stock: undefined,
    });
    return (
        <form
            id="tableForm"
            autoComplete="off"
            onSubmit={(e) => handleAddProducts(e, product, setProduct)}
        >
            <Label
                id="nombre"
                labelName="Nombre del Producto"
                className="form-control"
                type="text"
                name="title"
                placeholder="Juan"
                onBlur={(e) => handleInputChange(e, setProduct)}
            />
            <Label
                id="descripcion"
                labelName="Describi tu producto"
                className="form-control"
                type="text"
                name="title"
                placeholder="Avion grande con 6 motores"
                onBlur={(e) => handleInputChange(e, setProduct)}
            />
            <Label
                id="precio"
                className="form-control"
                labelName="Precio"
                type="number"
                name="title"
                placeholder="500"
                onBlur={(e) => handleInputChange(e, setProduct)}
            />

            <Label
                id="foto"
                labelName="Foto del producto"
                className="form-control"
                type="url"
                name="thumbnail"
                placeholder="chrome://branding/content/about-logo.png"
                onBlur={(e) => handleInputChange(e, setProduct)}
            />

            <Label
                id="codigo"
                labelName="Codigo de barra"
                className="form-control"
                type="text"
                name="price"
                placeholder="25aa2d"
                onBlur={(e) => handleInputChange(e, setProduct)}
            />
            <Label
                id="stock"
                labelName="Stock del producto"
                className="form-control"
                type="number"
                name="price"
                placeholder="20"
                onBlur={(e) => handleInputChange(e, setProduct)}
            />

            <Send type="submit" />
            <Delete onClick={() => deleteInfoSockets("products")} />
        </form>
    );
};
