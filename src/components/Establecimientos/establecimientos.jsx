// import "./indexGuillermo.css";
import "./establecimientos.css";

import { useState, useRef, useEffect } from "react";

import { districts } from "./distritos";

import discoImg from "../../assets/img/buscarPorDistrito_disco.jpg";
import barImg from "../../assets/img/buscarPorDistrito_bar.jpg";
import FotosLugar from "../FotosLugar";
import SchedulePlace from "../SchedulePlace";
import Swal from "sweetalert2";
import { getEstablecimientos } from "../../service/service";

export default function Establecimientos() {
  let refMenuBtn = useRef();
  let refDiv1 = useRef();
  let refDiv2 = useRef();
  let refImgG = useRef();

  const [establecimientos, setEstablecimientos] = useState([]);
  const [establecimientosFiltrados, setEstablecimientosFiltrados] = useState(
    []
  );
  const [currentList2, setCurrentList2] = useState(null);
  const [buttonBuscar, setButtonBuscar] = useState(false);
  const [filtros, setFiltros] = useState({
    distrito: "",
    tipoEstablecimiento: "",
  });

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

    setEstablecimientosFiltrados(data);
  };

  useEffect(() => {
    fetchEstablecimientos();
  }, []);

  const handleButton = (e) => {
    if (refMenuBtn.current.textContent === "Buscar") {
      setButtonBuscar(true);
      refMenuBtn.current.textContent = "Cerrar";
      refDiv1.current.style.height = "auto";
      refDiv2.current.style.display = "block";
      refImgG.current.style.display = "none";
    } else {
      setButtonBuscar(false);
      refMenuBtn.current.textContent = "Buscar";
      refDiv1.current.style.height = "100vh";
      refDiv2.current.style.display = "none";
      refImgG.current.style.display = "block";
    }
  };

  const filtrarPorDistrito = (e) => {
    setFiltros({ ...filtros, distrito: e.currentTarget.value });
    const filtrados = establecimientos.filter(
      (establecimiento) => e.currentTarget.value === establecimiento.distrito
    );
    if (filtros.tipoEstablecimiento.length > 0) {
      const filtrados2 = filtrados.filter(
        (establecimiento) =>
          filtros.tipoEstablecimiento === establecimiento.tipoEstablecimiento
      );
      return setEstablecimientosFiltrados(filtrados2);
    }
    return setEstablecimientosFiltrados(filtrados);
  };

  const filtrarPorTipoEstablecimiento = (e) => {
    setFiltros({ ...filtros, tipoEstablecimiento: e.currentTarget.value });
    const filtrados = establecimientos.filter(
      (establecimiento) =>
        e.currentTarget.value === establecimiento.tipoEstablecimiento
    );

    if (filtros.distrito.length > 0) {
      const filtrados2 = filtrados.filter(
        (establecimiento) => filtros.distrito === establecimiento.distrito
      );
      return setEstablecimientosFiltrados(filtrados2);
    }
    return setEstablecimientosFiltrados(filtrados);
  };

  const handleSetCurrentList1 = ({ id }) => {
    const current = establecimientos.find((lista) => lista.id === id);
    setCurrentList2(current);
  };

  return (
    <div>
      <div
        id="BusquedaDistrito"
        className="SectionBuscarPorDistritos d-sm-flex justify-content-sm-center align-items-sm-center 
        gap-4 bg-black  text-white p-2 "
        ref={refDiv1}
      >
        <div className="gap-1 mb-3 selectG">
          <div>
            <h3 className="text-center tracking-in-contract-bck-bottom">
              Descubre bares y discotecas{" "}
            </h3>
            <h3 className="text-center tracking-in-contract-bck-bottom">
              {" "}
              disponibles en tu distrito
            </h3>
          </div>
          <div className=" input-container mt-3 d-flex   justify-content-center align-items-center gap-3 ">
            <div className="inputg">
              <select
                name="distrito"
                className="form-select"
                id=""
                value={filtros.distrito}
                onChange={filtrarPorDistrito}
              >
                {districts.map((district, index) => (
                  <option key={index} value={district.value}>
                    {district.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button
                className="btn btn-color"
                ref={refMenuBtn}
                onClick={handleButton}
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
        <div
          ref={refImgG}
          className=" d-sm-flex justify-content-sm-center align-items-sm-center gap-5 mt-3 text-center imagenesG"
        >
          <div className="imgDisco">
            <img
              src={discoImg}
              width="380px"
              alt=""
              className="img-fluid heartbeat"
            />
          </div>
          <div className="imgBar">
            <img
              src={barImg}
              width="400px"
              alt=""
              className="img-fluid heartbeat"
            />
          </div>
        </div>
      </div>
      <div
        className="SectionBuscarFiltros bg-black bg-gradient p-3"
        ref={refDiv2}
      >
        <div
          className="inputSelectEstablecimiento mb-2
      "
        >
          <select
            name="establecimiento"
            className="form-select"
            value={filtros.tipoEstablecimiento}
            id=""
            onChange={filtrarPorTipoEstablecimiento}
          >
            <option value="">establecimiento</option>
            <option value="BAR">bar</option>
            <option value="DISCOTECA">discoteca</option>
          </select>
        </div>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4">
            {establecimientosFiltrados.map((lista) => (
              <div key={lista.id} className="col">
                <div className="card">
                  <div className="card-body">
                    <div className="text-center">
                      <img
                        src={lista.fotoLogo}
                        className="img-thumbnail"
                        width="200px"
                        alt="..."
                      />
                    </div>
                    <p className="mb-1 mt-1">Nombre: {lista?.nombre}</p>
                    <p>Dirección: {lista.direccion}</p>

                    <div className="text-center">
                      <button
                        type="button"
                        className="btn btn-color2"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => handleSetCurrentList1(lista)}
                      >
                        Horario
                      </button>

                      <button
                        id="btnfotosG"
                        className="btn btn-color2 m-1"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
                        onClick={() => handleSetCurrentList1(lista)}
                      >
                        Fotos
                      </button>
                      <button className="btn btn-color2">
                        <a
                          className="webg"
                          href={lista.paginaWeb}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Web
                        </a>{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SchedulePlace currentList={currentList2} />

      <FotosLugar currentList={currentList2} />
    </div>
  );
}
