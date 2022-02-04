export default function Inputs({ inputs, data, setData }) {
  function keyboardAnswer(input) {
    setData({ ...data, [input.name]: input.value });
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
          autoComplete="on"
          required
        />
      ))}
    </>
  );
}
