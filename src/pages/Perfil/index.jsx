import { useState, useEffect } from "react";
import { borrarPerfil, putPerfil } from "../../service/index";
import "./style.css";
import Swal from "sweetalert2";
// import { Console } from "console";

export default function MiPerfil({ id }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");

  const name = localStorage.getItem("nombre");
  const lastname = localStorage.getItem("apellido");
  const email = localStorage.getItem("correo");
  console.log("nombre", name);
  useEffect(() => {
    setNombre(name);
    setApellido(lastname);
    setCorreo(email);
  }, [id]);

  const editarPerfil = async () => {
    try {
      const perfilActualizado = {
        nombre: nombre === "" ? undefined : nombre,
        apellido: apellido === "" ? undefined : apellido,
        correo: correo === "" ? undefined : correo,
      };

      const response = await putPerfil(id, perfilActualizado);
      console.log("Perfil actualizado:", response);

      Swal.fire({
        title: "Todo ok",
        text: "Actualizado Correctamente",
        icon: "success",
      });
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      console.error("Error al actualizar el perfil:", error);
    }
  };

  const deletePerfil = async (id) => {
    try {
      const response = await borrarPerfil(id);
      console.log("perfil Borrado", response);
      Swal.fire({
        title: "Todo ok",
        text: "Borrado Correctamente",
        icon: "success",
      });
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      window.location.href = "/";
    } catch (error) {
      console.error("Error al borrar el perfil", error);
    }
  };
  return (
    <div className="centro">
      <div className="formularioPerfil" action="" method="post">
        <h2 className="subabcd">Editar Perfil</h2>
        <div className="cajita">
          <p className="abcd ">Nombre</p>
          <input
            type="text"
            value={nombre}
            placeholder={name}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="cajita">
          <p className="abcd ">apellidos</p>
          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div className="cajita">
          <p className="abcd ">Correo</p>
          <input
            type="mail"
            placeholder={""}
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <button onClick={editarPerfil}>Guardar Cambios</button>
        <button onClick={deletePerfil}>Borrar Perfil</button>
      </div>
    </div>
  );
}
