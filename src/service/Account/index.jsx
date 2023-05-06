import { useState, useEffect } from 'react'
import { supabase } from '../../supabase'
import {footer} from "../../components/Footer/Footer"
import "./style.css"

export default function Account({ session }) {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  useEffect(() => {
    async function getProfile() {
      setLoading(true)
      const { user } = session

      let { data, error } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error) {
        console.warn(error)
      } else if (data) {
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }

      setLoading(false)
    }

    getProfile()
  }, [session])

  async function updateProfile(event) {
    event.preventDefault()

    setLoading(true)
    const { user } = session

    const updates = {
      id: user.id,
      username,
      website,
      avatar_url,
      updated_at: new Date(),
    }

    let { error } = await supabase.from('profiles').upsert(updates)

    if (error) {
      alert(error.message)
    }
    setLoading(false)
  }

  return (
    <div  className='tarjeta'>
    <form onSubmit={updateProfile} className="form-widget d-flex flex-column align-items-center text-warning gap-3 index">
      
        <div>
          <h1> Mi Perfil</h1>
        </div>
        <div className='d-flex gap-3'>
          <label htmlFor="email">Correo</label>
          <input id="email" type="text" value={session.user.email} disabled />
        </div>
        <div className='d-flex gap-3' >
          <label htmlFor="username">Nombre de usuario</label>
          <input
            id="username"
            type="text"
            required
            value={username || ''}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='d-flex gap-3'>
          <label htmlFor="Departamento">Departamento</label>
          <select name="" id="Departamento">
            <option value="Ancash">Ancash</option>
            <option value="Ayacucho">Ayacucho</option>
            <option value="Arequipa">Arequipa</option>
            <option value="Amazonas">Amazonas</option>
            <option value="Apurímac">Apurímac</option>
            <option value="Cajamarca">Cajamarca</option>
            <option value="Callao">Callao</option>
            <option value="Cerro de Pasco">Cerro de Pasco</option>
            <option value="Cusco">Cusco</option>
            <option value="Huánuco">Huánuco</option>
            <option value="Huancavelica">Huancavelica</option>
            <option value="Ica"> Ica</option>
            <option value="Junín">Junín</option>
            <option value="Lima" selected>Lima</option>
            <option value="La Libertad">La Libertad</option>
            <option value="Lambayeque">Lambayeque</option>
            <option value="Loreto">Loreto</option>
            <option value="Madre de Dios">Madre de Dios</option>
            <option value="Moquegua">Moquegua</option>
            <option value="Piura">Piura</option>
            <option value="Puno">Puno</option>
            <option value="San Martín">San Martín</option>
            <option value="Tacna">Tacna</option>
            <option value="Tumbes">Tumbes</option>
            <option value="Ucayali">Ucayali</option>
          </select>
        </div>
        <div>
          <button className="button block primary" type="submit" disabled={loading}>
            {loading ? 'Loading ...' : 'Update'}
          </button>
        </div>

        <div>
          <button className="button block" type="button" onClick={() => supabase.auth.signOut()}>
            Sign Out
          </button>
        </div>
      
    </form>

    </div>
    
  )
}



{/* <div>
            <label htmlFor="website">Website</label>
            <input
            id="website"
            type="url"
            value={website || ''}
            onChange={(e) => setWebsite(e.target.value)}
            />
        </div> */}