export default function SchedulePlace({ currentList: lista }) {
  return (
    <>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby={lista?.nombre} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Horario:</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Horario:
              <p>Lunes:{lista?.horario.lun}</p>
              <p>Martes:{lista?.horario.mar}</p>
              <p>Miércoles:{lista?.horario.mie}</p>
              <p>Jueves:{lista?.horario.jue}</p>
              <p>Viernes:{lista?.horario.vie}</p>
              <p>Sábado:{lista?.horario.sab}</p>
              <p>Domingo:{lista?.horario.dom}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}