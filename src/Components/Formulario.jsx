import React, { useContext, useState, useEffect } from "react";
import { Card, InputGroup, Form, Button } from "react-bootstrap";
import { formularioContext } from "../context/FormularioContext";
import { deletePlanes, postPlanes, putPlanes } from "../PlanesAPI";
import Swal from "sweetalert2";
import { dataContext } from "../context/DataContext";

export const Formulario = () => {
  const { dataIn, meterData } = useContext(dataContext);
  const { seleccionado, aSeleccionar } = useContext(formularioContext);
  const [infoFormulario, setInfoFormulario] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    tipo: "",
    id: "",
  });
  useEffect(() => {
    setInfoFormulario((infoFormulario) => ({
      ...infoFormulario,
      nombre: seleccionado === "" ? "" : seleccionado.Nombre,
      descripcion: seleccionado === "" ? "" : seleccionado.Descripcion,
      precio: seleccionado === "" ? "" : seleccionado.Precio,
      tipo: seleccionado === "" ? "" : seleccionado.Tipo,
      id: seleccionado === "" ? undefined : seleccionado.id,
    }));
  }, [seleccionado]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfoFormulario((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const handleEnviar = (e) => {
    if (infoFormulario.id === undefined) {
      postPlanes({
        nombre: infoFormulario.nombre,
        descripcion: infoFormulario.descripcion,
        precio: infoFormulario.precio,
        tipo: infoFormulario.tipo,
      }).then(
        (enviar) => {
          meterData((prevState) => [...prevState, enviar.data]);
        },
        Swal.fire({
          icon: "success",
          title: "Producto Creado",
          showConfirmButton: false,
          timer: 2000,
        }),
        setInfoFormulario({
          nombre: "",
          descripcion: "",
          precio: "",
          tipo: "",
          id: "",
        })
      );
    } else {
      putPlanes({
        nombre: infoFormulario.nombre,
        descripcion: infoFormulario.descripcion,
        precio: infoFormulario.precio,
        tipo: infoFormulario.tipo,
        id: infoFormulario.id,
      }).then(
        Swal.fire({
          icon: "success",
          title: "Producto Actualizado",
          showConfirmButton: false,
          timer: 2000,
        }),
        setInfoFormulario({
          nombre: "",
          descripcion: "",
          precio: "",
          tipo: "",
          id: "",
        })
      );
    }
  };
  const handleEliminar = (e) => {
    deletePlanes({
      id: seleccionado.id,
    }).then(
      Swal.fire({
        icon: "success",
        title: "Producto Eliminado",
        showConfirmButton: false,
        timer: 2000,
      }),
      setInfoFormulario({
        nombre: "",
        descripcion: "",
        precio: "",
        tipo: "",
        id: "",
      })
    );
  };
  return (
    <Card className="tarjetaP" style={{ width: "35rem" }}>
      <Card.Body>
        <Card.Title>Ingreso de Productos</Card.Title>
      </Card.Body>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Nombre del Plan</InputGroup.Text>
        <Form.Control
          onChange={handleInputChange}
          value={infoFormulario.nombre}
          name="nombre"
          placeholder="Ejemplo: Plankemellama 00"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text>Descripcion del Producto</InputGroup.Text>
        <Form.Control
          onChange={handleInputChange}
          value={infoFormulario.descripcion}
          name="descripcion"
          as="textarea"
          placeholder="Ejemplo: 00 GB + 00 minutos"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Precio</InputGroup.Text>
        <Form.Control
          onChange={handleInputChange}
          value={infoFormulario.precio}
          name="precio"
          placeholder="Ejemplo: Q 000.00"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Tipo del Producto</InputGroup.Text>
        <Form.Control
          onChange={handleInputChange}
          value={infoFormulario.tipo}
          name="tipo"
          placeholder="Ejemplo: 0"
        />
      </InputGroup>
      <input
        type="hidden"
        onChange={handleInputChange}
        value={infoFormulario.id}
        name="id"
      ></input>
      <div>
        <Button onClick={handleEnviar} variant="primary">
          Enviar
        </Button>{" "}
        <Button onClick={handleEliminar} variant="primary">
          Eliminar
        </Button>{" "}
      </div>
    </Card>
  );
};
