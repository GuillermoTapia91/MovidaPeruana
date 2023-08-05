import React, { useState, useEffect } from "react";
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
      console.log(data);
      localStorage.setItem("id", data.content.id);
    } catch (error) {
      console.error("Error al obtener el perfil:", error);
    }
  };

  useEffect(() => {
    fetchPerfil();
  }, []);

  return (

    <div className="nombreUsuario">
        <p className="paquito">Bienvenido </p>
        <a className="subtitulo">{perfil.content && perfil.content.nombre} {perfil.content && perfil.content.apellido}</a>
    </div>
);
};

export default function NavBarAuth() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    nav.classList.toggle("abajo", window.scrollY > 400);
  });

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    window.location.href = "/";
  };

  return (
    <>
      <nav className="navbar navbar-expand-md bg-transparent fixed-top">
        <div className="margin-left container-fluid justify-content-around align-items-end gap-6">
          <a href="/Inicio">
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
            onClick={toggleMenu}
            aria-controls="menu"
            aria-expanded={menuAbierto}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <img src={menu} alt="" />
            </span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-end me-5 hamburguesa-media ${
              menuAbierto ? "show" : ""
            }`}
            id="menu"
          >
            <div className="margin-40">
              <ul className="d-flex gap-5 me-auto van menu-horizontal">
                <li>
                  <a className="subtitulo" href="/mi-informacion">
                    Crear establecimiento
                  </a>
                </li>
                <li>
                  <a className="subtitulo" href="/mi-informacion">
                    Mis establecimiento
                  </a>
                </li>
                <li>
                  <a className="subtitulo" href="/miperfil">
                    mi Perfil
                  </a>
                </li>
                <li>
                  <button onClick={logout}>Cerrar Sesión</button>
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