import Swal from "sweetalert2";
import { putEstablecimiento } from "../../service/service";

export default function EditEstablecimiento({ id }) {
  const showEditModal = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Editar Usuario",
      html: `<input id="swal-input1" placeholder="Nombre" class="swal2-input"> 
        
        <select id="swal-input3" class="swal2-input">
          <option value="">Seleccionar</option>
          <option value="BAR">bar</option>
          <option value="DISCOTECA">discoteca</option>
        </select>
        <input id="swal-input4" placeholder="Distrito" class="swal2-input">
        <input id="swal-input18" placeholder="Dirección" class="swal2-input">
        <input id="swal-input5" placeholder="Horario Lunes" class="swal2-input">
        <input id="swal-input6" placeholder="Horario Martes" class="swal2-input">
        <input id="swal-input7" placeholder="Horario Miercoles" class="swal2-input">
        <input id="swal-input8" placeholder="Horario Jueves" class="swal2-input">
        <input id="swal-input9" placeholder="Horario Viernes" class="swal2-input">
        <input id="swal-input10" placeholder="Horario Sabado" class="swal2-input">
        <input id="swal-input11" placeholder="Horario Domingo" class="swal2-input">
        <input type="file" id="swal-input12" class="swal2-input">
        <input type="file" id="swal-input13" class="swal2-input">
        <input type="file" id="swal-input14" class="swal2-input">
        <input type="file" id="swal-input15" class="swal2-input">
        <input type="file" id="swal-input16" class="swal2-input">
        <input id="swal-input17" placeholder="Link Pagina Web" class="swal2-input">

        `,
      focusConfirm: false,
      preConfirm: () => {
        return {
          nombre: document.getElementById("swal-input1").value,
          tipoEstablecimiento: document.getElementById("swal-input3").value,
          distrito: document.getElementById("swal-input4").value,
          direccion: document.getElementById("swal-input18").value,
          horarioLunes: document.getElementById("swal-input5").value,
          horarioMartes: document.getElementById("swal-input6").value,
          horarioMiercoles: document.getElementById("swal-input7").value,
          horarioJueves: document.getElementById("swal-input8").value,
          horarioViernes: document.getElementById("swal-input9").value,
          horarioSabado: document.getElementById("swal-input10").value,
          horarioDomingo: document.getElementById("swal-input11").value,
          fotoLogo: document.getElementById("swal-input12").value,
          fotoLocal1: document.getElementById("swal-input13").value,
          fotoLocal2: document.getElementById("swal-input14").value,
          fotoLocal3: document.getElementById("swal-input15").value,
          fotoLocal4: document.getElementById("swal-input16").value,
          paginaWeb: document.getElementById("swal-input17").value,
        };
      },
    });

    // if (formValues) {
    //   Swal.fire(JSON.stringify(formValues));
    // }

    const data = await putEstablecimiento(id, formValues);
    if (!data) {
      Swal.fire({
        text: "Hubo un error",
        icon: "error",
      });
      return;
    }

    // await fetchUsers();
  };

  return (
    <>
      <div>
        <button onClick={showEditModal} className="btn btn-dark">
          ✏
        </button>
      </div>
    </>
  );
}
