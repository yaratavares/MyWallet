export default function Inputs({ inputs, data, setData }) {
  function keyboardAnswer(keyboard, input) {
    setData({ ...data, [input.name]: keyboard.value });
  }

  return (
    <>
      {inputs.map((input, index) => (
        <input
          key={index}
          type={input.field}
          onChange={(e) => keyboardAnswer(e.target, input)}
          placeholder={input.text}
          className="fontForms"
          autoComplete="on"
          required
        />
      ))}
    </>
  );
}
