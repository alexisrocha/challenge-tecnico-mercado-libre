import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

import "./Home.scss";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#f9f159",
    color: "#363733",
    fontSize: 20,
    fontFamily: "Proxima Nova Regular",
  },
  body: {
    fontSize: 16,
    fontFamily: "Proxima Nova Regular",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default function Home({
  usuarios,
  handleClick,
  handleEdit,
  edit,
  handleChange,
  nombre,
  apellido,
  numeroDocumento,
  legajo,
  email,
  domicilio,
  handleSubmit,
  handleAdd,
  modalShow,
}) {
  const classes = useStyles();
  return (
    <div>
      <Navbar />

      <TableContainer component={Paper} className="tablaContainer">
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Nombre</StyledTableCell>
              <StyledTableCell align="left">Apellido</StyledTableCell>
              <StyledTableCell align="left">Número DNI</StyledTableCell>
              <StyledTableCell align="left">Legajo</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left">Domicilio</StyledTableCell>
              <StyledTableCell align="left">
                <Link to="/agregar" className="linkAgregar">
                  Añadir usuario
                  <AddIcon
                    className="buttonAdd"
                    onClick={handleAdd}
                    fontSize="large"
                  />
                </Link>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usuarios &&
              usuarios.map((usuario) => (
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    {usuario.id !== edit ? (
                      usuario.nombre
                    ) : (
                      <form onSubmit={handleSubmit}>
                        <TextField
                          id="standard-basic"
                          label="Nombre"
                          type="text"
                          name="nombre"
                          onChange={handleChange}
                          value={nombre}
                        />

                        <button type="submit" className="buttonCheck">
                          <CheckIcon fontSize="small" />
                        </button>
                      </form>
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {usuario.id !== edit ? (
                      usuario.apellido
                    ) : (
                      <form onSubmit={handleSubmit}>
                        <TextField
                          id="standard-basic"
                          label="Apellido"
                          type="text"
                          name="apellido"
                          onChange={handleChange}
                          value={apellido}
                        />
                        <button type="submit" className="buttonCheck">
                          <CheckIcon fontSize="small" />
                        </button>
                      </form>
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {usuario.id !== edit ? (
                      usuario.numeroDocumento
                    ) : (
                      <form onSubmit={handleSubmit}>
                        <TextField
                          id="standard-basic"
                          label="Numero DNI"
                          type="text"
                          name="numeroDocumento"
                          onChange={handleChange}
                          value={numeroDocumento}
                        />
                        <button type="submit" className="buttonCheck">
                          <CheckIcon fontSize="small" />
                        </button>
                      </form>
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {usuario.id !== edit ? (
                      usuario.legajo
                    ) : (
                      <form onSubmit={handleSubmit}>
                        <TextField
                          id="standard-basic"
                          label="Legajo"
                          type="text"
                          name="legajo"
                          onChange={handleChange}
                          value={legajo}
                        />
                        <button type="submit" className="buttonCheck">
                          <CheckIcon fontSize="small" />
                        </button>
                      </form>
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {usuario.id !== edit ? (
                      usuario.email
                    ) : (
                      <form onSubmit={handleSubmit}>
                        <TextField
                          id="standard-basic"
                          label="email"
                          type="text"
                          name="email"
                          onChange={handleChange}
                          value={email}
                        />
                        <button type="submit" className="buttonCheck">
                          <CheckIcon fontSize="small" />
                        </button>
                      </form>
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {usuario.id !== edit ? (
                      usuario.domicilio
                    ) : (
                      <form onSubmit={handleSubmit}>
                        <TextField
                          id="standard-basic"
                          label="domicilio"
                          type="text"
                          name="domicilio"
                          onChange={handleChange}
                          value={domicilio}
                        />
                        <button type="submit" className="buttonCheck">
                          <CheckIcon fontSize="small" />
                        </button>
                      </form>
                    )}
                  </StyledTableCell>

                  <EditIcon
                    className="buttonEditar"
                    onClick={() => handleEdit(usuario.id)}
                    fontSize="large"
                    style={{ color: "#00a6dc" }}
                  />
                  <DeleteIcon
                    className="buttonEditar"
                    onClick={() => handleClick(usuario.id)}
                    fontSize="large"
                    style={{ color: "#e14d54" }}
                  />
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
