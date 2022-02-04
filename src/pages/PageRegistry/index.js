import Registry from "../../components/Registry";
import ButtonsNewRegistry from "../../components/ButtonsNewRegistry";

import { IoExitOutline } from "react-icons/io5";
import PageRegistryContainer from "../../common/style/PageRegistryContainer";
import TitleNames from "../../common/style/TitleNames";

export default function PageRegistry() {
  return (
    <PageRegistryContainer>
      <TitleNames>
        <h2>Olá, Fulano</h2>
        <IoExitOutline />
      </TitleNames>
      <Registry />
      <ButtonsNewRegistry />
    </PageRegistryContainer>
  );
}
