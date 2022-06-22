import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { formularioContext } from '../context/FormularioContext'

export const PlantillaTabla = ({ producto }) => {
    const { seleccionado, aSeleccionar } = useContext(formularioContext)
    const handleEdit = (e) => {
        aSeleccionar(producto)
    }
    const handleDelete = (e) => {
        aSeleccionar(producto)
    }
    return (
        <>
            <tr>
                <td>{producto.id}</td>
                <td>{producto.Nombre}</td>
                <td>{producto.Descripcion}</td>
                <td>Q {producto.Precio}</td>
                <td>{producto.Tipo}</td>
                <td><Button onClick={handleEdit} variant="light"><img width='20px' src='/icons8-edit-64.png' /></Button>{' '}</td>
                <td><Button onClick={handleDelete} variant="light"><img width='20px' src='/icons8-remove-32.png' /></Button>{' '}</td>
            </tr>
        </>
    )
}
