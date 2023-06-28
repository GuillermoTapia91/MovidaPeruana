import "./indexErick.css";
import "./indexGuillermo.css";
import "./indexJoel.css";
import "./indexJercy.css";
//GuillermoImportInicio
import Footer from "../../components/Footer/Footer";
import { useState, useRef } from "react";
import { db } from "./db";
import { districts } from "./districts";
import { SchedulePlace } from "../../components";
import discoImg from "../../assets/img/buscarPorDistrito_disco.jpg";
import barImg from "../../assets/img/buscarPorDistrito_bar.jpg";
// import logo25 from "../../assets/Huaral/img/legonlogo.png"
//GuillermoImportFinal
//ErickImportInicio
import video from "../../assets/video/discoteca.mp4";
import Buble from "../../assets/img/burbuja7 (1).png";
//ErickImportFinal
//AbrahamImportInicio
import evento1 from "../../assets/img/eva-ayllon.jpg";
import evento2 from "../../assets/img/gianmarco.jpg";
import evento3 from "../../assets/img/grupo-5.jpg";
import evento4 from "../../assets/img/kanukayeltigre.jpg";
import evento5 from "../../assets/img/aguamarina.jpg";
import evento6 from "../../assets/img/daniela.jpg";
import evento7 from "../../assets/img/antologia.jpg";
import evento8 from "../../assets/img/corazon-serrano.jpeg";
import FotosLugar from "../../components/FotosLugar";
//AbrahamImportFinal
//JercyImportInicio

//JercyImportFinal

