import logo from "../assets/img/Logo.png"
import menu from "../assets/img/hamburg.png"
import "./layouts.css"
import { Outlet } from "react-router-dom"

export default function MainLayout() {
    window.addEventListener("scroll", function () {
        const nav = document.querySelector("nav");
        nav.classList.toggle("abajo", window.scrollY > 400);
    })
    window.addEventListener("scroll", function () {
        const nav = document.querySelector("#btn-2");
        nav.classList.toggle("modbutton", window.scrollY > 400);
    })
    window.addEventListener("scroll", function () {
        const nav = document.querySelector("#btn-3");
        nav.classList.toggle("modbutton", window.scrollY > 400);
    })
    window.addEventListener("scroll", function () {
        const nav = document.querySelector("#btn-4");
        nav.classList.toggle("modbutton", window.scrollY > 400);
    })
    window.addEventListener("scroll", function () {
        const nav = document.querySelector("#hamburguesa");
        nav.classList.toggle("hamburguesa-mediamod", window.scrollY > 400);
    })
    return (
        <>
            <nav className=" navbar navbar-expand-md bg-transparent fixed-top">
                <div className=" margin-left container-fluid justify-content-around align-items-end gap-6">
                    <a href="#Inicio"> <img className="mod-img" src={logo} width={230} alt="" /> </a>
                    <button id="hamburguesa" className="navbar-toggler hamburguesa-media" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <img src={menu} alt="" />
                        </span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end me-5 " id="menu">
                        <div className="margin-40">
                            <ul className="d-flex gap-5 me-auto van">
                                <li className="nav-item ">
                                    <button id="btn-2" className="selectLayout second-btn media-btn ">¿Eres un Negocio?</button>
                                </li>
                                <li className="nav-item">
                                <button id="btn-3" className="selectLayout second-btn media-btn" data-bs-toggle="modal" data-bs-target="#mi-modal">Registrate</button>
                                </li>
                                <div className="modal fade" id="mi-modal" data-bs-backdrop="static">
                                    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Registrate</h5>
                                                <button className="btn-close" data-bs-dismiss="modal"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="container-registro">
                                                    <div className="formulario-opciones">
                                                    <h5>Nombre de usuario :</h5>
                                                    <input type="text" />
                                                    </div>
                                                    <div className="formulario-opciones">
                                                    <h5>Email :</h5>
                                                    <input type="email" />
                                                    </div>
                                                    <div className="formulario-opciones">
                                                    <h5>Contraseña :</h5>
                                                    <input type="password" />
                                                    </div>
                                                    <div className="formulario-opciones">
                                                    <h5>Fecha de nacimiento :</h5>
                                                    <input type="date" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button className="btn btn-danger" data-bs-dismiss="modal">cancelar</button>
                                                <button className="btn btn-primary">Guardar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <li className="nav-item">
                                    <button id="btn-4" className="selectLayout second-btn media-btn"data-bs-toggle="modal" data-bs-target="#entrada">Entrar</button>
                                </li>
                                <div className="modal fade" id="entrada" data-bs-backdrop="static">
                                    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Conectate</h5>
                                                <button className="btn-close" data-bs-dismiss="modal"></button>
                                            </div>
                                            <div className="modal-body">
                                            <div className="container-registro">                                                   
                                                    <div className="formulario-opciones">
                                                    <h5>Email :</h5>
                                                    <input type="email" />
                                                    </div>
                                                    <div className="formulario-opciones">
                                                    <h5>Contraseña :</h5>
                                                    <input type="password" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button className="btn btn-danger" data-bs-dismiss="modal">cancelar</button>
                                                <button className="btn btn-primary">Guardar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </div>

                    </div>

                </div>
            </nav>
            <Outlet />

        </>
    )
}