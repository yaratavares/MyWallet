import { useEffect, useState } from "react";
import Result from "./style";

export default function ResultSum({ registers }) {
  const [sum, setSum] = useState(0);

  useEffect(() => {
    let addMoney = 0;
    registers.map((register) =>
      register.type === "income"
        ? (addMoney += Number(register.money))
        : (addMoney -= Number(register.money))
    );
    setSum(addMoney);

    // eslint-disable-next-line
  }, []);

  return (
    <Result color={sum}>
      <p>SALDO</p>
      <span className="money">
        {Number(Math.abs(sum)).toFixed(2).replace(".", ",")}
      </span>
    </Result>
  );
}
