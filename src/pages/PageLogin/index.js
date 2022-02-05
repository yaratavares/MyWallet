import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import { UserToken } from "../../common/contexts/UserToken";
import { userLogin } from "../../common/services/myWalletServices";

import Buttons from "../../components/Buttons";
import Inputs from "../../components/Inputs";
import PageInitContainer from "../../common/style/PageInitContainer";

export default function PageLogin() {
  const inputs = [
    { field: "email", name: "email", text: "E-mail" },
    { field: "password", name: "password", text: "Senha" },
  ];
  const [data, setData] = useState({});
  const [wait, setWait] = useState(false);
  const { setToken } = useContext(UserToken);
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    setWait(true);

    if (!data.email.length || !data.password.length) {
      toast.error("Preencha todos os campos!");
    } else {
      try {
        const result = await userLogin(data);

        setToken(result.data);
        navigate("/registros");
      } catch (err) {
        if (err.message.includes(404)) {
          toast.error("Dados incorretos!");
        } else if (err.message.includes(422)) {
          toast.error("Dados incorretos!");
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
      <form onSubmit={login}>
        <Inputs inputs={inputs} data={data} setData={setData} />
        <Buttons buttonName={"Entrar"} showLoader={wait} />
      </form>
      <Link to="/cadastro">
        <p>Primeira vez? Cadastre-se!</p>
      </Link>
      <Toaster toastOptions={{ className: "toastModifications" }} />
    </PageInitContainer>
  );
}
