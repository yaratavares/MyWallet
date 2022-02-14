import { ThreeDots } from "react-loader-spinner";

export default function Buttons({ buttonName, showLoader }) {
  return (
    <button
      type="submit"
      className="fontForms"
      disabled={showLoader ? true : false}
    >
      {showLoader ? (
        <ThreeDots color="white" height={60} width={60} />
      ) : (
        buttonName
      )}
    </button>
  );
}
