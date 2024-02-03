import { useState } from "react";

function InputField() {
  const [input, setInput] = useState<string>("");
  const [error, setError] = useState<string>("");

  // Submit Handler
  const submitHandle = (e) => {
    e.preventDefault();
    setError("");
    if (input == "") return setError("Please enter input to process");
    alert(input);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={submitHandle}>
      <div className="border">
        <input
          className="p-2 w-full"
          type="text"
          placeholder="Add your input's here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      {error != "" && <div className="text-red-500 text-[12px]">{error}</div>}

      <div className="text-center">
        <button className="py-2 px-4 bg-blue-800 text-white">Submit</button>
      </div>
    </form>
  );
}

export default InputField;
