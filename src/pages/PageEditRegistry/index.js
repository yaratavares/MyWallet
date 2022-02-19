import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { BsArrowLeft } from "react-icons/bs";

import { UserToken } from "../../common/contexts/UserToken";
import { RegistryContent } from "../../common/contexts/RegistryContent";
import valideUpdateRegistry from "../../common/validation/valideUpdateRegistry";
import PageRegistryContainer from "../../common/style/PageRegistryContainer";
import TitleNames from "../../common/style/TitleNames";

import Buttons from "../../components/Buttons";
import Inputs from "../../components/Inputs";

export default function PageEditRegistry() {
  const [data, setData] = useState({});
  const [type, setType] = useState({});
  const [wait, setWait] = useState(false);
  const navigate = useNavigate();
  const { token } = useContext(UserToken);
  const { updateRegistry } = useContext(RegistryContent);
  const inputs = updateRegistry
    ? [
        {
          field: "text",
          name: "money",
          text: "Valor",
          valueDefined: updateRegistry.money,
        },
        {
          field: "text",
          name: "description",
          text: "Descrição",
          valueDefined: updateRegistry.description,
        },
      ]
    : [];
  console.log(updateRegistry);

  useEffect(() => {
    if (!token.name) {
      navigate("/", { state: "redirected" });
      return;
    }

    if (!updateRegistry || updateRegistry.length === 0) {
      navigate("/registros");
      return;
    }

    if (updateRegistry.type === "income") {
      setType({ ...type, type: "income", name: "entrada" });
    } else {
      setType({ ...type, type: "outflow", name: "saída" });
    }

    setData({
      money: updateRegistry.money,
      description: updateRegistry.description,
    });

    // eslint-disable-next-line
  }, []);

  async function submitRegistry(event) {
    event.preventDefault();

    setWait(true);

    const redirect = await valideUpdateRegistry(
      updateRegistry._id,
      data,
      token.token
    );

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
  console.log(data);

  return (
    <PageRegistryContainer>
      <TitleNames>
        <h2>{`Editar ${type.name}`}</h2>
        <BsArrowLeft
          className="iconTheme"
          onClick={() => navigate("/registros")}
        />
      </TitleNames>
      <form onSubmit={submitRegistry} noValidate>
        <Inputs inputs={inputs} data={data} setData={setData} />
        <Buttons buttonName={`Atualizar ${type.name}`} showLoader={wait} />
      </form>
      <Toaster toastOptions={{ className: "toastModifications" }} />
    </PageRegistryContainer>
  );
}
