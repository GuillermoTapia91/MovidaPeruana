import video from "../../assets/video/discoteca.mp4"

export default function LandingPage() {
    return (
            
        <div>
            <div>
                

                <div className="containerEr" id="Inicio">
                    <video src={video} muted autoPlay loop></video>
                    <div className="capa"></div>
                    <div className="intro">
                        <h1 className="lyric1">Que comience la Fiesta</h1>
                        <h3 className="lyric2">Encuentra la juerga más cerca de tu zona</h3>
                        <a className="busqueda" href="/SignUp">
                            Bares/Discotecas
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}