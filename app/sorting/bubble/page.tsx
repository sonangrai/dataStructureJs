"use client";
import Article from "components/common/Article";
import Process from "../component/Process";
import bubbleSortFn from "./logic";
import file from "./logic.ts";

function page() {
  return (
    <>
      <article className="mb-2">
        <Article title="Bubble Sorting" description={document} />
      </article>
      <Process logic={bubbleSortFn} />
    </>
  );
}

export default page;

const document = `
  <p class="text-[16px] font-light"> 
    Bubble sort is the most common and simplest sorting algorithm. This algorithm compares the <b>adjacent</b> item and switch if needed.
  </p>
  <div class="bg-gray-200 my-4 p-4">
    <h4 class="font-bold">Algorithm</h4>
    <ul class="list-disc p-4">
      <li>
        Go from left to right of an array.
        <ol class="list-decimal pl-4 text-gray-600">
          <li>If first element is bigger than second one swap the positions. If not move to next.</li>
          <li>Continue till the largest element will move to the rightmost of an array.</li>
        </ol>
      </li>
      <li>Continue for another item till all items are checked.</li>
    </ul>
  </div>
  <pre class="bg-slate-600 p-2 text-white my-4 text-[14px]">
  ${file}
  </pre>
`;
