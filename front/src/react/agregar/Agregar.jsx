import React from "react";
import { Button, Form } from "react-bootstrap";
import Navbar from "../navbar/Navbar";

import "./Agregar.scss";

export default function addModal({
  handleSubmit,
  handleChange,
  nombre,
  apellido,
  numeroDocumento,
  legajo,
  email,
  domicilio,
}) {
  return (
    <div>
      <Navbar />
      <Form
        onSubmit={(event) => handleSubmit(event)}
        className="formGroup"
        style={{ fontFamily: "Proxima Nova Regular" }}
      >
        <Form.Group className="formGroupNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            name="nombre"
            type="text"
            placeholder="Ingrese el nombre"
            onChange={handleChange}
            value={nombre}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            name="apellido"
            type="text"
            placeholder="Ingrese el apellido"
            onChange={handleChange}
            value={apellido}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Numero de Documento</Form.Label>
          <Form.Control
            name="numeroDocumento"
            type="text"
            placeholder="Numero de Documento"
            onChange={handleChange}
            value={numeroDocumento}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Legajo</Form.Label>
          <Form.Control
            name="legajo"
            type="text"
            placeholder="Legajo"
            onChange={handleChange}
            value={legajo}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="text"
            placeholder="Email"
            onChange={handleChange}
            value={email}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Domicilio</Form.Label>
          <Form.Control
            name="domicilio"
            type="text"
            placeholder="Domicilio"
            onChange={handleChange}
            value={domicilio}
          />
        </Form.Group>
        <Button
          variant="dark"
          type="submit"
          value={"submit"}
          className="buttonSubmit"
          style={{ color: "#363733", fontFamily: "Proxima Nova Regular" }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
