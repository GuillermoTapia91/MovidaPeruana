import './indexErick.css'
import './indexGuillermo.css'
import './indexJoel.css'
import './indexJercy.css'
//Guillermo
import discoImg from "../../assets/img/buscarPorDistrito_disco.jpg"
import barImg from "../../assets/img/buscarPorDistrito_bar.jpg"
import { useState,useRef } from "react"


export default function Home() {
  //Guillermo
  let refDiv = useRef()
  const [buttonBuscar,setButtonBuscar]= useState(false)
  const [selectDistritos,setSelectDistritos]= useState("")
  
  const handleButton = (e) => {
    setButtonBuscar(true)
    refDiv.current.style.height = "auto"
  }

  const handleSelect = (e) => {
    console.log(selectDistritos)
    setSelectDistritos(e.target.value)
    
  }
  
  return(
    <div>
      <div>
        Erick 1
      </div>
      <div >
        Erick 2
      </div>
      <div className="SectionBuscarPorDistritos  d-sm-flex justify-content-sm-center align-items-sm-center 
       gap-4 bg-black bg-gradient text-white p-2" ref={refDiv}>
          <div className="gap-1 mb-3">
            <div>
              <h3 className="text-center tracking-in-contract-bck-bottom">Descubre bares y discotecas </h3>
              <h3 className="text-center tracking-in-contract-bck-bottom"> disponibles en tu distrito</h3>
            </div>
            <div className=" input-container mt-3 d-flex   justify-content-center align-items-center gap-3 ">
              <div className="input" >
                {/* <input className="form-control" type="text" placeholder="Ej: San Miguel" id="input-buscar" /> */}
                <select name="distrito"className="form-select" id="" onChange={handleSelect}>
                  <option value="">Distritos</option>
                  <option value="sanMiguel">San Miguel</option>
                  <option value="miraflores">Miraflores</option>
                  <option value="barranco">Barranco</option>
                  <option value="puebloLibre">Pueblo Libre</option>
                  <option value="losOlivos">Los Olivos</option>
                  <option value="sanJuanMiraflores">San Juan de Miraflores</option>
                  <option value="chancay">Chancay</option>
                  <option value="huaral">Huaral</option>
                </select>
              </div>
              <div>
                <button className="btn btn-color" onClick={handleButton}>Buscar</button>
              </div>
            </div>
          </div>
          <div className=" d-sm-flex justify-content-sm-center align-items-sm-center gap-5 mt-3 text-center " >
            <div className="mb-3"><img src={discoImg} width="380px" alt="" className="img-fluid heartbeat" /></div>
            <div className=""><img src={barImg} width="400px" alt="" className="img-fluid heartbeat" /></div>
          </div>
        </div>          
      <div>
        Guillermo22 
        <button>1</button>
      </div>
      <div>
        Abraham1
      </div>
      <div>
        Abraham2
      </div>
      <div >
        Jercy1
      </div>
      <div >
        Jercy2
      </div>
      <div >
        footer
      </div>
    </div>
  )
}