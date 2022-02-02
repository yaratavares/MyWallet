import { Aregistration, BoxRegistry, Result } from "./style";

export default function Registry() {
  const registers = [
    {
      date: "30/11",
      newRegistry: "Almoço mãe",
      money: "39,90",
      type: "output",
    },
    { date: "27/11", newRegistry: "Mercado", money: "39,90", type: "output" },
    {
      date: "26/11",
      newRegistry: "Compras churrasco lalalalaalala alalalal",
      money: "39,90",
      type: "output",
    },
    {
      date: "20/11",
      newRegistry: "Empréstimo Maria",
      money: "39,90",
      type: "input",
    },
    { date: "15/11", newRegistry: "Salário", money: "39,90", type: "input" },
  ];

  return (
    <BoxRegistry>
      {registers.length ? (
        <div>
          {registers.map((register) => (
            <Aregistration>
              <p className="date">{register.date}</p>
              <p className="name">{register.newRegistry}</p>
              <p className="money">{register.money}</p>
            </Aregistration>
          ))}
          <Result>
            <p>SALDO</p>
            <span className="money">2849,96</span>
          </Result>
        </div>
      ) : (
        <span>
          Não há registros de
          <br /> entrada ou saída
        </span>
      )}
    </BoxRegistry>
  );
}