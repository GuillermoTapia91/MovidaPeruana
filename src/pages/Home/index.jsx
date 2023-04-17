import { useState, useRef } from "react"
import { db } from "./db"
import { districts } from "./districts"

import { SchedulePlace } from "../../components"

import discoImg from "../../assets/img/buscarPorDistrito_disco.jpg"
import barImg from "../../assets/img/buscarPorDistrito_bar.jpg"
// import logo25 from "../../assets/Huaral/img/legonlogo.png"
//GuillermoImportFinal
//ErickImportInicio
import video from "../../assets/video/discoteca.mp4";
//ErickImportFinal
//AbrahamImportInicio
import evento1 from "../../assets/img/eva-ayllon.jpg";
import evento2 from "../../assets/img/gianmarco.jpg";
import evento3 from "../../assets/img/grupo-5.jpg";
import evento4 from "../../assets/img/kanukayeltigre.jpg";

import "./indexErick.css";
import "./indexGuillermo.css";
import "./indexJoel.css";
import "./indexJercy.css";


export default function Home() {
  //GuillermoInicio
  let refMenuBtn = useRef()
  let refDiv1 = useRef()
  let refDiv2 = useRef()
  
  const [listas, setlistas] = useState(db)
  const [currentList, setCurrentList] = useState(null)
  const [buttonBuscar,setButtonBuscar]= useState(false)
  const [selectDistritos,setSelectDistritos]= useState("")
  const [selectEstablecimientos,setSelectEstablecimientos]= useState("")

  // Filtro

  
  const handleButton = (e) => {
    if (refMenuBtn.current.textContent === "Buscar"){
      setButtonBuscar(true)
      refMenuBtn.current.textContent = "Cerrar"
      refDiv1.current.style.height = "auto"
      refDiv2.current.style.display = "block"
    } else {
      setButtonBuscar(false)
      refMenuBtn.current.textContent = "Buscar"
      refDiv1.current.style.height = "100vh"
      refDiv2.current.style.display = "none"
    }
  }

  const handleSelectDistritos = (e) => {
    const filterByDistrict = db.filter((place) => place.distrito === e.target.value)
    setlistas(filterByDistrict)
  }

  const handleSelectEstablecimientos = (e) => {  
    const filterByDistrictAndEstablishment = db.filter((place) => place.distrito === selectDistritos && place.establecimiento === e.target.value)
    setlistas(filterByDistrictAndEstablishment)
  }

  const handleSetCurrentList = ({id}) => {
    const current = listas.find((lista) => lista.id === id)
    setCurrentList(current)
  }
  
  //GuillermoFinal
  //ErickInicio

  //ErickFinal
  //AbrahamInicio

  //AbrahamFinal
  //JercyInicio

  //JercyFinal

  return (
    <div>
      <div>
        {/*Erick*/}
        <div className="container containerE">
          <video src={video} muted autoPlay loop></video>
          {/* <div className="capa"></div> */}
          <div className="intro">
            <h1>Que comienze la Fiesta</h1>
            <h3 className="h3G">Encuentra la juerga mas cerca de tu zona</h3>
            <button className="busqueda btn btn-outline-primary">
              Bares/Discotecas
            </button>
          </div>
          <div>{/* <img className="base" src={Buble} alt="" /> */}</div>
        </div>
      </div>
      
      {/* //Guillermo */}

      <div className="SectionBuscarPorDistritos d-sm-flex justify-content-sm-center align-items-sm-center 
       gap-4 bg-black bg-gradient text-white p-2 " ref={refDiv1}>
          <div className="gap-1 mb-3 selectG">
            <div>
              <h3 className="text-center tracking-in-contract-bck-bottom">Descubre bares y discotecas </h3>
              <h3 className="text-center tracking-in-contract-bck-bottom"> disponibles en tu distrito</h3>
            </div>
            <div className=" input-container mt-3 d-flex   justify-content-center align-items-center gap-3 ">
              <div className="inputg" >
                {/* <input className="form-control" type="text" placeholder="Ej: San Miguel" id="input-buscar" /> */}
                <select name="distrito"className="form-select" id="" onChange={handleSelectDistritos}>
                  {
                    districts.map((district, index) => (
                      <option key={index} value={district.value}>{district.label}</option>
                    ))
                  }
                </select>
              </div>
              <div>
                <button className="btn btn-color" ref={refMenuBtn} onClick={handleButton}>Buscar</button>
              </div>
            </div>
          </div>
          <div className=" d-sm-flex justify-content-sm-center align-items-sm-center gap-5 mt-3 text-center imagenesG" >
            <div className="imgDisco"><img src={discoImg} width="380px" alt="" className="img-fluid heartbeat" /></div>
            <div className="imgBar"><img src={barImg} width="400px" alt="" className="img-fluid heartbeat" /></div>
          </div>
      </div>          
      <div className="SectionBuscarFiltros bg-black bg-gradient p-3" ref={refDiv2} >
      <div className="inputSelectEstablecimiento mb-2
      ">
        <select name="establecimiento"className="form-select" id="" onChange={handleSelectEstablecimientos} >
          <option disabled selected>establecimiento</option>
          <option value="bar">bar</option>
          <option value="discoteca">discoteca</option>
        </select>
      </div>  
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4">  
            {
            listas.map((lista)=>
            // <div className='mm' key={lista.id}>{lista.nombre}</div>
            <div key={lista.id} className="col">
              <div className="card">
                <div className="card-body">
                  <div className="text-center">
                    <img src={lista.logo} className="img-thumbnail" width="200px" alt="..."/>
                  </div>
                  <p className="mb-1 mt-1">Nombre: {lista?.nombre}</p>
                  <p>Dirección: {lista.direccion}</p>
                  
                  <div className="text-center"  >
                    <button type="button" className="btn btn-color2" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() =>handleSetCurrentList(lista)}>Horario</button> 
          
                    <button id="btnfotosG" className="btn btn-color2 m-1">Fotos</button>
                    <button className="btn btn-color2">Opiniones</button>
                  </div>
                  <div id="horarioG" style={{display:"none"}}>
                    Horario:Lunes:{lista.horario.lun}
                    Martes:{lista.horario.mar} 
                    Miércoles:{lista. horario.mie}
                    Jueves:{lista.horario.jue}
                    Viernes:{lista.horario.vie}
                    Sábado:${lista.horario.sab}
                    Domingo:${lista.horario.dom}                                                      
                  </div>

                </div>
              </div>
            </div>
            )}
            {/* arrays.filter(array=>array.algo === algo).map((array) =>()) */}

          </div>
        </div>
      </div>
      <div>
        <div className=" bg-black  p-3">
          <div>
            <h2 className="text-center p-3 ">EVENTOS</h2>
          </div>
          <div className="row row-cols-1 row-cols-md-4 g-4 ">
            <div className="col">
              <div className="card h-100">
                <img
                  src={evento1}
                  className="card-img-top img-thumbnail"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">EVA AYLLON</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </p>
                </div>
                <div>
                  <a
                    href="https://teleticket.com.pe/evento/vuelve-el-mejor-regalo-para-mama-eva-ayllon-y-tania-libertad-auditorio-del-colegio-santa-ursula"
                    className="btn btn-primary m-2"
                  >
                    Link del evento
                  </a>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">
                    Publicado hace 10 min.
                  </small>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src={evento2}
                  className="card-img-top img-thumbnail"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">GIANMARCO</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </p>
                </div>
                <div className="link">
                  <a
                    href="https://teleticket.com.pe/gianmarco30-2022/"
                    className="btn btn-primary m-2 "
                  >
                    Link del evento
                  </a>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">
                    Publicado hace 1 hora.
                  </small>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src={evento3}
                  className="card-img-top img-thumbnail"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">GRUPO 5</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </p>
                </div>
                <div>
                  <a
                    href="https://teleticket.com.pe/50aniversario-grupo5"
                    className="btn btn-primary m-2"
                  >
                    Link del evento
                  </a>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">
                    Publicado hace 20 min.
                  </small>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src={evento4}
                  className="card-img-top img-thumbnail"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">KANUKA Y EL TIGRE</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </p>
                </div>
                <div>
                  <a
                    href="https://www.joinnus.com/events/concerts/lima-todos-crecemos-distinto-la-historia-de-kanaku-y-el-tigre-52856"
                    className="btn btn-primary m-2 "
                  >
                    Link del evento
                  </a>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">
                    Publicado hace 4 horas.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>Abraham2</div>
      <div>Jercy1</div>
      <div>Jercy2</div>
      <div>footer</div>
      <SchedulePlace currentList={currentList} />
    </div>
  );
}




