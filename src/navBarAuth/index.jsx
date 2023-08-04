import { useState, useEffect } from "react";
import logo from "../assets/img/Logo.png";
import menu from "../assets/img/hamburg.png";
import "./layouts.css";
import { Outlet } from "react-router-dom";
import { getPerfil } from "../service";

export const PerfilComponent = () => {
    const [perfil, setPerfil] = useState({});
    const fetchPerfil = async () => {
        try {
            const data = await getPerfil();
            
            setPerfil(data);
            console.log(data)
            localStorage.setItem("id",data.content.id);
        } catch (error) {
            console.error("Error al obtener el perfil:", error);
        }
    };

    useEffect(() => {
        fetchPerfil();
    }, []);

    return (

        <div>
            <a>{perfil.content && perfil.content.nombre} {perfil.content && perfil.content.apellido}</a>
        </div>
    );
};


export default function NavBarAuth() {
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
    window.addEventListener("scroll", function () {
        const nav = document.querySelector("#menu");
        nav.classList.toggle("hamburguesa-mediamod", window.scrollY > 400);
    })


    return (
        <>
            <nav className="navbar navbar-expand-md bg-transparent fixed-top">
                <div className="margin-left container-fluid justify-content-around align-items-end gap-6">
                    <a href="#Inicio">
                        {" "}
                        <img
                            className="mod-img with-media-180"
                            src={logo}
                            width={230}
                            alt=""
                        />{" "}
                    </a>
                    <button
                        id="hamburguesa"
                        className="navbar-toggler hamburguesa-media"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#menu"
                        aria-controls="navbarTogglerDemo03"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon">
                            <img src={menu} alt="" />
                        </span>
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-end me-5 hamburguesa-media"
                        id="menu"
                    >
                        <div className="margin-40">
                            <ul className="d-flex gap-5 me-auto van">
                                <li>
                                    <a href="/">Inicio</a>
                                </li>
                                <li>
                                    <a href="/miperfil">mi Perfil</a>
                                </li>
                                <li>
                                    <PerfilComponent />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
}