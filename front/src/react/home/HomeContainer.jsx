import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "./Home";
import {
  obtenerUsuarios,
  eliminarUsuarios,
  editarUsuario,
} from "../../redux/actions/index";

export default function HomeContainer() {
  const [boolean, setBoolean] = useState(false);
  const [edit, setEdit] = useState(0);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [legajo, setLegajo] = useState("");
  const [email, setEmail] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [modalShow, setModalShow] = useState(false);

  const dispatch = useDispatch();
  const store = useSelector((store) => {
    return store.losUsuarios.usuarios;
  });
  useEffect(() => {
    if (!boolean || boolean) {
      dispatch(obtenerUsuarios());
    }
  }, [boolean]);

  const handleClick = (id) => {
    dispatch(eliminarUsuarios(id)).then(() => setBoolean(!boolean));
  };

  const handleEdit = (id) => {
    const usuario = store.filter((element) => element.id === id);
    setNombre(usuario[0].nombre);
    setApellido(usuario[0].apellido);
    setNumeroDocumento(usuario[0].numeroDocumento);
    setLegajo(usuario[0].legajo);
    setEmail(usuario[0].email);
    setDomicilio(usuario[0].domicilio);
    setEdit(id);
  };

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
    dispatch(
      editarUsuario(edit, { [event.target[0].name]: event.target[0].value })
    ).then(() => {
      setBoolean(!boolean);
      setEdit(0);
    });
  };

  const handleAdd = () => {
    setModalShow(true);
  };

  return (
    <>
      <Home
        usuarios={store}
        handleClick={handleClick}
        handleEdit={handleEdit}
        edit={edit}
        handleChange={handleChange}
        nombre={nombre}
        apellido={apellido}
        numeroDocumento={numeroDocumento}
        legajo={legajo}
        email={email}
        domicilio={domicilio}
        handleSubmit={handleSubmit}
        handleAdd={handleAdd}
        modalShow={modalShow}
      ></Home>
    </>
  );
}
