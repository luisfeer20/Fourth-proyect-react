import React, { useContext, useEffect, useState } from "react";
import { PlantillaTabla } from "./PlantillaTabla";
import { getPlanes } from "../PlanesAPI";
import Navbar from "./NavBar";
import { Table } from "react-bootstrap";
import { Formulario } from "./Formulario";
import FormularioContext from "../context/FormularioContext";
import DataContext from "../context/DataContext";
import { dataContext } from "../context/DataContext";

const TablaProductos = () => {
  const { dataIn, meterData } = useContext(dataContext);
  useEffect(() => {
    getPlanes().then((planes) => {
      meterData(planes.data.data);
    });
  }, [meterData]);
  return (
    <>
      <FormularioContext>
        <Navbar />
        <Table className="tarjetaP" striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre del Producto</th>
              <th>Descripcion del Producto</th>
              <th>Precio</th>
              <th>Tipo</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {dataIn.map((producto) => (
              <PlantillaTabla key={producto.id} producto={producto} />
            ))}
          </tbody>
        </Table>
        <Formulario />
      </FormularioContext>
    </>
  );
};

const TablaProductosWrapper = () => (
  <DataContext>
    <TablaProductos />
  </DataContext>
);
export default TablaProductosWrapper;
