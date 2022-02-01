export default function Inputs({ inputs, data, setData }) {
  function keyboardAnswer(input) {
    setData({ ...data, [input.type]: input.value });
  }

  return (
    <>
      {inputs.map((input, index) => (
        <input
          key={index}
          type={input.field}
          onChange={(e) => keyboardAnswer(e.target)}
          placeholder={input.text}
          className="fontForms"
          required
        />
      ))}
    </>
  );
}
