import React, { useState } from "react";

const initialState = {}

const Context = React.createContext(initialState)

const FormularioContext = ({ children }) => {
    const [productoSelecEd, setProductosSelecEd] = useState({});
    const estadoContext = { seleccionado: productoSelecEd, aSeleccionar: setProductosSelecEd };
    return <Context.Provider value={estadoContext}>{children}</Context.Provider>
}
export const formularioContext = Context;
export default FormularioContext;