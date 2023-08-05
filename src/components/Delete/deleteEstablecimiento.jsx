import { useEffect, useState } from "react";
import { deleteEstablecimiento } from "../../service/service";
import Swal from "sweetalert2";

export default function DeleteEstablecimiento({ id, fetchEstablecimientos }) {
  const [selectedId, setSelectedId] = useState(id);

  useEffect(() => {
    setSelectedId(id);
  }, [id]);

  const borrarEstablecimiento = async (e) => {
    try {
      const token = localStorage.getItem("token") || "";
      const data = await deleteEstablecimiento(selectedId, token);
      console.log(data);

      if (data.message === "Este establecimiento no existe") {
        Swal.fire({
          title: "Todo Mal",
          text: "Hubo un error",
          icon: "error",
        });
        return;
      }

      Swal.fire({
        title: "Todo ok",
        text: "Establecimiento eliminado exitosamente",
        icon: "success",
      });

      await fetchEstablecimientos();
    } catch (error) {
      console.error("Error al borrar el perfil", error);
    }
  };

  return (
    <>
      <div>
        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="exampleModal1"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel1"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel1">
                  Borrar Establecimiento
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                ¿Estás seguro que quieres borrar este establecimiento?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  No
                </button>

                <button
                  onClick={borrarEstablecimiento}
                  className="btn btn-secondary"
                >
                  Si
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
