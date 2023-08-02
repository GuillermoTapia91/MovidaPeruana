// import { useState } from 'react'
// import { supabase } from '../../supabase'
// import "./style.css"
// import logo from "../../assets/img/Logo.png"
// import GitHublogo from "../../assets/img/github.svg"
// import GoogleLogo from "../../assets/img/googleLogo.png"
// import FacebookLogo from "../../assets/img/facebookLogo.png"
// import TwitterLogo from "../../assets/img/twitterLogo.png"

// export default function Auth() {
//   const [loading, setLoading] = useState(false)
//   const [email, setEmail] = useState('')

//   const handleLogin = async (event) => {
//     event.preventDefault()

//     setLoading(true)
//     const { error } = await supabase.auth.signInWithOtp({ email })

//     if (error) {
//       alert(error.error_description || error.message)
//     } else {
//       alert('Check your email for the login link!')
//     }
//     setLoading(false)
//   }
//   async function signInWithGoogle() {
//     const { data, error } = await supabase.auth.signInWithOAuth({
//       provider: 'google',
//       options: {
//         queryParams: {
//           access_type: 'offline',
//           prompt: 'consent',
//         },
//       },
//     })
//   }

//   async function signInWithGithub() {
//     const {data,error} = await supabase.auth.signInWithOAuth({
//       provider: "github"
//     })
    
//     if (error) {
//       console.log(error)
//       return
//     }

//     return data

//   }

//   async function signout() {
//     const { error } = await supabase.auth.signOut()
//   }

//   return (
//     <>

//       <div className='gap-2 d-flex flex-column ' id='bod'>
//         <div className=''>
//           <a href="./"> <img className="img-fluid" src={logo} alt="" /> </a>
//         </div>
//         <div className="d-flex justify-content-center align-items-center gap-4 row ">
//           <div className="justify-content-center d-flex flex-column gap-2 col">

//             <h1 id='inicioReg' className="header header text-light">
//               <span id='palabra1'>Inicia Sesión </span>
//               <span id='signo'> / </span> 
//               <span id='palabra2'>Registrate</span> 
//               </h1>
//             <p id='corto' className="description ">Inicie sesión  con su correo electrónico a continuación</p>
//             <form className="form-widget d-flex flex-column align-items-center gap-4 " onSubmit={handleLogin}>
//               <div className='input-group mb-3'>
//                 <input
//                   className="inputField form-control"
//                   type="email"
//                   placeholder="Escribe tu Correo"
//                   value={email}
//                   required={true}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <button className={'button block btn btn-primary bg-info-subtle text-body-secondary'} disabled={loading}>
//                   {loading ? <span>Activando...</span> : <span>Activate Ahora!!</span>}
//                 </button>
//               </div>
//             </form>
//           </div>
//           <div className="btnMedia col" id='botones' >
//             <div className="github">
//               <button className="btnGit btn" onClick={signInWithGithub}>
//                 <img src={GitHublogo} alt="" />
//                 <h5>continue with GitHub</h5>
//               </button>
//             </div>
//             <div className="google">
//               <button className="btnGit btn" onClick={signInWithGoogle}>
//                 <img src={GoogleLogo}  />
//                 <h5>continue with Google</h5>
//               </button>
//             </div>
//             <div className="facebook">
//               <button className="btnGit btn">
//                 <img src={FacebookLogo} alt="" />
//                 <h5>continue with Facebook</h5>
//               </button>
//             </div>
//             <div className="twitter">
//               <button className="btnGit btn">
//                 <img src={TwitterLogo} alt="" />
//                 <h5>continue with Twitter</h5>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }