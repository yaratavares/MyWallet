import { useEffect, useState } from "react";

import { getRegistry } from "../../common/services/myWalletServices";
import { Aregistration, BoxRegistry, Result } from "./style";

export default function Registry(token) {
  const [registers, setRegisters] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    if (registers.length === 0) {
      const promise = getRegistry(token.token);
      promise.then((response) => {
        setRegisters(response.data);
      });
    } else {
      let addMoney = 0;
      registers.map((register) =>
        register.type === "income"
          ? (addMoney += parseInt(register.money))
          : (addMoney -= parseInt(register.money))
      );
      setSum(addMoney);
    }

    // eslint-disable-next-line
  }, [registers]);

  return (
    <BoxRegistry>
      {registers.length ? (
        <>
          <div className="listRegistry">
            {registers.map((register, index) => (
              <Aregistration key={index} color={register.type}>
                <p className="date">{register.date}</p>
                <p className="name">{register.description}</p>
                <p className="money">{register.money}</p>
              </Aregistration>
            ))}
          </div>
          <Result color={sum}>
            <p>SALDO</p>
            <span className="money">{Math.abs(sum)}</span>
          </Result>
        </>
      ) : (
        <span>
          Não há registros de
          <br /> entrada ou saída
        </span>
      )}
    </BoxRegistry>
  );
}
