import "./style.css"
import logo from "../../assets/img/Logo.png"
import GitHublogo from "../../assets/img/github.svg"
import GoogleLogo from "../../assets/img/GoogleLogo.png"
import FacebookLogo from "../../assets/img/FacebookLogo.png"
import TwitterLogo from "../../assets/img/TwitterLogo.png"
export default function SignIn() {
  return (
    <div className="login-body">

      <div className="container-sign">
        <img className="loginLogo" src={logo} alt="" />
        <h5 className="in-up">
          <a className="inicio-crear mar-20" href="">Iniciar Sesión</a>
          <a className="inicio-crear mar-20"href="http://localhost:3000/signup">Crear Cuenta</a>
        </h5 >
        {/* Iniciar Seccion */}
        <div className="login">
          <div className="bodyForm">
            <form className="formLogin" action="">
              <h5 className="l" >Inicia sesión en tu cuenta de MovidaPeruana</h5>
              <input className="W-80" type="email" placeholder="Correo Electronico"/>
              <input className="W-80" type="password" placeholder="Contraseña" />
              <a className="inicio-crear" href="">Problemas para entrar?</a>
              <button className="btn-signin" >SignIn</button>
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