import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Buttons from "../../components/Buttons";
import Inputs from "../../components/Inputs";

import { RegistryType } from "../../common/contexts/RegistryType";
import { postNewRegistry } from "../../common/services/myWalletServices";
import PageRegistryContainer from "../../common/style/PageRegistryContainer";
import TitleNames from "../../common/style/TitleNames";

export default function PageNewRegistry() {
  const inputs = [
    { field: "text", name: "money", text: "Valor" },
    { field: "text", name: "description", text: "Descrição" },
  ];

  const [data, setData] = useState({});
  const [wait, setWait] = useState(false);
  const navigate = useNavigate();
  const { outflowMoney } = useContext(RegistryType);

  if (outflowMoney) {
    var registerType = "entrada";
  } else {
    var registerType = "saída";
  }

  async function submitRegistry(event) {
    event.preventDefault();

    setWait(true);

    try {
      await postNewRegistry(data);

      navigate("/registros");
    } catch (err) {
      setWait(false);
      console.log("Houve erro no cadastro do registro, tente Novamente!");
    }
  }

  return (
    <PageRegistryContainer>
      <TitleNames>
        <h2>{`Nova ${registerType}`}</h2>
      </TitleNames>
      <form onSubmit={submitRegistry}>
        <Inputs inputs={inputs} data={data} setData={setData} />
        <Buttons buttonName={`Salvar ${registerType}`} showLoader={wait} />
      </form>
    </PageRegistryContainer>
  );
}
