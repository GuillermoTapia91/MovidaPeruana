import FormEstablecimiento from "../../components/Form/formEstablecimiento";
import { TableAdmin } from "../../components/Table/tableAdmin";
import "./crearEstablecimiento.css";

export default function CrearEstablecimiento() {
  return (
    <>
      <div className="establecimiento1">
        <div className="establecimientos2">
          <div className=" ">
            <div>
              <h1>Lista de mis Establecimientos</h1>
              <TableAdmin />
              <FormEstablecimiento />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
