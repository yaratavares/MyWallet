import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import { UserToken } from "../../common/contexts/UserToken";
import valideLogin from "../../common/validation/valideLogin";

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
  const { setAndPersistToken } = useContext(UserToken);
  const navigate = useNavigate();
  const { state } = useLocation({});

  useEffect(() => {
    if (state === "redirected") {
      toast.error("Faça login primeiro!");
      navigate("/", { state: null });
    }
    //eslint-disable-next-line
  }, []);

  async function login(event) {
    event.preventDefault();
    setWait(true);

    await valideLogin(data, setAndPersistToken, navigate);

    setWait(false);
  }

  return (
    <PageInitContainer>
      <h1>MyWallet</h1>
      <form onSubmit={login} noValidate>
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
