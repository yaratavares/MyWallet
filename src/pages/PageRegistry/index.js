import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoExitOutline } from "react-icons/io5";

import Registry from "../../components/Registry";
import ButtonsNewRegistry from "../../components/ButtonsNewRegistry";

import { UserToken } from "../../common/contexts/UserToken";
import PageRegistryContainer from "../../common/style/PageRegistryContainer";
import TitleNames from "../../common/style/TitleNames";

export default function PageRegistry() {
  const { token } = useContext(UserToken);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token.name) {
      navigate("/", { state: "redirected" });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <PageRegistryContainer>
      <TitleNames>
        <h2>Olá, {token.name}</h2>
        <IoExitOutline />
      </TitleNames>
      <Registry token={token.token} />
      <ButtonsNewRegistry />
    </PageRegistryContainer>
  );
}
