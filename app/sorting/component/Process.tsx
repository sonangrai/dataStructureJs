import { inputAtom } from "app/sorting/store";
import { useAtom } from "jotai";
import { useState } from "react";

function Process({ logic }: { logic: (i: number[]) => string }) {
  const [input, setInput] = useAtom(inputAtom);
  const [error, setError] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const execute = () => {
    setOutput("");
    if (input == "") return setError("Please input data");
    const inp = input.split(",").map((el) => Number(el));
    setOutput(() => logic(inp));
  };

  return (
    <div className="flex p-4 border flex-col gap-4 bg-gray-50">
      <div>
        <h4 className="font-medium text-gray-600 text-[18px]">Live Example</h4>

        <hr className="my-2" />

        <p className="text-[14px] text-gray-700">
          {
            " Input the list of array's to check the output as per the sorting algorithm. For eg: 9,4,12,56,7,8,43,1,23 "
          }
        </p>
      </div>

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
        <div className="p-2 border text-green-600 text-[16px]">
          {"Output ->"} {output}
        </div>
      )}
    </div>
  );
}

export default Process;