export default function Home() {
  //GuillermoInicio
  let refMenuBtn = useRef();
  let refDiv1 = useRef();
  let refDiv2 = useRef();
  let refImgG = useRef();

  const [listas, setlistas] = useState(db);
  const [currentList, setCurrentList] = useState(null);
  const [buttonBuscar, setButtonBuscar] = useState(false);
  const [selectDistritos, setSelectDistritos] = useState("");
  const [selectEstablecimientos, setSelectEstablecimientos] = useState("");

  // Filtro

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

  const handleSelectDistritos = (e) => {
    if (!e.target.value) {
      setlistas(db);
      setSelectEstablecimientos("");
      setSelectDistritos("");
      return;
    }

    setSelectDistritos(e.target.value);
    setSelectEstablecimientos("");
    const filterByDistrict = db.filter(
      (place) => place.distrito === e.target.value
    );

    setlistas(filterByDistrict);
  };

  const handleSelectEstablecimientos = (e) => {
    if (selectDistritos === "") {
      setSelectEstablecimientos(e.target.value);
      const filterByDistrictAndEstablishment = db.filter(
        (place) => place.establecimiento === e.target.value
      );
      setlistas(filterByDistrictAndEstablishment);
    } else {
      setSelectEstablecimientos(e.target.value);
      const filterByDistrictAndEstablishment = db.filter(
        (place) =>
          place.distrito === selectDistritos &&
          place.establecimiento === e.target.value
      );
      setlistas(filterByDistrictAndEstablishment);
    }
  };

  const handleSetCurrentList = ({ id }) => {
    const current = listas.find((lista) => lista.id === id);
    setCurrentList(current);
  };

  //GuillermoFinal
  //ErickInicio

  //ErickFinal
  //AbrahamInicio

  //AbrahamFinal
  //JercyInicio

  //JercyFinal

  return (
    <div>
      <div>
        {/*Erick*/}

        <div className="containerEr" id="Inicio">
          <video src={video} muted autoPlay loop></video>
          <div className="capa"></div>
          <div className="intro">
            <h1 className="lyric1">Que comience la Fiesta</h1>
            <h3 className="lyric2">Encuentra la juerga más cerca de tu zona</h3>
            <a className="busqueda" href="#BusquedaDistrito">
              Bares/Discotecas
            </a>
          </div>
        </div>
      </div>

      {/* //Guillermo */}

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
              {/* <input className="form-control" type="text" placeholder="Ej: San Miguel" id="input-buscar" /> */}
              <select
                name="distrito"
                className="form-select"
                id=""
                onChange={handleSelectDistritos}
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
            value={selectEstablecimientos}
            id=""
            onChange={handleSelectEstablecimientos}
          >
            <option value="">establecimiento</option>
            <option value="bar">bar</option>
            <option value="discoteca">discoteca</option>
          </select>
        </div>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4">
            {listas.map((lista) => (
              // <div className='mm' key={lista.id}>{lista.nombre}</div>
              <div key={lista.id} className="col">
                <div className="card">
                  <div className="card-body">
                    <div className="text-center">
                      <img
                        src={lista.logo}
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
                        onClick={() => handleSetCurrentList(lista)}
                      >
                        Horario
                      </button>

                      <button
                        id="btnfotosG"
                        className="btn btn-color2 m-1"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
                        onClick={() => handleSetCurrentList(lista)}
                      >
                        Fotos
                      </button>
                      <button className="btn btn-color2">
                        <a className="webg" href={lista.web} target="_blank">
                          Web
                        </a>{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* arrays.filter(array=>array.algo === algo).map((array) =>()) */}
          </div>
        </div>
      </div>
      <div>
        <div id="eventos" className="bg-black  p-4">
          <div className="">
            <h2 className="text-center p-2">EVENTOS</h2>
          </div>
          <div
            id="carouselExampleCaptions"
            className="carousel carousel-dark slide"
            data-bs-ride="false"
          >
            <div className="carousel-inner ">
              <div className="carousel-item active ">
                <div className="container text-center">
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4">
                    <div className="col">
                      <div className="card h-100">
                        <img src={evento1} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">EVA AYLLON</h5>
                          <p className="card-text">
                            Eva Ayllon, se presenta por esta vez en el Teatro
                            del Colegio Santa Ursula. En un concierto íntimo
                            dirigido a los admiradores y seguidores.
                          </p>
                          <div>
                            <a
                              href="https://teleticket.com.pe/evento/vuelve-el-mejor-regalo-para-mama-eva-ayllon-y-tania-libertad-auditorio-del-colegio-santa-ursula"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-primary m-2 "
                            >
                              Link del evento
                            </a>
                          </div>
                        </div>
                        <div className="card-footer">
                          <small className="text-body-secondary">
                            Publicado el <strong>08/03/2023</strong>
                          </small>
                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <div className="card h-100">
                        <img src={evento2} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">GIANMARCO</h5>
                          <p className="card-text">
                            GianMarco, se presenta por esta vez en el Estadio
                            Nacioal del Perú. En un concierto íntimo dirigido a
                            los admiradores y seguidores.
                          </p>
                          <div>
                            <a
                              href="https://teleticket.com.pe/gianmarco30-2022/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-primary m-2 "
                            >
                              Link del evento
                            </a>
                          </div>
                        </div>
                        <div className="card-footer">
                          <small className="text-body-secondary">
                            Publicado el <strong>09/01/2023</strong>
                          </small>
                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <div className="card h-100">
                        <img src={evento3} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">GRUPO 5</h5>
                          <p className="card-text">
                            Grupo 5, se presenta por esta vez en el Estadio de
                            San Marcos.En un concierto íntimo dirigido a los
                            admiradores y seguidores.
                          </p>
                          <div>
                            <a
                              href="https://teleticket.com.pe/50aniversario-grupo5"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-primary m-2 "
                            >
                              Link del evento
                            </a>
                          </div>
                        </div>
                        <div className="card-footer">
                          <small className="text-body-secondary">
                            Publicado el <strong>11/02/2023</strong>
                          </small>
                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <div className="card h-100">
                        <img src={evento4} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">KANAKU Y EL TIGRE</h5>
                          <p className="card-text">
                            Kanaku y el tigre, se presenta por esta vez en el
                            Teatro Nacional. En un concierto íntimo dirigido a
                            los admiradores y seguidores.
                          </p>
                          <div>
                            <a
                              href="https://www.joinnus.com/events/theater/lima-todos-crecemos-distinto-la-historia-de-kanaku-y-el-tigre-52669"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-primary m-2 "
                            >
                              Link del evento
                            </a>
                          </div>
                        </div>
                        <div className="card-footer">
                          <small className="text-body-secondary">
                            Publicado el <strong>12/03/2023</strong>
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container text-center">
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4">
                    <div className="col">
                      <div className="card h-100">
                        <img src={evento5} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">AGUA MARINA</h5>
                          <p className="card-text">
                            Agua Marina, se presenta por esta vez en el
                            Huaralino - Los Olivos . En un concierto íntimo
                            dirigido a los admiradores y seguidores.
                          </p>
                          <div>
                            <a
                              href="https://teleticket.com.pe/evento/%22sin-limites-agua-marina-en-el-huaralino"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-primary m-2 "
                            >
                              Link del evento
                            </a>
                          </div>
                        </div>
                        <div className="card-footer">
                          <small className="text-body-secondary">
                            Publicado el <strong>08/03/2023</strong>
                          </small>
                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <div className="card h-100">
                        <img src={evento6} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">DANIELA DANCOURT</h5>
                          <p className="card-text">
                            Daniela Dancourt, se presenta por esta vez en el
                            Parque de la Exposición. En un concierto íntimo
                            dirigido a los admiradores y seguidores.
                          </p>
                          <div>
                            <a
                              href="https://teleticket.com.pe/catarsis-daniela-darcourt"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-primary m-2 "
                            >
                              Link del evento
                            </a>
                          </div>
                        </div>
                        <div className="card-footer">
                          <small className="text-body-secondary">
                            Publicado el <strong>09/01/2023</strong>
                          </small>
                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <div className="card h-100">
                        <img src={evento7} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">ANTOLOGÍA</h5>
                          <p className="card-text">
                            Antología, se presenta por esta ocación en el Teatro
                            Plaza Norte. En un concierto íntimo dirigido a los
                            admiradores y seguidores.
                          </p>
                          <div>
                            <a
                              href="https://www.joinnus.com/events/concerts/lima-antologia-en-el-teatro-plaza-norte-show-intimo-y-especial-46993"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-primary m-2 "
                            >
                              Link del evento
                            </a>
                          </div>
                        </div>
                        <div className="card-footer">
                          <small className="text-body-secondary">
                            Publicado el <strong>11/02/2023</strong>
                          </small>
                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <div className="card h-100">
                        <img src={evento8} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">CORAZÓN SERRANO</h5>
                          <p className="card-text">
                            Corazón Serrano, se presenta por esta ocación en el
                            Teatro Plaza Norte. En un concierto íntimo dirigido
                            a los admiradores y seguidores.
                          </p>
                          <div>
                            <a
                              href="https://teleticket.com.pe/corazon-serrano-30aniversario"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-primary m-2 "
                            >
                              Link del evento
                            </a>
                          </div>
                        </div>
                        <div className="card-footer">
                          <small className="text-body-secondary">
                            Publicado el <strong>12/03/2023</strong>
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      {/* <div className="bg-black text-white">Abraham2</div>
      <div className="bg-black text-white">Jercy1</div>
      <div className="bg-black text-white">Jercy2</div> */}
      <Footer />
      <SchedulePlace currentList={currentList} />
      <FotosLugar currentList={currentList} />
    </div>
  );
}