// import './indexErick.css'
// import './indexGuillermo.css'
// import './indexJoel.css'
// import './indexJercy.css'
// //Guillermo
// import discoImg from "../../assets/img/buscarPorDistrito_disco.jpg"
// import barImg from "../../assets/img/buscarPorDistrito_bar.jpg"
// import { useState,useRef } from "react"
// import logo1 from "../../assets/Sanmiguel/MiTercerLugar/logo.jpg"
// import logo2 from "../../assets/Sanmiguel/PachaInti/logo.jpg"
// import logo3 from "../../assets/Sanmiguel/EnLounge&Bar/logo.jpg"
// import logo4 from "../../assets/Sanmiguel/FestivalSanMiguel/logo.jpg"
// import logo5 from "../../assets/Sanmiguel/Sopranos31/logo.jpg"
// import logo6 from "../../assets/Sanmiguel/Sopranos16/logo.jpg"
// import logo7 from "../../assets/Sanmiguel/Rustica/logo.jpg"
// import logo8 from "../../assets/Sanmiguel/FridayS/logo.jpg"
// import logo9 from "../../assets/Sanmiguel/FridaysO/logo.jpg"
// import logo10 from "../../assets/Sanmiguel/Chilis/logo.png"


// import logo11 from "../../assets/Miraflores/wahios/logo.jpg"
// import logo21 from "../../assets/Chancay/img/kaemalogo.jpg"
// import logo22 from "../../assets/Chancay/img/waikylogo.png"
// import logo23 from "../../assets/Chancay/img/lahuertaencantadalogo.png"
// import logo24 from "../../assets/Chancay/img/lobitologo.png"
// // import logo25 from "../../assets/Huaral/img/legonlogo.png"
// import logo26 from "../../assets/Huaral/img/gothiklogo.jpg"
// import logo27 from "../../assets/Huaral/img/casaviejalogo.png"





