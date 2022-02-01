import { ThreeDots } from "react-loader-spinner";

export default function Buttons({ buttonName }) {
  return (
    <button type="submit" className="fontForms">
      <ThreeDots color="white" height={60} width={60} />
    </button>
  );
}
