import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import toastWithButton from "../ToastWithButton";
import { UserToken } from "../../common/contexts/UserToken";
import { RegistryContent } from "../../common/contexts/RegistryContent";
import { deleteRegistry } from "../../common/services/myWalletServices";
import Aregistration from "./style";

export default function OneRegistry({ register, initRegistry }) {
  const { token } = useContext(UserToken);
  const { setUpdateRegistry } = useContext(RegistryContent);
  const navigate = useNavigate();

  function confirmDelete(id) {
    toastWithButton("Apagar registro?", "Delete", realyDelete);

    async function realyDelete(toastId) {
      toast.dismiss(toastId);

      try {
        await deleteRegistry(id, token.token);
        initRegistry();

        toast.success("Registro apagado!");
      } catch (err) {
        toast.error("Erro desconhecido! Atualize a página");
      }
    }
  }

  function clickDescription(register) {
    toastWithButton("Apagar registro?", "Alterar", realyUpdate);

    function realyUpdate(toastId) {
      toast.dismiss(toastId);

      setUpdateRegistry(register);
      navigate("/registros/editar");
    }
  }

  return (
    <Aregistration color={register.type}>
      <p className="date">{register.date}</p>
      <p className="name" onClick={() => clickDescription(register)}>
        {register.description}
      </p>
      <p className="money">
        {Number(register.money).toFixed(2).replace(".", ",")}
      </p>
      <p className="delete" onClick={() => confirmDelete(register._id)}>
        x
      </p>
    </Aregistration>
  );
}
