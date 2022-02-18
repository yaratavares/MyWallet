import { userRegistration } from "../services/myWalletServices";
import toast from "react-hot-toast";

export default async function valideRegistration(data) {
  const regex = /[a-zA-Z0-9$*&@#]{8,}/;

  if (!data.name || !data.email || !data.password) {
    toast.error("Preencha todos os campos!");
    return;
  }

  if (!regex.test(data.password)) {
    toast.error("Senha com ao menos 8 caracteres!");
    return;
  }

  if (data.password !== data.password_confirm) {
    toast.error("As senhas precisam ser iguais!");
    return;
  }

  try {
    const redirect = await userRegistration(data);
    toast.success("Cadastro realizado!");
    return redirect;
  } catch (err) {
    if (err.message.includes(409)) {
      toast.error("E-mail já cadastrado!");
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
