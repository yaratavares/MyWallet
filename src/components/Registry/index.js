import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { RegistryContent } from "../../common/contexts/RegistryContent";

import {
  deleteRegistry,
  getRegistry,
} from "../../common/services/myWalletServices";
import { Aregistration, BoxRegistry, Result } from "./style";

export default function Registry(token) {
  const navigate = useNavigate();
  const [registers, setRegisters] = useState([]);
  const [updatePage, setupdatePage] = useState(false);
  const [sum, setSum] = useState(0);
  const { setUpdateRegistry } = useContext(RegistryContent);

  useEffect(() => {
    if (!token.token) {
      navigate("/", { state: "redirected" });
    } else if (registers.length === 0 || updatePage === "update") {
      const promise = getRegistry(token.token);
      promise.then((response) => {
        setRegisters(response.data);
        setupdatePage(false);
      });
    } else {
      let addMoney = 0;
      registers.map((register) =>
        register.type === "income"
          ? (addMoney += Number(register.money))
          : (addMoney -= Number(register.money))
      );
      setSum(addMoney);
    }

    // eslint-disable-next-line
  }, [registers, updatePage]);

  function confirmDelete(id) {
    toast((t) => (
      <span>
        Apagar registro?
        <button onClick={() => realyDelete(t.id)}>Delete</button>
      </span>
    ));

    async function realyDelete(toastId) {
      toast.dismiss(toastId);

      try {
        await deleteRegistry(id, token.token);
        setupdatePage("update");

        toast.success("Registro apagado!");
      } catch (err) {
        toast.error("Erro desconhecido! Atualize a página");
      }
    }
  }

  function clickDescription(register) {
    console.log(register);
    setUpdateRegistry(register);
    navigate("/registros/editar");
  }

  return (
    <BoxRegistry>
      {registers.length ? (
        <>
          <div className="listRegistry">
            {registers.map((register, index) => (
              <Aregistration key={index} color={register.type}>
                <p className="date">{register.date}</p>
                <p className="name" onClick={() => clickDescription(register)}>
                  {register.description}
                </p>
                <p className="money">
                  {Number(register.money).toFixed(2).replace(".", ",")}
                </p>
                <p
                  className="delete"
                  onClick={() => confirmDelete(register._id)}
                >
                  x
                </p>
              </Aregistration>
            ))}
          </div>
          <Result color={sum}>
            <p>SALDO</p>
            <span className="money">
              {Number(Math.abs(sum)).toFixed(2).replace(".", ",")}
            </span>
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