// export default function Home() {
//   //Guillermo
//   let refMenuBtn = useRef()
//   let refDiv1 = useRef()
//   let refDiv2 = useRef()
//   const [buttonBuscar,setButtonBuscar]= useState(false)
//   const [selectDistritos,setSelectDistritos]= useState("")
  
//   const handleButton = (e) => {
//     if(refMenuBtn.current.textContent==="Buscar"){
//       setButtonBuscar(true)
//       refMenuBtn.current.textContent = "Cerrar"
//       refDiv1.current.style.height = "auto"
//       refDiv2.current.style.display = "block"
//     }else{
//       setButtonBuscar(false)
//       refMenuBtn.current.textContent = "Buscar"
//       refDiv1.current.style.height = "100vh"
//       refDiv2.current.style.display = "none"
//     }
    
//   }

//   const handleSelect = (e) => {
    
//     setSelectDistritos(e.target.value)
//     console.log(selectDistritos)
//   }
  
//   const [listas, setlistas] = useState([
//     {
//       establecimiento: "bar",
//       id:1,
//       distrito: "san miguel",
//       nombre: "Mi tercer lugar",
//       direccion: "Av. La Mar 2261, San Miguel ",
//       logo: logo1,
//       carta: "https://www.mitercerlugar.com.pe/static/documentos/carta.pdf",//si es que hay
//       horario: {
//         lun: "5:00pm a 11:00pm",
//         mar: "5:00pm a 11:00pm",
//         mie: "5:00pm a 11:00pm",
//         jue: "4:00pm 11:00pm",
//         vie: "4:00pm a 11:00pm",
//         sab: "4:00pm a 11:00pm",
//         dom: "5:00pm a 11:00pm"
//       },
//       fotos: [],
//       web: "https://www.mitercerlugar.com.pe/"
      
