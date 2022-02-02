import { useState } from "react";
import { Link } from "react-router-dom";

import Buttons from "../../common/components/Buttons";
import Inputs from "../../common/components/Inputs";
import PageInitContainer from "../../common/style/PageInitContainer";

export default function PageSignIn() {
  const inputs = [
    { field: "name", text: "Nome" },
    { field: "email", text: "E-mail" },
    { field: "password", text: "Senha" },
    { field: "password", text: "Confirme a senha" },
  ];
  const [data, setData] = useState({});

  return (
    <PageInitContainer>
      <h1>MyWallet</h1>
      <form>
        <Inputs inputs={inputs} data={data} setData={setData} />
        <Buttons buttonName={"Cadastrar"} />
      </form>
      <Link to="/">
        <p>Já tem uma conta? Entre agora!</p>
      </Link>
    </PageInitContainer>
  );
}
