import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import dayjs from "dayjs";
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

  const [data, setData] = useState({ date: dayjs().format("DD/MM") });
  const [type, setType] = useState({});
  const [wait, setWait] = useState(false);
  const navigate = useNavigate();
  const { token } = useContext(UserToken);
  const { outflowMoney } = useContext(RegistryType);

  useEffect(() => {
    if (!token.name || outflowMoney === null) {
      navigate("/", { state: "redirected" });
    }
    if (outflowMoney) {
      setType({ ...type, type: "income", name: "entrada" });
    } else {
      setType({ ...type, type: "outflow", name: "saída" });
    }

    // eslint-disable-next-line
  }, []);

  async function submitRegistry(event) {
    event.preventDefault();

    setWait(true);

    await valideRegistry(data, type, token.token);

    setWait(false);
  }

  return (
    <PageRegistryContainer>
      <TitleNames>
        <h2>{`Nova ${type.name}`}</h2>
        <BsArrowLeft onClick={() => navigate("/registros")} />
      </TitleNames>
      <form onSubmit={submitRegistry} noValidate>
        <Inputs inputs={inputs} data={data} setData={setData} />
        <Buttons buttonName={`Salvar ${type.name}`} showLoader={wait} />
      </form>
      <Toaster toastOptions={{ className: "toastModifications" }} />
    </PageRegistryContainer>
  );
}
