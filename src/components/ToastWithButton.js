import toast from "react-hot-toast";

export default function ToastWithButton({
  question,
  nameButton,
  clickFunction,
}) {
  return toast((t) => (
    <span>
      {question}
      <button onClick={() => clickFunction(t.id)}>{nameButton}</button>
    </span>
  ));
}
