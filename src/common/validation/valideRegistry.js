import { postNewRegistry } from "../services/myWalletServices";
import toast from "react-hot-toast";

export default async function valideRegistry(data, type, token) {
  if (!data.money || !data.description) {
    toast.error("Preencha todos os campos!");
  }

  try {
    const moneyValidate = data.money.replace(",", ".");
    const redirect = await postNewRegistry(
      { ...data, money: moneyValidate },
      type,
      token
    );
    toast.success("Registro inserido!");
    return redirect;
  } catch (err) {
    if (err.message.includes(401)) {
      toast.error("Não autorizado, faça login!");
      return;
    }

    if (err.message.includes(422)) {
      toast.error("Dados incorretos!");
      return;
    }

    if (err.message.includes(500)) {
      toast.error("Houve um erro com o servidor");
      return;
    }
    toast.error("Erro desconhecido! Atualize a página.");
    return;
  }
}
