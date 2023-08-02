const url = "http://127.0.0.1:5000";

export const get = async () => {
  try {
    const response = await fetch(`${url}/usuarios`);
    if (!response.ok) {
      console.error(`Error en la solicitud. Código de estado: ${response.status}`);
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

const urlSignUp = "http://127.0.0.1:5000/registro-usuario"
export const post = async(body) => {
  try{
    const response = await fetch (urlSignUp,{
      method:"POST",
      headers:{
        "content-type":"application/json",
      },
      body:JSON.stringify(body),
    });

    if (!response.ok) return false;
    
    const data = await response.json();

    return data;
  } catch (error){
    console.error(error);
  }
};

export const put = async (id, body) => {
  try {
      const response = await fetch(`${url}/${id}`, {
          method: "PUT",
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