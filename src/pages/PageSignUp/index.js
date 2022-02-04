import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userRegistration } from "../../common/services/myWalletServices";

import Buttons from "../../components/Buttons";
import Inputs from "../../components/Inputs";
import PageInitContainer from "../../common/style/PageInitContainer";

export default function PageSignUp() {
  const inputs = [
    { field: "text", name: "name", text: "Nome" },
    { field: "email", name: "email", text: "E-mail" },
    { field: "password", name: "password", text: "Senha" },
    { field: "password", name: "password-confirm", text: "Confirme a senha" },
  ];
  const [data, setData] = useState({});
  const [wait, setWait] = useState(false);
  const navigate = useNavigate();

  async function signUp(event) {
    event.preventDefault();

    setWait(true);

    try {
      await userRegistration(data);

      navigate("/");
    } catch (err) {
      setWait(false);
      console.log("Houve erro no cadastro, tente Novamente!");
    }
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
    </PageInitContainer>
  );
}
