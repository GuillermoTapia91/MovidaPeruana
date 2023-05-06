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
                    <a href="#Inicio"> <img src={logo} width={250} alt="" /> </a>
                    <button id="hamburguesa" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <img src={menu} alt="" />
                        </span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end me-5 " id="menu">

                        <div >
                            <ul className="d-flex gap-5 me-auto">
                                <li className="nav-item">
                                    <a className="selectLayout nav-link" href="#eventos">Eventos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="selectLayout nav-link" href="">¿eres un negocio?</a>
                                </li>
                                <li className="nav-item">
                                    <a className="selectLayout nav-link " href="/signin">Iniciar Sesión</a>
                                </li>
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