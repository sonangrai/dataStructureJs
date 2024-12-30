import fetchFrame from "app/api/index.ts";
import Article from "components/common/Article";
import CodeFrame from "components/common/code-frame.tsx";

async function getCode() {
  const res = await fetchFrame("sorting/selection");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function page() {
  const data = await getCode();
  return (
    <>
      <article className="mb-2">
        <Article title="Selection Sorting" description={document} />
      </article>
      <CodeFrame data={data} />
    </>
  );
}

export default page;

const document = `
  <p class="text-[16px] font-light"> 
    Selection sort is the simple sorting algorithm. In this algorithm smallest number is first detected and swapped to front parts of array till its sorted.
  </p>
`;