//     },
//     {
//       establecimiento: "bar",
//       id:2,
//       distrito: "san miguel",
//       nombre: "EN lounge & bar",
//       direccion: "Av. Riva Agüero 754, San Miguel",
//       logo: logo3,
//       carta: "",//si es que hay
//       horario: {
//         lun: "5:00pm a 01:00am",
//         mar: "5:00pm a 01:00am",
//         mie: "5:00pm a 01:00am",
//         jue: "5:00pm a 01:00am",
//         vie: "5:00pm a 11:30pm",
//         sab: "5:00pm a 03:00am",
//         dom: "5:00pm a 12:00pm"
//       },
//       fotos: [],
//       web: "https://www.facebook.com/ENLoungeBar/"
//     },
//     {
//       establecimiento: "bar",
//       id:3,
//       distrito: "san miguel",
//       nombre: "Festival San Miguel",
//       direccion: "Av. la Marina 2517, San Miguel",
//       logo: logo4,
//       carta: "https://drive.google.com/file/d/1PUuIF7nO0bZa_5IW1g3UhDEDyB9LLLV0/view",//si es que hay
//       horario: {
//         lun: "11:30am a 01:00am",
//         mar: "11:30am a 01:00am",
//         mie: "11:30am a 01:00am",
//         jue: "11:30am a 01:00am",
//         vie: "11:30am a 03:00am",
//         sab: "11:30am a 03:00am",
//         dom: "11:30am a 01:00am"
//       },
//       fotos: [],
//       web: "https://www.facebook.com/festivalsanmiguel"
//     },
//     {
//       establecimiento: "bar",
//       id:4,
//       distrito: "san miguel",
//       nombre: "Pacha Inti",
//       direccion: "Mercedes Gallagher de Parks 396, San Miguel",
//       logo: logo2,
//       carta: "https://drive.google.com/file/d/1PUuIF7nO0bZa_5IW1g3UhDEDyB9LLLV0/view",//si es que hay
//       horario: {
//         lun: "No hay atención",
//         mar: "06:00pm a 01:00am",
//         mie: "06:00pm a 01:00am",
//         jue: "06:00pm a 01:00am",
//         vie: "06:00pm a 03:00am",
//         sab: "06:00pm a 03:00am",
//         dom: "No hay atención"
//       },
//       fotos: [],
//       web: "https://www.facebook.com/pachainti"
//     },
//     {
//       establecimiento: "discoteca",
//       distrito: "san miguel",
//       id:5,
//       nombre: "Sopranos",
//       direccion: "Av. La Marina 3151,San Miguel",
//       logo: logo5,
//       carta: "",//si es que hay
//       horario: {
//         lun: "07:00pm a 01:00am",
//         mar: "07:00pm a 01:00am",
//         mie: "07:00pm a 01:00am",
//         jue: "07:00pm a 01:00am",
//         vie: "07:00pm a 01:00am",
//         sab: "07:00pm a 01:00am",
//         dom: "No hay atención"
//       },
//       fotos: [],
//       web: "https://sopranos.com.pe/"
//     },
//     {
//       establecimiento: "bar",
//       distrito: "san miguel",
//       id:6,
//       nombre: "Sopranos",
//       direccion: "Av. La Marina 1687,San Miguel",
//       logo: logo6,
//       carta: "",//si es que hay
//       horario: {
//         lun: "07:00pm a 01:00am",
//         mar: "07:00pm a 01:00am",
//         mie: "07:00pm a 01:00am",
//         jue: "07:00pm a 01:00am",
//         vie: "07:00pm a 01:00am",
//         sab: "07:00pm a 01:00am",
//         dom: "No hay atención"
//       },
//       fotos: [],
//       web: "https://sopranos.com.pe/"
//     },
//     {
//       establecimiento: "bar",
//       distrito: "san miguel",
//       id:7,
//       nombre: "Rustica",
//       direccion: "Av. La Marina 2631, San Miguel",
//       logo: logo7,
//       carta: "",//si es que hay
//       horario: {
//         lun: "12:00pm a 12:30am",
//         mar: "12:00pm a 12:30am",
//         mie: "12:00pm a 12:30am",
//         jue: "12:00pm a 03:00am",
//         vie: "12:00pm a 03:00am",
//         sab: "12:00pm a 03:00am",
//         dom: "12:00pm a 03:00am"
//       },
//       fotos: [],
//       web: "https://www.rustica.com.pe/"
//     },
//     {
//       establecimiento: "bar",
//       distrito: "san miguel",
//       id:8,
//       nombre: "Fridays",
//       direccion: "Av. La Marina 2355 - C.C. La Marina Open Plaza,San Miguel",
//       logo: logo8,
//       carta: "",//si es que hay
//       horario: {
//         lun: "07:00pm a 11:30am",
//         mar: "07:00pm a 11:30am",
//         mie: "07:00pm a 11:30am",
//         jue: "07:00pm a 11:30am",
//         vie: "07:00pm a 11:30am",
//         sab: "07:00pm a 11:30am",
//         dom: "07:00pm a 11:30am"
//       },
//       fotos: [],
//       web: "https://fridaysperu.com/"
//     },
//     {
//       establecimiento: "bar",
//       distrito: "san miguel",
//       id:9,
//       nombre: "Fridays",
//       direccion: "Av. La Marina 2000, C.C Plaza San Miguel",
//       logo: logo9,
//       carta: "",//si es que hay
//       horario: {
//         lun: "07:00pm a 11:30am",
//         mar: "07:00pm a 11:30am",
//         mie: "07:00pm a 11:30am",
//         jue: "07:00pm a 11:30am",
//         vie: "07:00pm a 11:30am",
//         sab: "07:00pm a 11:30am",
//         dom: "07:00pm a 11:30am"
//       },
//       fotos: [],
//       web: "https://fridaysperu.com/"
//     },
//     {
//       establecimiento: "bar",
//       distrito: "san miguel",
//       id:10,
//       nombre: "Chilis",
//       direccion: "Calle Mantaro Nro. 220, C.C. Plaza San Miguel",
//       logo: logo10,
//       carta: "",//si es que hay
//       horario: {
//         lun: "07:00pm a 11:00am",
//         mar: "07:00pm a 11:00am",
//         mie: "07:00pm a 11:00am",
//         jue: "07:00pm a 11:00am",
//         vie: "07:00pm a 12:00am",
//         sab: "07:00pm a 12:00am",
//         dom: "07:00pm a 11:30am"
//       },
//       fotos: [],
//       web: "https://www.chilis.pe/"
//     },
//     {
//       establecimiento: "bar",
//       distrito: "miraflores",
//       id:11,
//       nombre: "Wahios",
//       direccion: "C. Berlín 192, Miraflores",
//       logo: logo11,
//       carta: "",//si es que hay
//       horario: {
//         lun: "07:00pm a 11:00am",
//         mar: "07:00pm a 11:00am",
//         mie: "07:00pm a 11:00am",
//         jue: "07:00pm a 11:00am",
//         vie: "07:00pm a 12:00am",
//         sab: "07:00pm a 12:00am",
//         dom: "07:00pm a 11:30am"
//       },
//       fotos: [],
//       web: "https://www.instagram.com/wahiosculturebar/?hl=es"
//     },
//     {
//       establecimiento: "discoteca",
//       id: 21,
//       distrito: "chancay",
//       nombre: "Kaema club",
//       direccion: "C. Lopez de Zuñiga, Chancay 15131 ",
//       logo: logo21,
//       carta: "",//si es que hay
//       telefono: " 981 522 697",
//       horario: {
//           lun: "",
//           mar: "",
//           mie: "",
//           jue: "",
//           vie: "",
//           sab: "7:00pm a 4:00am",
//           dom: "7:00pm a 4:00am"
//       }

