"use client";
import Article from "components/common/Article";
import Process from "../component/Process";
import selectionSortFn from "./logic";

function page() {
  return (
    <>
      <article className="mb-2">
        <Article title="Selection Sorting" description={document} />
      </article>
      <Process logic={selectionSortFn} />
    </>
  );
}

export default page;

const document = `
  <p class="text-[16px] font-light"> 
    Selection sort is the simple sorting algorithm. In this algorithm smallest number is first detected and swapped to front parts of array till its sorted.
  </p>
`;
