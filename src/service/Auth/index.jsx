import { useState } from 'react'
import { supabase } from '../../supabase'
import logo from "../../assets/img/Logo.png"

import GitHublogo from "../../assets/img/github.svg"
import GoogleLogo from "../../assets/img/googleLogo.png"
import FacebookLogo from "../../assets/img/facebookLogo.png"
import TwitterLogo from "../../assets/img/twitterLogo.png"



export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()

    setLoading(true)
    const { error } = await supabase.auth.signInWithOtp({ email })

    if (error) {
      alert(error.error_description || error.message)
    } else {
      alert('Check your email for the login link!')
    }
    setLoading(false)
  }

  return (
    <>
      <div className='gap-2 d-flex flex-column '>
        <div className=''>
          <a href="./"> <img className="img-fluid" src={logo} alt="" /> </a>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-4 row">
          <div className="justify-content-center d-flex flex-column gap-2 col">

            <h1 className="header header text-warning">Inicia Sesión / Registrate</h1>
            <p className="description text-warning-emphasis">Inicie sesión  con su correo electrónico a continuación</p>
            <form className="form-widget d-flex flex-column align-items-center gap-4 " onSubmit={handleLogin}>
              <div className='input-group mb-3'>
                <input
                  className="inputField form-control"
                  type="email"
                  placeholder="Your email"
                  value={email}
                  required={true}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <button className={'button block btn btn-primary bg-info-subtle text-body-secondary'} disabled={loading}>
                  {loading ? <span>Loading</span> : <span>Send magic link</span>}
                </button>
              </div>
            </form>
          </div>
          <div className="btnMedia col">
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
    </>
  )
}