//     },
//     {
//         establecimiento: "bar",
//         id: 22,
//         distrito: "chancay",
//         nombre: "WAYKI'S BAR",
//         direccion: "Calle San Martin 153, Chancay 15131 ",
//         logo: logo22,
//         carta: "",//si es que hay
//         telefono: "933 694 706",
//         horario: {
//             lun: "7:00pm a 2:00am",
//             mar: "7:00pm a 2:00am",
//             mie: "7:00pm a 2:00am",
//             jue: "7:00pm a 2:00am",
//             vie: "7:00pm a 2:00am",
//             sab: "7:00pm a 4:00am",
//             dom: "7:00pm a 4:00am"

//         }
//     },
//     {
//         establecimiento: "bar",
//         id: 23,
//         distrito: "chancay",
//         nombre: "la huerta encantada",
//         direccion: "Boulevard Diego, C. Lopez de Zuñiga 450, Chancay 15131",
//         logo: logo23,
//         carta: "",//si es que hay
//         telefono: "946 519 352",
//         horario: {
//             lun: "12:00pm a 18:00pm",
//             mar: "12:00pm a 18:00pm",
//             mie: "12:00pm a 18:00pm",
//             jue: "12:00pm a 18:00pm",
//             vie: "12:00pm a 23:00pm",
//             sab: "12:00pm a 23:00pm",
//             dom: "12:00pm a 23:00pm"
//         }

