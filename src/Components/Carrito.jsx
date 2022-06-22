import React, { useContext } from 'react'
import { Col, Row, Card, Button } from 'react-bootstrap'
import { PlantillaCarrito } from './PlantillaCarrito'
import { productosContext } from '../context/ProductosContext';
export const Carrito = () => {
    const { seleccionados, seleccionarProductos } = useContext(productosContext);
    const total = seleccionados.reduce((acc, item) => acc + item.Precio, 0);
    const desc10 = total - ((10 * total) / 100).toFixed(2);
    const desc20 = total - ((20 * total) / 100).toFixed(2);
    let descsel = total;
    switch (seleccionados.length) {
        case 3:
            descsel = desc20;
            break;
        case 2:
            descsel = desc10;
            break;
    }
    return (
        <Col md={12}>
            <Row>
                <Card className='tarjetaP'>
                    <Card.Body style={{ backgroundColor: 'whitesmoke', marginTop: '5px', marginBottom: '5px' }}>
                        <Card.Title className='productos'><b>Carrito</b></Card.Title>
                        {
                            seleccionados
                                .map(producto => <PlantillaCarrito key={producto.id} producto={producto} />)
                        }
                        <b>Total</b>
                        <br />
                        Q {total > 0 ? total.toFixed(2) : ''}
                        <br />
                        <b>Descuento aplicado:</b>
                        <br />
                        Q {descsel === total ? '' : (total - descsel).toFixed(2)}
                        <br />
                        <Button >
                            Pagar
                        </Button>{' '}
                    </Card.Body>
                </Card>
            </Row>
        </Col>
    )
}