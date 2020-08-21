import axios from "axios";

const Usuarios = (todosLosUsuarios) => {
  return {
    type: "ALL_USERS",
    todosLosUsuarios,
  };
};

const obtenerUsuarios = () => {
  return (dispatch) => {
    return axios.get("/api/usuarios").then((res) => {
      return dispatch(Usuarios(res.data));
    });
  };
};

const eliminarUsuarios = (id) => {
  return (dispatch) => {
    return axios.delete(`/api/usuarios/${id}`);
  };
};

const editarUsuario = (id, objeto) => {
  return (dispatch) => {
    return axios.put(`/api/usuarios/${id}`, objeto);
  };
};

const crearUsuario = (objeto) => {
  return (dispatch) => {
    return axios.post("/api/usuarios", objeto);
  };
};

export { obtenerUsuarios, eliminarUsuarios, editarUsuario, crearUsuario };
