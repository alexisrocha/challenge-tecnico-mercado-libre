import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { crearUsuario } from "../../redux/actions/index";
import Agregar from "./agregar";

export default function agregarContainer({ history }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [legajo, setLegajo] = useState("");
  const [email, setEmail] = useState("");
  const [domicilio, setDomicilio] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    switch (event.target.name) {
      case "nombre":
        return setNombre(event.target.value);
      case "apellido":
        return setApellido(event.target.value);
      case "numeroDocumento":
        return setNumeroDocumento(event.target.value);
      case "legajo":
        return setLegajo(event.target.value);
      case "email":
        return setEmail(event.target.value);
      case "domicilio":
        return setDomicilio(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const objeto = {
      nombre: event.target[0].value,
      apellido: event.target[1].value,
      numeroDocumento: event.target[2].value,
      legajo: event.target[3].value,
      email: event.target[4].value,
      domicilio: event.target[5].value,
    };
    dispatch(crearUsuario(objeto)).then(() => {
      return history.push("/");
    });
  };

  return (
    <Agregar
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      nombre={nombre}
      apellido={apellido}
      numeroDocumento={numeroDocumento}
      legajo={legajo}
      email={email}
      domicilio={domicilio}
    ></Agregar>
  );
}
