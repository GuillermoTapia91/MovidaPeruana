import Swal from "sweetalert2";
import DeleteEstablecimiento from "../Delete/deleteEstablecimiento";
import EditEstablecimiento from "../Edit/editEstablecimiento";
import {
  getEstablecimientos,
  getMisEstablecimientos,
} from "../../service/service";
import { useEffect, useState } from "react";

export const Table = () => {
  const [tableRows, setTableRows] = useState([]);
  const [selectedRow, setSelectedRow] = useState({});

  const fetchEstablecimientos = async () => {
    // const data = await getEstablecimientos();

    const token = localStorage.getItem("token") || "";
    const data = await getMisEstablecimientos(token);
    console.log(data);
    if (!data) {
      return Swal.fire({
        title: "Todo Mal",
        text: "Hubo un error al traer los usuarios",
        icon: "error",
      });
    }
    setTableRows(data);
  };

  useEffect(() => {
    fetchEstablecimientos();
  }, []);

  return (
    <div className="mt-5 table-responsive">
      <table className="table table-hover table-striped">
        <thead className="table-dark text-center">
          <tr>
            <th scope="col">Nombre</th>
            <th>Establecimiento</th>
            <th>Distrito</th>
            <th>Dirección</th>
            <th>HorarioLunes</th>
            <th>HorarioMartes</th>
            <th>HorarioMiercoles</th>
            <th>HorarioJueves</th>
            <th>HorarioViernes</th>
            <th>HorarioSabado</th>
            <th>HorarioDomingo</th>
            <th>Logo</th>
            <th>Foto1</th>
            <th>Foto2</th>
            <th>Foto3</th>
            <th>Foto4</th>
            <th>Paágina web</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tableRows.length > 0 &&
            tableRows.map((row) => (
              <tr key={row.id} className="text-center">
                <td>{row.nombre}</td>
                <td>{row.tipoEstablecimiento}</td>
                <td>{row.distrito}</td>
                <td>{row.direccion}</td>
                <td>{row.horarioLunes}</td>
                <td>{row.horarioMartes}</td>
                <td>{row.horarioMiercoles}</td>
                <td>{row.horarioJueves}</td>
                <td>{row.horarioViernes}</td>
                <td>{row.horarioSabado}</td>
                <td>{row.horarioDomingo}</td>
                <td>
                  <img
                    className="rounded-circle"
                    width={40}
                    height={40}
                    alt=""
                    src={row.fotoLogo}
                  />
                </td>
                <td>
                  <img
                    className="rounded-circle"
                    width={40}
                    height={40}
                    alt=""
                    src={row.fotoLocal1}
                  />
                </td>
                <td>
                  <img
                    className="rounded-circle"
                    width={40}
                    height={40}
                    alt=""
                    src={row.fotoLocal2}
                  />
                </td>
                <td>
                  <img
                    className="rounded-circle"
                    width={40}
                    height={40}
                    alt=""
                    src={row.fotoLocal3}
                  />
                </td>
                <td>
                  <img
                    className="rounded-circle"
                    width={40}
                    height={40}
                    alt=""
                    src={row.fotoLocal4}
                  />
                </td>
                <td>
                  <a href={row.paginaWeb} target="_blank" rel="noreferrer">
                    Web
                  </a>
                </td>
                <td>
                  <div className="d-flex justify-content-around">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => setSelectedRow(row)}
                    >
                      ✏
                    </button>
                    <button
                      type="button"
                      className="btn btn-dark"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal1"
                      onClick={() => setSelectedRow(row)}
                    >
                      ❌
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <EditEstablecimiento
        selectedRow={selectedRow}
        fetchEstablecimientos={fetchEstablecimientos}
      />
      <DeleteEstablecimiento
        id={selectedRow.id}
        fetchEstablecimientos={fetchEstablecimientos}
      />
    </div>
  );
};
