import "./style.css"
import logo from "../../assets/img/Logo.png"
import GitHublogo from "../../assets/img/github.svg"
import GoogleLogo from "../../assets/img/googleLogo.png"
import FacebookLogo from "../../assets/img/facebookLogo.png"
import TwitterLogo from "../../assets/img/twitterLogo.png"
import { useState } from "react";
import { postRegistro } from "../../service";
import Swal from "sweetalert2"


export default function SingUp() {
  const [inputData, setInputData] = useState({
    nombre: "",
    apellido: "",
    password: "",
    correo: "",
    fechaNacimiento: "",
    tipoUsuario: "ESPECTADOR",
});

const [showValidation, setShowValidation] = useState("");

const handleInputChange = (event) => {
    const { name, type, checked, value } = event.target;

    setInputData({
        ...inputData,
        [name]: type === "checkbox" ? checked : value,
    });
};

const handleSubmit = async (event) => {
    event.preventDefault();

    setShowValidation("was-validated");

    const data = await postRegistro(inputData);
    console.log(data);
    if (!data) {
        Swal.fire({
            title: "Todo Mal",
            text: "Hubo un error",
            icon: "error",
        });
        return;
    }

    Swal.fire({
        title: "Todo ok",
        text: "Usuario creado correctamente",
        icon: "success",
    });
};

  return (
      <div className="signUp-body">
        <div className="container-signUp">
          <a href="./"> <img className="loginLogo" src={logo} alt="" /> </a>
          <h2 className="inicio-crear ">Registrate  y diviertete!!
          </h2 >
          {/* Iniciar Seccion */}
          <div className="login">
            <div className="bodyForm">
              <form className={`needs-validation ${showValidation} formLogin `}
                    onSubmit={handleSubmit}
                    noValidate>
                <h5 className="l" >Llene el registro!</h5>
                <input  className="W-80"
                        type="text"
                        onChange={handleInputChange}
                        name="nombre"
                        placeholder="Nombre"
                        required
                        value={inputData.nombre} />
                <input  className="W-80" 
                        onChange={handleInputChange}
                        type="text" 
                        placeholder="Apellidos"
                        name="apellido"
                        required
                        value={inputData.apellido} />
                <input  className="W-80" 
                        type="email" 
                        placeholder="Correo Electronico"
                        onChange={handleInputChange}
                        name="correo"
                        required
                        value={inputData.correo}/>
                <input  className="W-80" 
                        required
                        value={inputData.password}
                        type="password" 
                        placeholder="Contraseña"
                        onChange={handleInputChange}
                        name="password" />
                <h5 className="l" >Introduce tu fecha de nacimiento</h5>
                <input  className="W-80" 
                        required
                        value={inputData.fechaNacimiento}
                        type="date"  
                        onChange={handleInputChange}
                        name="fechaNacimiento"/>  
                <input  type="hidden"
                        required
                        name="tipoUsuario"
                        value={inputData.tipoUsuario} />
                <button className="btn-signin" type="submit" >Registrarse</button>
              </form>
            </div>

            <div className="btnMedia">
              <div className="github">
                <button className="btnGit btn">
                  <img src={GitHublogo} alt="" />
                  <h5>continue with GitHub</h5>
                </button>
              </div>
              <div className="google">
                <button className="btnGit btn">
                  <img src={GoogleLogo} alt="" />
                  <h5>continue with Google</h5>
                </button>
              </div>
              <div className="facebook">
                <button className="btnGit btn">
                  <img src={FacebookLogo} alt="" />
                  <h5>continue with Facebook</h5>
                </button>
              </div>
              <div className="twitter">
                <button className="btnGit btn">
                  <img src={TwitterLogo} alt="" />
                  <h5>continue with Twitter</h5>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}