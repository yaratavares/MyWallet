import { editRegistry } from "../services/myWalletServices";
import toast from "react-hot-toast";

export default async function valideUpdateRegistry(id, data, token) {
  if (!data.money || !data.description) {
    toast.error("Preencha todos os campos!");
  }

  try {
    const moneyValidate = data.money.replace(",", ".");
    const redirect = await editRegistry(
      id,
      { ...data, money: moneyValidate },
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
