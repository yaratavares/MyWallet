import { BsDashCircle, BsPlusCircle } from "react-icons/bs";
import { BoxNewRegistry } from "./style";

export default function ButtonsNewRegistry() {
  return (
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
  );
}
