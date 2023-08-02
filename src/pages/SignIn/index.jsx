import { useState, useEffect } from "react"
import "./style.css"

export default function SignIn() {

  return (
    <>
    <nav className=" navbar navbar-expand-md bg-transparent fixed-top">
        <div className=" margin-left container-fluid justify-content-around align-items-end gap-6">
            <a href="#Inicio"> <img className="mod-img with-media-180" src={logo} width={230} alt="" /> </a>
            <button id="hamburguesa" className="navbar-toggler hamburguesa-media" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                    <img src={menu} alt="" />
                </span>
            </button>
            <div className="collapse navbar-collapse justify-content-end me-5 hamburguesa-media" id="menu">
                <div className="margin-40">
                    <ul className="d-flex gap-5 me-auto van">
                        <li className="nav-item ">
                            <a id="btn-2" className="selectLayout second-btn media-btn" href="">¿Eres un Negocio?</a>
                        </li>
                        <li className="nav-item">
                        <a id="btn-3" className="selectLayout second-btn media-btn" href="/SignUp">Registrate</a>
                        </li>
                        <li className="nav-item">
                            <button id="btn-4" className="selectLayout second-btn media-btn"data-bs-toggle="modal" data-bs-target="#entrada">Entrar</button>
                        </li>
                        <div className="modal fade" id="entrada" data-bs-backdrop="static">

                            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                                <form className={`needs-validation ${showValidation} modal-content `}
                                                onSubmit={handleSubmit}>
                                    <div className="modal-header">
                                        <h5 className="modal-title">Conectate</h5>
                                        <button className="btn-close"
                                                 data-bs-dismiss="modal">❌
                                         </button>
                                    </div>
                                    <div className="modal-body">
                                    <div className="container-registro">                                                   
                                            <div className="formulario-opciones">
                                            <h5>Email :</h5>
                                            <input  type="email"
                                                    onChange={handleInputChange}
                                                    name="correo"
                                                    placeholder="example@host.com"
                                                    required
                                                    value={inputData.correo} />
                                            </div>
                                            <div className="formulario-opciones">
                                            <h5>Contraseña :</h5>
                                            <input  type="password"
                                                    onChange={handleInputChange}
                                                    name="password"
                                                    placeholder="password"
                                                    required
                                                    value={inputData.password} 
                                            />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button className="btn btn-primary" 
                                                type="submit">Login</button>
                                    </div>
                                </form>
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