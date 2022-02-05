import { useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import { userRegistration } from "../../common/services/myWalletServices";
import Buttons from "../../components/Buttons";
import Inputs from "../../components/Inputs";
import PageInitContainer from "../../common/style/PageInitContainer";

export default function PageSignUp() {
  const inputs = [
    { field: "text", name: "name", text: "Nome" },
    { field: "email", name: "email", text: "E-mail" },
    { field: "password", name: "password", text: "Senha" },
    { field: "password", name: "password_confirm", text: "Confirme a senha" },
  ];
  const [data, setData] = useState({});
  const [wait, setWait] = useState(false);

  async function signUp(event) {
    event.preventDefault();
    setWait(true);
    const regex = /[a-zA-Z0-9$*&@#]{8,}/;

    if (!regex.test(data.password)) {
      toast.error("Senha com ao menos 8 caracteres!");
    } else if (data.password !== data.password_confirm) {
      console.log(data);
      toast.error("As senhas precisam ser iguais!");
    } else if (
      !data.name.length ||
      !data.email.length ||
      !data.password.length
    ) {
      toast.error("Preencha todos os campos!");
    } else {
      try {
        await userRegistration(data);
        toast.success("Cadastro realizado!");
      } catch (err) {
        if (err.message.includes(409)) {
          toast.error("E-mail já cadastrado!");
        } else if (err.message.includes(500)) {
          toast.error("Houve um erro com o servidor");
        } else {
          toast.error("Erro desconhecido! Atualize a página.");
        }
      }
    }
    setWait(false);
  }

  return (
    <PageInitContainer>
      <h1>MyWallet</h1>
      <form onSubmit={signUp}>
        <Inputs inputs={inputs} data={data} setData={setData} />
        <Buttons buttonName={"Cadastrar"} showLoader={wait} />
      </form>
      <Link to="/">
        <p>Já tem uma conta? Entre agora!</p>
      </Link>
      <Toaster toastOptions={{ className: "toastModifications" }} />
    </PageInitContainer>
  );
}
