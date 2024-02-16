"use client";
import Article from "components/common/Article";
import Process from "../component/Process";
import mergeSortFn from "./logic";
import file from "./logic.ts";

function page() {
  return (
    <>
      <article className="mb-2">
        <Article title="Merge Sorting" description={document} />
      </article>
      <Process logic={mergeSortFn} />
    </>
  );
}

export default page;

const document = `
  <p class="text-[16px] font-light"> 
    Merge sort works by dividing an array into smaller subarrays, sorting each subarray, and then merging the sorted subarrays back together to form the final sorted array.
  <pre class="bg-slate-600 p-2 text-white my-4 text-[14px]">
  ${file}
  </pre>
`;
