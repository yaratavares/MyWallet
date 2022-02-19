import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import OneRegistry from "../OneRegistry";
import { getRegistry } from "../../common/services/myWalletServices";
import BoxRegistry from "./style";
import ResultSum from "../ResultSum";

export default function Registry(token) {
  const navigate = useNavigate();
  const [registers, setRegisters] = useState([]);

  useEffect(() => {
    if (!token.token) {
      navigate("/", { state: "redirected" });
      return;
    }

    if (registers.length === 0) {
      initRegistry();
      return;
    }

    // eslint-disable-next-line
  }, [registers]);

  async function initRegistry() {
    try {
      const response = await getRegistry(token.token);
      setRegisters(response.data);
    } catch {
      toast.error("Erro desconhecido. Atualize a página!");
    }
  }

  return (
    <BoxRegistry>
      {registers.length ? (
        <>
          <div className="listRegistry">
            {registers.map((register) => (
              <OneRegistry
                key={register._id}
                register={register}
                initRegistry={initRegistry}
              />
            ))}
          </div>
          <ResultSum registers={registers} />
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
