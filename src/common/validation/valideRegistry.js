import { postNewRegistry } from "../services/myWalletServices";
import toast from "react-hot-toast";

export default async function valideRegistry(data, type, token) {
  if (!data.money || !data.description) {
    toast.error("Preencha todos os campos!");
  } else {
    try {
      const response = await postNewRegistry(data, type, token);
      console.log(response);
      toast.success("Registro inserido!");
    } catch (err) {
      if (err.message.includes(401)) {
        toast.error("Não autorizado, faça login!");
      } else if (err.message.includes(422)) {
        toast.error("Dados incorretos!");
      } else if (err.message.includes(500)) {
        toast.error("Houve um erro com o servidor");
      } else {
        toast.error("Erro desconhecido! Atualize a página.");
      }
    }
  }
  return;
}
