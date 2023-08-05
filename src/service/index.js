const url = "http://127.0.0.1:5000";

export const get = async () => {
  try {
    const response = await fetch(`${url}/usuarios`);
    if (!response.ok) {
      console.error(
        `Error en la solicitud. Código de estado: ${response.status}`
      );
      return null;
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      console.error("Respuesta no válida en formato JSON");
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en la solicitud:", error);
    return null;
  }
};

const urlSignUp = "http://127.0.0.1:5000/registro-usuario";
export const postRegistro = async (body) => {
  try {
    const response = await fetch(urlSignUp, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) return false;

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const urlLogin = "http://127.0.0.1:5000/iniciar-sesion";
export const postLogin = async (body) => {
  try {
    const response = await fetch(urlLogin, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) return false;

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

const urlPerfil = "http://127.0.0.1:5000/perfil";
export const getPerfil = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(urlPerfil, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (!response.ok) return false;

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const putPerfil = async (id, body) => {
  try {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    const response = await fetch(`http://127.0.0.1:5000/perfil/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) return false;

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const borrarPerfil = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");

    const response = await fetch(`http://127.0.0.1:5000/perfil/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) return false;

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
