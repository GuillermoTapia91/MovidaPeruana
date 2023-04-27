import "../../pages/Home/indexGuillermo.css";
export default function FotosLugar({ currentList: lista }) {
  return (
    <>
      <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby={lista?.nombre} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">{lista?.nombre}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center">
              <p>Fotos:</p>
              <div class="container ">
                <div class="row ">
                  <div class="col-md-12 m-1 "><img src={lista?.foto1}  alt="" className="img-fluid " /></div>
                  <div class="col-md-12 m-1"><img src={lista?.foto2}  alt="" className="img-fluid " /></div>
                  <div class="col-md-12 m-1"><img src={lista?.foto3} width="380px" alt="" className="img-fluid " /></div>
                  <div class="col-md-12 m-1"><img src={lista?.foto4} width="380px" alt="" className="img-fluid " /></div>
                </div>
              </div>  
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-color" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}