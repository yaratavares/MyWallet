import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { UserToken } from "../../common/contexts/UserToken";
import { userLogin } from "../../common/services/myWalletServices";

import Buttons from "../../components/Buttons";
import Inputs from "../../components/Inputs";
import PageInitContainer from "../../common/style/PageInitContainer";

export default function PageLogin() {
  const inputs = [
    { field: "email", text: "E-mail" },
    { field: "password", text: "Senha" },
  ];
  const [data, setData] = useState({});
  const [wait, setWait] = useState(false);
  const { setToken } = useContext(UserToken);
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();

    setWait(true);

    try {
      const token = await userLogin(data);
      setToken(token);

      navigate("/registros");
    } catch (err) {
      setWait(false);
      console.log("Houve erro em fazer login, tente Novamente!");
    }
  }

  return (
    <PageInitContainer>
      <h1>MyWallet</h1>
      <form onSubmit={login}>
        <Inputs inputs={inputs} data={data} setData={setData} />
        <Buttons buttonName={"Entrar"} showLoader={wait} />
      </form>
      <Link to="/cadastro">
        <p>Primeira vez? Cadastre-se!</p>
      </Link>
    </PageInitContainer>
  );
}
