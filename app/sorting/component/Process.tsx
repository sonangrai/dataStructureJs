import { inputAtom } from "app/sorting/store";
import { useAtom } from "jotai";
import { useState } from "react";

function Process() {
  const [input, setInput] = useAtom(inputAtom);
  const [error, setError] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const execute = () => {
    setOutput("");
    if (input == "") return alert("Please input data");
    setOutput(input);
  };

  return (
    <div className="flex flex-col gap-4">
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
        <button className="py-2 px-4 bg-blue-800 text-white" onClick={execute}>
          Submit
        </button>
      </div>

      {output != "" && (
        <div className="border border-green-600 p-2 text-green-600">
          {output}
        </div>
      )}
    </div>
  );
}

export default Process;