//     },
//     {
//         establecimiento: "bar",
//         id: 24,
//         distrito: "chancay",
//         nombre: "Lobitos Restobar",
//         direccion: "Junin 380, Chancay 15131",
//         logo: logo24,
//         carta: "cdn.me-qr.com",//si es que hay
//         telefono: "958 534 920",
//         horario: {
//             lun: "12:00pm a 18:00pm",
//             mar: "12:00pm a 18:00pm",
//             mie: "12:00pm a 18:00pm",
//             jue: "12:00pm a 18:00pm",
//             vie: "12:00pm a 23:00pm",
//             sab: "12:00pm a 23:00pm",
//             dom: "12:00pm a 23:00pm"
//         }

//     },
//     {
//       establecimiento: "discoteca",
//       id:25,
//       distrito: "huaral",
//       nombre: "Legon",
//       direccion: "Los Geranios 347, Huaral 15202 ",
//       logo:"",
//       carta: "",//si es que hay
//       telefono: " 934 557 270",
//       horario: {
//           lun: "",
//           mar: "",
//           mie: "",
//           jue: "",
//           vie: "",
//           sab: "7:00pm a 4:00am",
//           dom: "7:00pm a 4:00am"
//       }
//     },
//     {
//       establecimiento: "discoteca",
//       id: 26,
//       distrito: "huaral",
//       nombre: "Gothik Disco",
//       direccion: "Julio C. Tello 152, Huaral 15202 ",
//       logo: logo26,
//       carta: "",//si es que hay
//       telefono: "",
//       horario: {
//           lun: "",
//           mar: "",
//           mie: "",
//           jue: "",
//           vie: "",
//           sab: "22:00pm a 6:00am",
//           dom: "22:00pm a 6:00am"
//       }
//     },
//     {
//       establecimiento: "discoteca",
//       id: 27,
//       distrito: "huaral",
//       nombre: "casa vieja",
//       direccion: "Perú 120, Huaral 15202 ",
//       logo: logo27,
//       carta: "",//si es que hay
//       telefono: " ",
//       horario: {
//           lun: "",
//           mar: "",
//           mie: "",
//           jue: "",
//           vie: "",
//           sab: "23:00pm a 6:00am",
//           dom: ""
//       }
//     },

