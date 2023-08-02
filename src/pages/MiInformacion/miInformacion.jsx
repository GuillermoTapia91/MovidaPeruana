import { useState, useEffect } from "react";
import { getEstablecimientos } from "../../service/service";
import FormEstablecimiento from "../../components/Form/formEstablecimiento";
import Table from "../../components/Table/table";

import EditEstablecimiento from "../../components/Edit/editEstablecimiento";

export default function MiInformacion() {
  const [establecimientos, setEstablecimientos] = useState([]);

  const fetchEstablecimientos = async () => {
    const data = await getEstablecimientos();

    if (!data) {
      Swal.fire({
        title: "Todo Mal",
        text: "Hubo un error al traer los usuarios",
        icon: "error",
      });
      return;
    }

    setEstablecimientos(data);

    // Swal.fire({
    //   title: "Todo ok",
    //   text: "Establecimiento creado exitosamente",
    //   icon: "success",
    // });
  };

  useEffect(() => {
    fetchEstablecimientos();
  }, []);

  const columns = [
    {
      text: "Nombre",
      key: "nombre",
    },
    {
      text: "Establecimiento",
      key: "tipoEstablecimiento",
    },
    {
      text: "Distrito",
      key: "distrito",
    },
    {
      text: "Dirección",
      key: "direccion",
    },
    {
      text: "HorarioLunes",
      key: "horarioLunes",
    },
    {
      text: "HorarioMartes",
      key: "horarioMartes",
    },
    {
      text: "HorarioMiercoles",
      key: "horarioMiercoles",
    },
    {
      text: "HorarioJueves",
      key: "horarioJueves",
    },
    {
      text: "HorarioViernes",
      key: "horarioViernes",
    },
    {
      text: "HorarioSábado",
      key: "horarioSabado",
    },
    {
      text: "HorarioDomingo",
      key: "horarioDomingo",
    },
    {
      text: "Logo",
      key: "fotoLogo",
      render: (row) => {
        return (
          <img
            className="rounded-circle"
            width={40}
            height={40}
            alt=""
            src={row.fotoLogo}
          />
        );
      },
    },
    {
      text: "Foto1",
      key: "fotoLocal1",
      render: (row) => {
        return (
          <img
            className="rounded-circle"
            width={40}
            height={40}
            alt=""
            src={row.fotoLocal1}
          />
        );
      },
    },
    {
      text: "Foto2",
      key: "fotoLocal2",
      render: (row) => {
        return (
          <img
            className="rounded-circle"
            width={40}
            height={40}
            alt=""
            src={row.fotoLocal2}
          />
        );
      },
    },
    {
      text: "Foto3",
      key: "fotoLocal3",
      render: (row) => {
        return (
          <img
            className="rounded-circle"
            width={40}
            height={40}
            alt=""
            src={row.fotoLocal3}
          />
        );
      },
    },
    {
      text: "Foto4",
      key: "fotoLocal4",
      render: (row) => {
        return (
          <img
            className="rounded-circle"
            width={40}
            height={40}
            alt=""
            src={row.fotoLocal4}
          />
        );
      },
    },
    {
      text: "Pagina Web",
      key: "paginaWeb",
      render: (row) => {
        return (
          <a href={row.paginaWeb} target="_blank">
            Web
          </a>
        );
      },
    },
    {
      text: "Acciones",
      key: "id",
      render: (row) => {
        return (
          <div className="d-flex justify-content-around">
            <EditEstablecimiento id={row.id} />
            <button className="btn btn-dark">❌</button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <div className="container">
        <div className="mt-5 mb-5">
          <h1>Lista de Establecimientos</h1>
          <Table rows={establecimientos} columns={columns} />
          <h2>Agrega un establecimiento llenando el siguiente formulario:</h2>
          <div>
            <FormEstablecimiento />
          </div>
        </div>
      </div>
    </>
  );
}
