import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useContext } from "react";
import { productosContext } from '../context/ProductosContext';

export const PlantillaCarrito = ({ producto }) => {
    const { seleccionados, seleccionarProductos } = useContext(productosContext);
    const handleX = (e) => {
        const eliminados = seleccionados.filter(plan => {
            return plan.id !== producto.id
        })
        seleccionarProductos(eliminados)
    }
    return (
        <>
            <Card.Text>{producto.Descripcion} : <b>Q{producto.Precio}</b>   <Button key={producto.id} variant="light" size="sm" onClick={handleX}>x</Button></Card.Text>
        </>
    )
}
