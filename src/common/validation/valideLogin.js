import { userLogin } from "../services/myWalletServices";
import toast from "react-hot-toast";

export default async function valideLogin(data, setAndPersistToken, navigate) {
  if (!data.email || !data.password) {
    toast.error("Preencha todos os campos!");
  } else if (!data.email.includes("@")) {
    toast.error("E-mail incorreto!");
  } else {
    try {
      const result = await userLogin(data);

      setAndPersistToken(result.data);
      navigate("/registros");
    } catch (err) {
      if (err.message.includes(404)) {
        toast.error("Dados incorretos!");
      } else if (err.message.includes(401)) {
        toast.error("Senha incorreta!");
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
