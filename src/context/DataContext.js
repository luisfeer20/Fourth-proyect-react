import React, { useState } from "react";

const initialState = {}

const Context = React.createContext(initialState)

const DataContext = ({ children }) => {
    const [data, setData] = useState([])
    const estadoContext = { dataIn: data, meterData: setData }
    return <Context.Provider value={estadoContext}>{children}</Context.Provider>
}

export const dataContext = Context;
export default DataContext;