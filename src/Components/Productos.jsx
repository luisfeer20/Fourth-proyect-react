import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PlantillaProductos from './PlantillaProductos'
import { getPlanes } from '../PlanesAPI';
import { Carrito } from './Carrito';

export const Productos = () => {
    const [planes, setPlanes] = useState([])
    useEffect(() => {
        getPlanes().then(({ data }) => {
            setPlanes(data.data);
        })
    }, [setPlanes]);
    return (
        <Container fluid='md'>
            <Row>
                <Col md={7}>
                    <Row>
                        <b className='productos'>Planes Telefonicos</b>
                        {planes
                            .filter(producto => producto.Tipo === 1)
                            .map(
                                productoTel => <PlantillaProductos key={productoTel.id} producto={productoTel} />
                            )
                        }
                    </Row>
                    <Row>
                        <b className='productos'>Planes Internet</b>
                        {planes
                            .filter(producto => producto.Tipo === 2)
                            .map(
                                productoInt => <PlantillaProductos key={productoInt.id} producto={productoInt} />
                            )
                        }
                    </Row>
                    <Row>
                        <b className='productos'>Planes Cable TV</b>
                        {planes
                            .filter(producto => producto.Tipo === 3)
                            .map(
                                productoTv => <PlantillaProductos key={productoTv.id} producto={productoTv} />
                            )
                        }
                    </Row>
                </Col>
                <Col md={1}></Col>
                <Col md={4}>
                    <Row className='carritoCol'>
                        <Carrito />
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

