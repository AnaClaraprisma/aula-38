import api from "./api.js";

const rota = "http://localhost:3000/uploads/";

async function usuarioLogado() {
    try {
        const perfil = await api("usuarios/9");
        console.log(perfil)
        
      document.getElementById("foto").src = rota + perfil.imagem ;


    } catch (error) {
        console.error(error);
      }
}


export default usuarioLogado;





