import Swal from "sweetalert2";
import { putEstablecimiento } from "../../service/service";
import { useEffect, useState } from "react";
export default function EditEstablecimiento({
  selectedRow,
  fetchEstablecimientos,
}) {
  const [inputData, setInputData] = useState(selectedRow);
  const [showValidation, setShowValidation] = useState("");

  useEffect(() => {
    setInputData(selectedRow);
  }, [selectedRow]);

  const handleInputChange = (e) => {
    const { name, type, value, files } = e.target;
    setInputData({
      ...inputData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowValidation("was-validated");
    console.log(inputData);
    const token = localStorage.getItem("token") || "";

    const data = await putEstablecimiento(selectedRow.id, inputData, token);

    console.log(data);

    if (!data) {
      return Swal.fire({
        title: "Todo Mal",
        text: "Hubo un error",
        icon: "error",
      });
    }

    Swal.fire({
      title: "Todo ok",
      text: "Establecimiento actualizado exitosamente",
      icon: "success",
    });

    await fetchEstablecimientos();
  };

  return (
    <>
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <form
                className={`needs-validation ${showValidation}`}
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Modal title
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <h2>Formulario</h2>
                  <div>
                    <input
                      required
                      className="form-control mt-3"
                      value={inputData?.nombre}
                      onChange={handleInputChange}
                      placeholder="Escribe el nombre del establecimiento"
                      type="text"
                      name="nombre"
                    />
                  </div>
                  <div className="valid-feedback">Bien hecho</div>
                  <div>
                    <select
                      required
                      name="tipoEstablecimiento"
                      className="form-select mt-3"
                      value={inputData?.tipoEstablecimiento}
                      onChange={handleInputChange}
                    >
                      <option value="">Seleccionar</option>
                      <option value="BAR">bar</option>
                      <option value="DISCOTECA">discoteca</option>
                    </select>
                  </div>
                  <div>
                    <input
                      required
                      className="form-control mt-3"
                      value={inputData?.distrito}
                      onChange={handleInputChange}
                      type="text"
                      name="distrito"
                      placeholder="Escribe el distrito "
                    />
                  </div>
                  <div>
                    <input
                      required
                      className="form-control mt-3"
                      value={inputData?.direccion}
                      onChange={handleInputChange}
                      type="text"
                      name="direccion"
                      placeholder="Escribe la dirección del establecimiento"
                    />
                  </div>
                  <div>
                    <input
                      required
                      className="form-control mt-3"
                      value={inputData?.horarioLunes}
                      onChange={handleInputChange}
                      type="text"
                      name="horarioLunes"
                      placeholder="Escribe el rango de horario de atención del día Lunes "
                    />
                  </div>
                  <div>
                    <input
                      required
                      className="form-control mt-3"
                      value={inputData?.horarioMartes}
                      onChange={handleInputChange}
                      type="text"
                      name="horarioMartes"
                      placeholder="Escribe el rango de horario de atención del día Martes "
                    />
                  </div>
                  <div>
                    <input
                      required
                      className="form-control mt-3"
                      value={inputData?.horarioMiercoles}
                      onChange={handleInputChange}
                      type="text"
                      name="horarioMiercoles"
                      placeholder="Escribe el rango de horario de atención del día Miercoles "
                    />
                  </div>
                  <div>
                    <input
                      required
                      className="form-control mt-3"
                      value={inputData?.horarioJueves}
                      onChange={handleInputChange}
                      type="text"
                      name="horarioJueves"
                      placeholder="Escribe el rango de horario de atención del día Jueves "
                    />
                  </div>
                  <div>
                    <input
                      required
                      className="form-control mt-3"
                      value={inputData?.horarioViernes}
                      onChange={handleInputChange}
                      type="text"
                      name="horarioViernes"
                      placeholder="Escribe el rango de horario de atención del día Viernes "
                    />
                  </div>
                  <div>
                    <input
                      required
                      className="form-control mt-3"
                      value={inputData?.horarioSabado}
                      onChange={handleInputChange}
                      type="text"
                      name="horarioSabado"
                      placeholder="Escribe el rango de horario de atención del día Sabado "
                    />
                  </div>
                  <div>
                    <input
                      required
                      className="form-control mt-3"
                      value={inputData?.horarioDomingo}
                      onChange={handleInputChange}
                      type="text"
                      name="horarioDomingo"
                      placeholder="Escribe el rango de horario de atención del día Domingo "
                    />
                  </div>

                  <div>
                    <p className="mt-3">
                      Sube una imagen del logo de tu establecimiento:
                    </p>
                    <input
                      required
                      className="form-control "
                      onChange={handleInputChange}
                      type="file"
                      name="fotoLogo"
                      placeholder="Sube una imagen del logo de tu establecimiento "
                    />
                  </div>
                  <div>
                    <p className="mt-3">
                      Sube una imagen del interior o exterior de tu
                      establecimiento:
                    </p>
                    <input
                      required
                      className="form-control "
                      onChange={handleInputChange}
                      type="file"
                      name="fotoLocal1"
                      placeholder="Sube una imagen del interior o exterior de tu establecimiento "
                    />
                  </div>
                  <div>
                    <p className="mt-3">
                      Sube una imagen 2 del interior o exterior de tu
                      establecimiento:
                    </p>
                    <input
                      required
                      className="form-control "
                      onChange={handleInputChange}
                      type="file"
                      name="fotoLocal2"
                      placeholder="Sube una imagen del interior o exterior de tu establecimiento "
                    />
                  </div>
                  <div>
                    <p className="mt-3">
                      Sube una imagen 3 del interior o exterior de tu
                      establecimiento:
                    </p>
                    <input
                      required
                      className="form-control "
                      onChange={handleInputChange}
                      type="file"
                      name="fotoLocal3"
                      placeholder="Sube una imagen del interior o exterior de tu establecimiento"
                    />
                  </div>
                  <div>
                    <p className="mt-3">
                      Sube una imagen 4 del interior o exterior de tu
                      establecimiento:
                    </p>
                    <input
                      required
                      className="form-control"
                      onChange={handleInputChange}
                      type="file"
                      name="fotoLocal4"
                    />
                  </div>
                  <div>
                    <input
                      required
                      className="form-control mt-3"
                      value={inputData?.paginaWeb}
                      onChange={handleInputChange}
                      type="text"
                      name="paginaWeb"
                      placeholder="Coloca el link de la pagina o red social de tu establecimiento "
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