//   ])
//   return(
//     <div>
//       <div>
//         Erick 1
//       </div>
//       <div >
//         Erick 2
//       </div>
//       <div className="SectionBuscarPorDistritos  d-sm-flex justify-content-sm-center align-items-sm-center 
//        gap-4 bg-black bg-gradient text-white p-2" ref={refDiv1}>
//           <div className="gap-1 mb-3">
//             <div>
//               <h3 className="text-center tracking-in-contract-bck-bottom">Descubre bares y discotecas </h3>
//               <h3 className="text-center tracking-in-contract-bck-bottom"> disponibles en tu distrito</h3>
//             </div>
//             <div className=" input-container mt-3 d-flex   justify-content-center align-items-center gap-3 ">
//               <div className="inputg" >
//                 {/* <input className="form-control" type="text" placeholder="Ej: San Miguel" id="input-buscar" /> */}
//                 <select name="distrito"className="form-select" id="" onChange={handleSelect}>
//                   <option value="">Distritos</option>
//                   <option value="san miguel">San Miguel</option>
//                   <option value="miraflores">Miraflores</option>
//                   <option value="barranco">Barranco</option>
//                   <option value="pueblo libre">Pueblo Libre</option>
//                   <option value="los olivos">Los Olivos</option>
//                   <option value="san juan de miraflores">San Juan de Miraflores</option>
//                   <option value="chancay">Chancay</option>
//                   <option value="huaral">Huaral</option>
//                 </select>
//               </div>
//               <div>
//                 <button className="btn btn-color" ref={refMenuBtn} onClick={handleButton}>Buscar</button>
//               </div>
//             </div>
//           </div>
//           <div className=" d-sm-flex justify-content-sm-center align-items-sm-center gap-5 mt-3 text-center " >
//             <div className="mb-3"><img src={discoImg} width="380px" alt="" className="img-fluid heartbeat" /></div>
//             <div className=""><img src={barImg} width="400px" alt="" className="img-fluid heartbeat" /></div>
//           </div>
//       </div>          
//       <div className="SectionBuscarFiltros bg-black bg-gradient p-3" ref={refDiv2} >
//         <div className="container">
//           <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4">  
//             {listas.filter((lista)=>lista.distrito===selectDistritos).map((lista)=>
//             // <div className='mm' key={lista.id}>{lista.nombre}</div>
//             <div key={lista.id} className="col">
//             <div className="card">
//               <div className="card-body">
//                 <div className="text-center">
//                   <img src={lista.logo} className="img-thumbnail" width="200px" alt="..."/>
//                 </div>
//                 <p className="mb-1 mt-1">Nombre: {lista.nombre}</p>
//                 <p>Dirección: {lista.direccion}</p>
                
//                 <div className="text-center"  > 
//                   <button type="button" className="btn btn-color2" data-bs-toggle="modal" data-bs-target="#exampleModal">Horario</button>
                
//                   <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby={lista.nombre}     aria-hidden="true">
//                     <div className="modal-dialog">
//                       <div className="modal-content">
//                         <div className="modal-header">
//                           <h1 className="modal-title fs-5" id="exampleModalLabel">Horario</h1>
//                           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div className="modal-body">
//                           Horario:Lunes:{lista.horario.lun}
//                           Martes:{lista.horario.mar} 
//                           Miércoles:{lista. horario.mie}
//                           Jueves:{lista.horario.jue}
//                           Viernes:{lista.horario.vie}
//                           Sábado:${lista.horario.sab}
//                           Domingo:${lista.horario.dom}
//                         </div>
//                         <div className="modal-footer">
//                           <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <button className="btn btn-color2 m-1">Fotos</button>
//                   <button className="btn btn-color2">Opiniones</button>
//                 </div>   
//               </div>
//             </div>
//           </div>
//             )}
//             {/* arrays.filter(array=>array.algo === algo).map((array) =>()) */}

//           </div>
//         </div>
//       </div>  
//       <div>
//         Abraham1
//       </div>
//       <div>
//         Abraham2
//       </div>
//       <div >
//         Jercy1
//       </div>
//       <div >
//         Jercy2
//       </div>
//       <div >
//         footer
//       </div>
//     </div>
//   )
// }