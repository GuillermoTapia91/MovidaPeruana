import "./style.css"
import logo from "../../assets/img/Logo.png"
import GitHublogo from "../../assets/img/github.svg"
import GoogleLogo from "../../assets/img/googleLogo.png"
import FacebookLogo from "../../assets/img/facebookLogo.png"
import TwitterLogo from "../../assets/img/twitterLogo.png"


export default function SingUp (){
    return(
        <div className="login-body">

      <div className="container-sign">
         <a href="./"> <img className="loginLogo" src={logo} alt="" /> </a>
        <h5 className="in-up">
          <a className="inicio-crear mar-20" href="">Iniciar Sesión</a>
          <a className="inicio-crear mar-20"href="">Crear Cuenta</a>
        </h5 >
        {/* Iniciar Seccion */}
        <div className="login">
          <div className="bodyForm">
            <form className="formLogin" action="">
              <h5 className="l" >Llene el registro!</h5>
              <input className="W-80" type="email" placeholder="Correo Electronico"/>
              <input className="W-80" type="password" placeholder="Contraseña" />
              <h5 className="l" >Introduce tu fecha de nacimiento</h5>
              <input className="W-80" type="date" placeholder=""/>
              <button className="btn-signin" >Registrarse</button>
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