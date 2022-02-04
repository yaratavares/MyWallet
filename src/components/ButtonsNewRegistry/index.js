import { useContext, useEffect } from "react";
import { BsDashCircle, BsPlusCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { RegistryType } from "../../common/contexts/RegistryType";
import { BoxNewRegistry } from "./style";

export default function ButtonsNewRegistry() {
  const { outflowMoney, setOutflowMoney } = useContext(RegistryType);
  const navigate = useNavigate();

  function clickButton(trueOrFalse) {
    setOutflowMoney(trueOrFalse);
    navigate("/registros/novo");
  }

  return (
    <BoxNewRegistry>
      <div onClick={() => clickButton(true)}>
        <span>
          <BsPlusCircle />
        </span>
        <p>
          Nova
          <br />
          entrada
        </p>
      </div>
      <div onClick={() => clickButton(false)}>
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
  );
}
