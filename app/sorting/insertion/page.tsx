"use client";
import Article from "components/common/Article";
import Process from "../component/Process";
import insertionSortFn from "./logic";
import file from "./logic.ts";

function page() {
  return (
    <>
      <article className="mb-2">
        <Article title="Insertion Sorting" description={document} />
      </article>
      <Process logic={insertionSortFn} />
    </>
  );
}

export default page;

const document = `
  <p class="text-[16px] font-light"> 
    Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.
  </p>
  <pre class="bg-slate-600 p-2 text-white my-4 text-[14px]">
  ${file}
  </pre>
`;
