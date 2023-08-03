import { useState } from "react";
import { postEstablecimiento } from "../../service/service";
import Swal from "sweetalert2";

export default function FormEstablecimiento() {
  const [inputData, setInputData] = useState({
    nombre: "",
    tipoEstablecimiento: "",
    distrito: "",
    direccion: "",
    horarioLunes: "",
    horarioMartes: "",
    horarioMiercoles: "",
    horarioJueves: "",
    horarioViernes: "",
    horarioSabado: "",
    horarioDomingo: "",
    fotoLogo: "",
    fotoLocal1: "",
    fotoLocal2: "",
    fotoLocal3: "",
    fotoLocal4: null,
    paginaWeb: "",
  });

  const [showValidation, setShowValidation] = useState("");

  const handleInputChange = (e) => {
    const { name, type, value, files } = e.target;
    setInputData({
      ...inputData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  // const handleImageChange = (e) => {
  //   setInputData({ ...inputData, [e.target.name]: e.target.files[0] });
  //   console.log(e.target);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setShowValidation("was-validated");
    console.log(inputData);
    const token = localStorage.getItem("token") || ""
    const data = await postEstablecimiento(inputData, token);
    console.log(data);

    if (!data) {
      Swal.fire({
        title: "Todo Mal",
        text: "Hubo un error",
        icon: "error",
      });
      return;
    }

    Swal.fire({
      title: "Todo ok",
      text: "Establecimiento creado exitosamente",
      icon: "success",
    });
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2>Formulario</h2>
          <form
            className={`needs-validation ${showValidation}`}
            onSubmit={handleSubmit}
            noValidate
          >
            <div>
              <input
                required
                className="form-control mt-3"
                value={inputData.nombre}
                onChange={handleInputChange}
                placeholder="Escribe el nombre del establecimiento"
                type="text"
                name="nombre"
              />
            </div>
            <div className="valid-feedback">Bien hecho</div>
            <div>
              {/* <input
                required
                className="form-control mt-3"
                value={inputData.tipoEstablecimiento}
                onChange={handleInputChange}
                placeholder="Escribe el tipo de Establecimiento BAR o DISCOTECA"
                type="text"
                name="tipoEstablecimiento"
              /> */}

              <select
                required
                name="tipoEstablecimiento"
                className="form-select mt-3"
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
                value={inputData.distrito}
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
                value={inputData.direccion}
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
                value={inputData.horarioLunes}
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
                value={inputData.horarioMartes}
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
                value={inputData.horarioMiercoles}
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
                value={inputData.horarioJueves}
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
                value={inputData.horarioViernes}
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
                value={inputData.horarioSabado}
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
                value={inputData.horarioDomingo}
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
                // value={inputData.fotoLogo}
                onChange={handleInputChange}
                type="file"
                name="fotoLogo"
                placeholder="Sube una imagen del logo de tu establecimiento "
              />
            </div>
            <div>
              <p className="mt-3">
                Sube una imagen del interior o exterior de tu establecimiento:
              </p>
              <input
                required
                className="form-control "
                // value={inputData.fotoLocal1}
                onChange={handleInputChange}
                type="file"
                name="fotoLocal1"
                placeholder="Sube una imagen del interior o exterior de tu establecimiento "
              />
            </div>
            <div>
              <p className="mt-3">
                Sube una imagen del interior o exterior de tu establecimiento:
              </p>
              <input
                required
                className="form-control "
                // value={inputData.fotoLocal2}
                onChange={handleInputChange}
                type="file"
                name="fotoLocal2"
                placeholder="Sube una imagen del interior o exterior de tu establecimiento "
              />
            </div>
            <div>
              <p className="mt-3">
                Sube una imagen del interior o exterior de tu establecimiento:
              </p>
              <input
                required
                className="form-control "
                // value={inputData.fotoLocal3}
                onChange={handleInputChange}
                type="file"
                name="fotoLocal3"
                placeholder="Sube una imagen del interior o exterior de tu establecimiento"
              />
            </div>
            <div>
              <p className="mt-3">
                Sube una imagen del interior o exterior de tu establecimiento:
              </p>
              <input
                required
                className="form-control"
                // value={inputData.fotoLocal4}
                onChange={handleInputChange}
                type="file"
                name="fotoLocal4"
                // placeholder="Sube una imagen del interior o exterior de tu establecimiento"
              />
            </div>
            <div>
              <input
                required
                className="form-control mt-3"
                value={inputData.paginaWeb}
                onChange={handleInputChange}
                type="text"
                name="paginaWeb"
                placeholder="Coloca el link de la pagina o red social de tu establecimiento "
              />
            </div>

            <div>
              <button type="submit" className="btn btn-primary mt-3">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
