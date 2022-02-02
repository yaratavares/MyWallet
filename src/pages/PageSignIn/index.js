import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Buttons from "../../components/Buttons";
import Inputs from "../../components/Inputs";
import PageInitContainer from "../../common/style/PageInitContainer";

export default function PageSignIn() {
  const inputs = [
    { field: "name", text: "Nome" },
    { field: "email", text: "E-mail" },
    { field: "password", text: "Senha" },
    { field: "password", text: "Confirme a senha" },
  ];
  const [data, setData] = useState({});
  const navigate = useNavigate();

  async function signin(event) {
    event.preventDefault();

    try {
      navigate("/registros");
    } catch (err) {
      console.log("Houve erro na sua requisição");
    }
  }

  return (
    <PageInitContainer>
      <h1>MyWallet</h1>
      <form onSubmit={signin}>
        <Inputs inputs={inputs} data={data} setData={setData} />
        <Buttons buttonName={"Cadastrar"} />
      </form>
      <Link to="/">
        <p>Já tem uma conta? Entre agora!</p>
      </Link>
    </PageInitContainer>
  );
}
