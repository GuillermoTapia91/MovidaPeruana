import { Link } from "react-router-dom"
import imgFooter from "../../assets/img/Logo.png"
import facebookF from "../../assets/img/facebookLogo.png"
import instagramF from "../../assets/img/instagram.png"
import tiktokF from "../../assets/img/tiktok.png"
import "./Footer.css"

export default function Footer() {

  return(
    <>
      <div className="  text-white bg-black bg-gradient footer  ">
        
          <div className=" container  d-xl-flex justify-content-xl-center align-items-xl-center  gap-5 "> 
            <Link to= "/" className=" d-flex justify-content-center align-items-center  " >
              <img src={imgFooter} alt="" width="150px"/>
            </Link>
            <div className=" text-center d-flex justify-content-center align-items-center derechos mt-xl-3" >
              Todos los derechos reservados - Diseño Web por GEAJ
            </div>    
            <div className="text-center contacg mt-xl-3">
              Contáctanos
            </div>
            <div className="text-center  acercag d-flex justify-content-center align-items-center mt-xl-3 ">
              
                Acerca de nosotros
              
            </div>  
            <div className="text-center d-flex justify-content-center align-items-center mt-xl-3 gap-2">
              <a href="#" ><img src={facebookF} alt="" width="25"/></a>
              <a href="#" ><img src={instagramF} alt="" width="25"/></a>
              <a href="#" ><img src={tiktokF} alt="" width="25"/></a>
            </div>
          </div>
        
        
      </div>
    </>

    // <>
    // <div className="text-white p-3 bg-black ">
    //   <div className="container">
    //     <div className=" row row-cols-1 row-cols-xl-6   "> 
    //       <Link to= "/" className="col  " >
    //         <img src={imgFooter} alt="" width="150px"  />
    //       </Link>
    //       <div className="mt-sm-4  col derechos1" >
    //         <div className="derechos" >
    //           MovidaPeruana 2023. Todos los derechos reservados - Diseño Web por GEAJ
    //         </div>
    //       </div>    
    //       <div className="mt-sm-3 col text-center contacg">
    //         Contáctanos
    //       </div>
    //       <div className="text-center mt-sm-3 col acercag ">
            
    //           Acerca de nosotros
            
    //       </div>  
    //       <div className="mt-sm-3  col text-center">
    //         <a href="#" className="p-1"><img src={facebookF} alt="" width="25"/></a>
    //         <a href="#" className="p-1"><img src={instagramF} alt="" width="29"/></a>
    //         <a href="#" className="p-1"><img src={tiktokF} alt="" width="25"/></a>
    //       </div>
    //     </div>
    //   </div>
      
    // </div>
    // </>
  )
}