import { Table } from "../../components/Table/table";
import "./miInformacion.css";
export default function MiInformacion() {
  return (
    <>
      <div className="establecimientos">
        <div className="establecimientosG">
          <div className=" ">
            <div>
              <h1>Lista de mis Establecimientos</h1>
              <Table />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
