import "./style.css"
import logo from "../../assets/img/Logo.png"
import GitHublogo from "../../assets/img/github.svg"

export default function SignIn() {
  return (
    <div className="login-body">

      <div className="container">
        <img className="loginLogo" src={logo} alt="" />
        <h5 className="in-up">
          <a className="s-in-ses mar-20" href="">Iniciar Sesión</a>
          <a className="s-up-cre mar-20"href="">Crear Cuenta</a>
        </h5 >
        {/* Iniciar Seccion */}
        <div className="login">
          <div className="bodyForm">
            <form className="formLogin" action="">
              <h5 className="l" >Inicia sesión en tu cuenta de MovidaPeruana</h5>
              <input className="W-80" type="email" placeholder="Correo Electronico"/>
              <input className="W-80" type="password" placeholder="Contraseña" />
              <a href="">Problemas para entrar?</a>
              <button className="btn-signin" >SignIn</button>
            </form>
          </div>

          <div>
            <div className="github">
              <img src={GitHublogo} alt="" />
              <h3>continue with GitHub</h3>
            </div>
            <div className="google"></div>
            <div className="facebook"></div>
            <div className="twitter"></div>
          </div>
        </div>
        {/* Crearcuenta */}
        {/* <div className="CreateAccount">
          <input type="email" />
          <input type="password" />
          <a href="">Problemas para entrar?</a>
        <button>SignIn</button>
        </div>
        <div>
          <div className="github"></div>
          <div className="google"></div>
          <div className="facebook"></div>
          <div className="twitter"></div>
        </div> */}
      </div>
    </div>
  )
}