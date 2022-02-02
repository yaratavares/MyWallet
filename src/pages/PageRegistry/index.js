import { BoxNewRegistry, ContainerRegistry, HeaderUser } from "./style";
import { IoExitOutline } from "react-icons/io5";
import { BsDashCircle, BsPlusCircle } from "react-icons/bs";
import Registry from "../../components/Registry";

export default function PageRegistry() {
  return (
    <ContainerRegistry>
      <HeaderUser>
        <h2>Olá, Fulano</h2>
        <IoExitOutline />
      </HeaderUser>
      <Registry />
      <BoxNewRegistry>
        <div>
          <span>
            <BsPlusCircle />
          </span>
          <p>
            Nova
            <br />
            entrada
          </p>
        </div>
        <div>
          <span>
            <BsDashCircle />
          </span>
          <p>
            Nova
            <br />
            saída
          </p>
        </div>
      </BoxNewRegistry>
    </ContainerRegistry>
  );
}
