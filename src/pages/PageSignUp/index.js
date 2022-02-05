import { useState } from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Buttons from "../../components/Buttons";
import Inputs from "../../components/Inputs";
import PageInitContainer from "../../common/style/PageInitContainer";
import valideRegistration from "../../common/validation/valideRegistration";

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

    await valideRegistration(data);

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
