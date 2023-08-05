import "./indexErick.css";
import "./indexGuillermo.css";
import "./indexJoel.css";

import Footer from "../../components/Footer/Footer";

import video from "../../assets/video/discoteca.mp4";

import evento1 from "../../assets/img/eva-ayllon.jpg";
import evento2 from "../../assets/img/gianmarco.jpg";
import evento3 from "../../assets/img/grupo-5.jpg";
import evento4 from "../../assets/img/kanukayeltigre.jpg";
import evento5 from "../../assets/img/aguamarina.jpg";
import evento6 from "../../assets/img/daniela.jpg";
import evento7 from "../../assets/img/antologia.jpg";
import evento8 from "../../assets/img/corazon-serrano.jpeg";

import Establecimientos from "../../components/Establecimientos/establecimientos";

export default function Home() {
  return (
    <div>
      <div>
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
      <Establecimientos />
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
                <div className="row align-items-start ">
                  <div className="col">
                    <div className="card h-100">
                      <img src={evento5} className="card-img-top " alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">AGUA MARINA</h5>
                        <p className="card-text">
                          Después de mucho tiempo, el agua más rica del Perú
                          AGUA MARINA, retorna al Centro de espectáculo "El
                          Huaralino" la cita será este Sábado 29 de Abril a
                          horas 08:00 PM Artista Invitado "LOS MIRLOS".
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
                          Publicado el <strong>21/04/2023</strong>
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
                          Daniela Darcourt presentará su nuevo álbum “Catarsis”
                          en vivo este 22 de abril a las 8:00 p.m. en el
                          Anfiteatro del Parque de la Exposición. Darcourt
                          anunció la presencia de la agrupación colombiana Don
                          Tetto.
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
                          Publicado el <strong>27/02/2023</strong>
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
                          ANTOLOGIA, se presenta por primera vez en el Teatro
                          Plaza Norte en un concierto Íntimo dirigido a los
                          admiradores y seguidores de la agrupación más
                          importante de la música andina contemporánea
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
                          Publicado el <strong>18/02/2023</strong>
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
                          El único corazón que no deja de latir, ¨corazón
                          serrano¨cumple 30 años de trayectoria musical. Vivamos
                          este aniversario por todo lo grande, con un escenario
                          impactante, y el mejor repertorio musical.
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
                          Publicado el <strong>08/01/2023</strong>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container text-center">
                <div className="row align-items-start">
                  <div className="col">
                    <div className="card h-100">
                      <img src={evento1} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">EVA AYLLON</h5>
                        <p className="card-text">
                          Dos íconos de la música vuelven a unir sus talentos
                          para el brindar el mejor homenaje a mamá. Tania
                          Libertad y Eva Ayllón consagradas interpretes peruanas
                          se reencontrarán por tercera vez sobre el escenario.
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
                          Publicado el <strong>22/04/2023</strong>
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <img src={evento2} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">GIAN MARCO</h5>
                        <p className="card-text">
                          Gian Marco cumple tres décadas de vida artística y lo
                          celebrará el 16 de julio con el concierto ‘Gian Marco
                          30 años’. Se llevará a cabo en el Estadio Nacional de
                          Lima y se esperan alrededor de 84 mil personas.
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
                          Publicado el <strong>11/03/2023</strong>
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
                          El Grupo 5 es uno de los grupos más queridos por los
                          peruanos. Ayer, en medio de gran expectativa, el grupo
                          de cumbia puso a la venta las entradas para el show
                          que ofrecerá por su 50 aniversario.
                        </p>
                        <div>
                          <a
                            href="https://teleticket.com.pe/50aniversario-grupo5#:~:text=*%20D%C3%ADas%20de%20concierto%3A,de%20puertas%3A%203%3A00%20p.m."
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
                          Publicado el <strong>14/04/2023</strong>
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
                          Kanaku y el Tigre, una de las bandas peruanas que más
                          alcance tuvo dentro y fuera del país en los últimos 15
                          años, anuncia su regreso a los escenarios para una
                          única función
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
                          Publicado el <strong>6/03/2023</strong>
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

      <Footer />
    </div>
  );
}
