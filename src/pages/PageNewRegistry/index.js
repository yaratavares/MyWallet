import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { BsArrowLeft } from "react-icons/bs";

import valideRegistry from "../../common/validation/valideRegistry";
import { RegistryType } from "../../common/contexts/RegistryType";
import { UserToken } from "../../common/contexts/UserToken";
import PageRegistryContainer from "../../common/style/PageRegistryContainer";
import TitleNames from "../../common/style/TitleNames";

import Buttons from "../../components/Buttons";
import Inputs from "../../components/Inputs";

export default function PageNewRegistry() {
  const inputs = [
    { field: "text", name: "money", text: "Valor" },
    { field: "text", name: "description", text: "Descrição" },
  ];

  const [data, setData] = useState({});
  const [type, setType] = useState({});
  const [wait, setWait] = useState(false);
  const navigate = useNavigate();
  const { token } = useContext(UserToken);
  const { outflowMoney } = useContext(RegistryType);

  useEffect(() => {
    if (!token.name) {
      navigate("/", { state: "redirected" });
    } else if (outflowMoney === null) {
      navigate("/registros");
    } else if (outflowMoney) {
      setType({ ...type, type: "income", name: "entrada" });
    } else {
      setType({ ...type, type: "outflow", name: "saída" });
    }

    // eslint-disable-next-line
  }, []);

  async function submitRegistry(event) {
    event.preventDefault();

    setWait(true);

    const redirect = await valideRegistry(data, type, token.token);

    if (redirect) {
      setTimeout(() => {
        if (redirect) {
          navigate("/registros");
        }
      }, 1000);
    } else {
      setWait(false);
    }
  }

  return (
    <PageRegistryContainer>
      <TitleNames>
        <h2>{`Nova ${type.name}`}</h2>
        <BsArrowLeft
          className="iconTheme"
          onClick={() => navigate("/registros")}
        />
      </TitleNames>
      <form onSubmit={submitRegistry} noValidate>
        <Inputs inputs={inputs} data={data} setData={setData} />
        <Buttons buttonName={`Salvar ${type.name}`} showLoader={wait} />
      </form>
      <Toaster toastOptions={{ className: "toastModifications" }} />
    </PageRegistryContainer>
  );
}
