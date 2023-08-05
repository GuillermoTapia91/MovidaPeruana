import Swal from "sweetalert2";
import DeleteEstablecimiento from "../Delete/deleteEstablecimiento";
import EditEstablecimiento from "../Edit/editEstablecimiento";
import { getAdminEstablecimientos } from "../../service/service";
import { useEffect, useState } from "react";
import EditAdminEstablecimiento from "../Edit/editAdminEstablecimiento";
import DeleteAdminEstablecimiento from "../Delete/deleteAdminEstablecimiento";

export const TableAdmin = () => {
  const [tableRows, setTableRows] = useState([]);
  const [selectedRow, setSelectedRow] = useState({});

  const fetchEstablecimientos = async () => {
    // const data = await getEstablecimientos();

    const token = localStorage.getItem("token") || "";
    const data = await getAdminEstablecimientos(token);
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
            <th>Página web</th>
            <th>UsuarioId</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tableRows.length > 0 &&
            tableRows.map((row1, index) => (
              <tr key={index} className="text-center">
                <td>{row1.nombre}</td>
                <td>{row1.tipoEstablecimiento}</td>
                <td>{row1.distrito}</td>
                <td>{row1.direccion}</td>
                <td>{row1.horarioLunes}</td>
                <td>{row1.horarioMartes}</td>
                <td>{row1.horarioMiercoles}</td>
                <td>{row1.horarioJueves}</td>
                <td>{row1.horarioViernes}</td>
                <td>{row1.horarioSabado}</td>
                <td>{row1.horarioDomingo}</td>

                <td>
                  <img
                    className="rounded-circle"
                    width={40}
                    height={40}
                    alt=""
                    src={row1.fotoLogo}
                  />
                </td>
                <td>
                  <img
                    className="rounded-circle"
                    width={40}
                    height={40}
                    alt=""
                    src={row1.fotoLocal1}
                  />
                </td>
                <td>
                  <img
                    className="rounded-circle"
                    width={40}
                    height={40}
                    alt=""
                    src={row1.fotoLocal2}
                  />
                </td>
                <td>
                  <img
                    className="rounded-circle"
                    width={40}
                    height={40}
                    alt=""
                    src={row1.fotoLocal3}
                  />
                </td>
                <td>
                  <img
                    className="rounded-circle"
                    width={40}
                    height={40}
                    alt=""
                    src={row1.fotoLocal4}
                  />
                </td>
                <td>
                  <a href={row1.paginaWeb} target="_blank" rel="noreferrer">
                    Web
                  </a>
                </td>
                <td>{row1.usuarioId}</td>
                <td>
                  <div className="d-flex justify-content-around">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                      onClick={() => setSelectedRow(row1)}
                    >
                      ✏
                    </button>
                    <button
                      type="button"
                      className="btn btn-dark"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal3"
                      onClick={() => setSelectedRow(row1)}
                    >
                      ❌
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <EditAdminEstablecimiento
        selectedRow={selectedRow}
        fetchEstablecimientos={fetchEstablecimientos}
      />
      <DeleteAdminEstablecimiento
        id={selectedRow.id}
        fetchEstablecimientos={fetchEstablecimientos}
      />
    </div>
  );
};
