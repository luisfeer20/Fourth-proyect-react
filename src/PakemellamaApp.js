import React from 'react';
import NavBar from './Components/NavBar';
import { Productos } from './Components/Productos'
import ProductosContext from './context/ProductosContext';
export const PakemellamaApp = () => {
    return (
        <>
            <NavBar></NavBar>
            <br></br>
            <ProductosContext>
                <Productos />
            </ProductosContext>
        </>
    );
};
