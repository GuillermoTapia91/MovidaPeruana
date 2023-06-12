import logo from "../assets/img/Logo.png"
import menu from "../assets/img/hamburg.png"
import "./layouts.css"
import { Outlet } from "react-router-dom"

export default function MainLayout() {
    window.addEventListener("scroll", function () {
        const nav = document.querySelector("nav");
        nav.classList.toggle("abajo", window.scrollY > 400);
    })
    return (
        <>
            <nav className=" navbar navbar-expand-md bg-transparent fixed-top">
                <div className="container-fluid justify-content-around align-items-end gap-6">
                    <a href="#Inicio"> <img src={logo} width={230} alt="" /> </a>
                    <button id="hamburguesa" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <img src={menu} alt="" />
                        </span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end me-5 " id="menu">

                        <div >
                            <ul className="d-flex gap-5 me-auto van">
                                <li className="nav-item ">
                                    <a className="selectLayout nav-link" href="#eventos">Eventos</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="selectLayout nav-link">¿Eres un Negocio</a>
                                </li>
                                <li className="nav-item">
                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mi-modal">Registrate</button>
                                </li>
                                <div className="modal fade" id="mi-modal" data-bs-backdrop="static">
                                    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Registrate</h5>
                                                <button className="btn-close" data-bs-dismiss="modal"></button>
                                            </div>
                                            <div className="modal-body">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolor tempora, distinctio dignissimos quasi cumque ducimus ratione numquam inventore, facilis obcaecati dolorum natus et, temporibus accusamus id sed velit! Deserunt!</p>
                                            </div>
                                            <div className="modal-footer">
                                                <button className="btn btn-danger" data-bs-dismiss="modal">cancelar</button>
                                                <button className="btn btn-primary">Guardar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <li className="nav-item">
                                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mi-modal">Entrar</button>
                                </li>
                                <div className="modal fade" id="mi-modal" data-bs-backdrop="static">
                                    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Conectate</h5>
                                                <button className="btn-close" data-bs-dismiss="modal"></button>
                                            </div>
                                            <div className="modal-body">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolor tempora, distinctio dignissimos quasi cumque ducimus ratione numquam inventore, facilis obcaecati dolorum natus et, temporibus accusamus id sed velit! Deserunt!</p>
                                            </div>
                                            <div className="modal-footer">
                                                <button className="btn btn-danger" data-bs-dismiss="modal">cancelar</button>
                                                <button className="btn btn-primary">Guardar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <li>
                                    <a className="selectLayout" href="http://localhost:3000/signin">Registrate</a>
                                </li> */}
                            </ul>
                        </div>

                    </div>

                </div>
            </nav>
            <Outlet />

        </>
    )
}