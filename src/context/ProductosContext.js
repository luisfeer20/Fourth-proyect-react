import React, { useState } from "react";

const initialState = {};

const Context = React.createContext(initialState);

const ProductosContext = ({ children }) => {
    const [productosSelec, setProductosSelec] = useState([]);
    const estadoContext = { seleccionados: productosSelec, seleccionarProductos: setProductosSelec };
    return <Context.Provider value={estadoContext}>{children}</Context.Provider>
}
export const productosContext = Context;
export default ProductosContext;