// export const getEstablecimientos = async (token) => {
//   try {
//     const response = await fetch(
//       "http://127.0.0.1:5000/establecimientos-miInformacion",
//       {
//         headers: {
//           Authorization: "Bearer " + token,
//         },
//       }
//     );
//     if (!response.ok) {
//       return false;
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// };

export const getAdminEstablecimientos = async (token) => {
  try {
    const response = await fetch(
      "http://127.0.0.1:5000//establecimientos-admin",
      {
        // headers: {
        //   "content-type": "application/json",
        // },
        headers: {
          Authorization: "Bearer " + token,
        },
        // body: JSON.stringify(body),
      }
    );
    if (!response.ok) {
      return false;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getEstablecimientos = async () => {
  try {
    const response = await fetch(
      "http://127.0.0.1:5000/establecimientos-generales"
    );
    if (!response.ok) {
      return false;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getMisEstablecimientos = async (token) => {
  try {
    const response = await fetch(
      "http://127.0.0.1:5000//establecimientos-miInformacion",
      {
        // headers: {
        //   "content-type": "application/json",
        // },
        headers: {
          Authorization: "Bearer " + token,
        },
        // body: JSON.stringify(body),
      }
    );
    if (!response.ok) {
      return false;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const postEstablecimiento = async (body, token) => {
  try {
    const formData = new FormData();
    // const usuarioIdString = body.usuarioId;

    // // Convertir el valor de usuarioId a un entero usando parseInt()
    // const usuarioIdEntero = parseInt(usuarioIdString, 10);

    // Agregar el valor entero a FormData

    formData.append("nombre", body.nombre);
    formData.append("tipoEstablecimiento", body.tipoEstablecimiento);
    formData.append("distrito", body.distrito.toLowerCase());
    formData.append("direccion", body.direccion);
    formData.append("horarioLunes", body.horarioLunes);
    formData.append("horarioMartes", body.horarioMartes);
    formData.append("horarioMiercoles", body.horarioMiercoles);
    formData.append("horarioJueves", body.horarioJueves);
    formData.append("horarioViernes", body.horarioViernes);
    formData.append("horarioSabado", body.horarioSabado);
    formData.append("horarioDomingo", body.horarioDomingo);
    formData.append("fotoLogo", body.fotoLogo);
    formData.append("fotoLocal1", body.fotoLocal1);
    formData.append("fotoLocal2", body.fotoLocal2);
    formData.append("fotoLocal3", body.fotoLocal3);
    formData.append("fotoLocal4", body.fotoLocal4);
    formData.append("paginaWeb", body.paginaWeb);
    formData.append("usuarioId", body.usuarioId);

    const response = await fetch(
      "http://127.0.0.1:5000/establecimientos-miInformacion",
      {
        method: "POST",
        // headers: {
        //   "content-type": "application/json",
        // },
        headers: {
          Authorization: "Bearer " + token,
        },
        // body: JSON.stringify(body),
        body: formData,
      }
    );

    if (!response.ok) {
      return false;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const putEstablecimiento = async (id, body, token) => {
  try {
    const formData = new FormData();
    formData.append("nombre", body.nombre);
    formData.append("tipoEstablecimiento", body.tipoEstablecimiento);
    formData.append("distrito", body.distrito.toLowerCase());
    formData.append("direccion", body.direccion);
    formData.append("horarioLunes", body.horarioLunes);
    formData.append("horarioMartes", body.horarioMartes);
    formData.append("horarioMiercoles", body.horarioMiercoles);
    formData.append("horarioJueves", body.horarioJueves);
    formData.append("horarioViernes", body.horarioViernes);
    formData.append("horarioSabado", body.horarioSabado);
    formData.append("horarioDomingo", body.horarioDomingo);
    formData.append("fotoLogo", body.fotoLogo);
    formData.append("fotoLocal1", body.fotoLocal1);
    formData.append("fotoLocal2", body.fotoLocal2);
    formData.append("fotoLocal3", body.fotoLocal3);
    formData.append("fotoLocal4", body.fotoLocal4);
    formData.append("paginaWeb", body.paginaWeb);

    const response = await fetch(
      `http://127.0.0.1:5000/establecimiento-miInformacion/${id}`,
      {
        method: "PUT",
        // headers: {
        //   "content-type": "application/json",
        // },
        // body: JSON.stringify(body),
        headers: {
          Authorization: "Bearer " + token,
        },
        body: formData,
      }
    );

    if (!response.ok) return false;

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const putAdminEstablecimiento = async (id, body, token) => {
  try {
    const formData = new FormData();
    formData.append("nombre", body.nombre);
    formData.append("tipoEstablecimiento", body.tipoEstablecimiento);
    formData.append("distrito", body.distrito.toLowerCase());
    formData.append("direccion", body.direccion);
    formData.append("horarioLunes", body.horarioLunes);
    formData.append("horarioMartes", body.horarioMartes);
    formData.append("horarioMiercoles", body.horarioMiercoles);
    formData.append("horarioJueves", body.horarioJueves);
    formData.append("horarioViernes", body.horarioViernes);
    formData.append("horarioSabado", body.horarioSabado);
    formData.append("horarioDomingo", body.horarioDomingo);
    formData.append("fotoLogo", body.fotoLogo);
    formData.append("fotoLocal1", body.fotoLocal1);
    formData.append("fotoLocal2", body.fotoLocal2);
    formData.append("fotoLocal3", body.fotoLocal3);
    formData.append("fotoLocal4", body.fotoLocal4);
    formData.append("paginaWeb", body.paginaWeb);
    formData.append("usuarioId", body.usuarioId);
    const response = await fetch(
      `http://127.0.0.1:5000/establecimientos-put-del-admin/${id}`,
      {
        method: "PUT",
        // headers: {
        //   "content-type": "application/json",
        // },
        // body: JSON.stringify(body),
        headers: {
          Authorization: "Bearer " + token,
        },
        body: formData,
      }
    );

    if (!response.ok) return false;

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteAdminEstablecimiento = async (id, token) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:5000/establecimientos-put-del-admin/${id}`,
      {
        method: "DELETE",
        // headers: {
        //   "content-type": "application/json",
        // },
        headers: {
          Authorization: "Bearer " + token,
        },
        // body: JSON.stringify(body),
      }
    );

    if (!response.ok) return false;

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteEstablecimiento = async (id, token) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:5000/establecimiento-miInformacion/${id}`,
      {
        method: "DELETE",
        // headers: {
        //   "content-type": "application/json",
        // },
        headers: {
          Authorization: "Bearer " + token,
        },
        // body: JSON.stringify(body),
      }
    );

    if (!response.ok) return false;

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
