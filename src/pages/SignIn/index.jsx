import { useState, useEffect } from "react"
import { supabase } from "../../supabase"
import Auth from "../../service/Auth"
import Account from "../../service/Account"
import "./style.css"
import logo from "../../assets/img/Logo.png"
import GitHublogo from "../../assets/img/github.svg"
import GoogleLogo from "../../assets/img/GoogleLogo.png"
import FacebookLogo from "../../assets/img/FacebookLogo.png"
import TwitterLogo from "../../assets/img/TwitterLogo.png"
export default  function SignIn() {
 
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])



  return (
    <>
    <div className="container-fluid d-flex justify-content-center align-items-center  login-body" >
      {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
    </div>
    </>
    // <div className="login-body">

    //   <div className="container-sign">
    //      <a href="./"><img className="loginLogo" src={logo} alt="" /></a> 
    //     <h5 className="in-up">
    //       <a className="inicio-crear mar-20" href="">Iniciar Sesión</a>
    //       <a className="inicio-crear mar-20"href="http://localhost:3000/signup">Crear Cuenta</a>
    //     </h5 >
    //     {/* Iniciar Seccion */}
    //     <div className="login">
    //       <div className="bodyForm">
    //         <form className="formLogin"  >
    //           <h5 className="l" >Inicia sesión en tu cuenta de MovidaPeruana</h5>
    //           <input className="W-80" type="email" name="email" placeholder="Correo Electronico"/>
    //           <input className="W-80" type="password" placeholder="Contraseña" />
    //           <a className="inicio-crear" href="">Problemas para entrar?</a>
    //           <button className="btn-signin" >SignIn</button>
    //         </form>
    //       </div>

    //       <div className="btnMedia">
    //         <div className="github">
    //           <button className="btnGit btn">
    //           <img src={GitHublogo} alt="" />
    //           <h5>continue with GitHub</h5>
    //          </button>             
    //         </div>
    //         <div className="google">
    //         <button className="btnGit btn">
    //           <img src={GoogleLogo} alt="" />
    //           <h5>continue with Google</h5>
    //          </button> 
    //         </div>
    //         <div className="facebook">
    //         <button className="btnGit btn">
    //           <img src={FacebookLogo} alt="" />
    //           <h5>continue with Facebook</h5>
    //          </button>  
    //         </div>
    //         <div className="twitter">
    //         <button className="btnGit btn">
    //           <img src={TwitterLogo} alt="" />
    //           <h5>continue with Twitter</h5>
    //          </button>  
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}