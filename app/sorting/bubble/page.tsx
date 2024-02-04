"use client";
import Article from "components/common/Article";
import Process from "../component/Process";
import bubbleSortFn from "./logic";

function page() {
  return (
    <>
      <article className="p-2">
        <Article
          title="Bubble Sorting"
          description="<strong>Article sigma</strong>"
        />
      </article>
      <Process logic={bubbleSortFn} />
    </>
  );
}

export default page;
