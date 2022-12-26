import React, { useEffect, useState } from "react";
import {
    ProductList,
    ProductContainer,
    ContainerProducts,
    ContainerUser,
    H1Author,
    LoginHeader,
} from "../index.js";
import { handleSockets } from "../../functions";

export const ProductForm = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        handleSockets("products", setProducts);
    }, []);

    return (
        <ContainerProducts>
            <ContainerUser>
                <LoginHeader />
            </ContainerUser>
            <H1Author>Ingrese Producto</H1Author>
            <ProductList />
            <ProductContainer prod={products} />
        </ContainerProducts>
    );
};
