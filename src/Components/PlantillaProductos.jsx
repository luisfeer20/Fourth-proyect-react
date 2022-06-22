import { Card, Button } from 'react-bootstrap';
import { useContext } from "react";
import { productosContext } from '../context/ProductosContext';

const PlantillaProductos = ({ producto }) => {
    const { seleccionados, seleccionarProductos } = useContext(productosContext);
    const handleOnClick = (e) => {
        seleccionarProductos(prevState => [...prevState, producto])
    }
    const typeIsAlreadySelected = seleccionados.some(selectedProducto => {
        return selectedProducto.Tipo === producto.Tipo;
    });
    return (
        <Card className='tarjetaP' style={{ width: '13rem' }}>
            <Card.Body style={{ backgroundColor: 'whitesmoke', marginTop: '5px', marginBottom: '5px' }}>
                <Card.Title>{producto.Nombre}</Card.Title>
                <Card.Text>{producto.Descripcion}</Card.Text>
                <Button disabled={typeIsAlreadySelected} onClick={handleOnClick} variant="primary">Q {producto.Precio}</Button>{' '}
            </Card.Body>
        </Card>


    )
}

export default PlantillaProductos;