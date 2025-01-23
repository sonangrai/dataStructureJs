import fetchFrame from "app/api/index.ts";
import Article from "components/common/Article";
import CodeFrame from "components/common/code-frame";

async function getCode() {
  const res = await fetchFrame("sorting/quick");

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
        <Article title="Quick Sorting" description={document} />
      </article>
      <CodeFrame data={data} />
    </>
  );
}

export default page;

const document = `
  <p class="text-[16px] font-light"> 
   QuickSort is a sorting algorithm based on the Divide and Conquer that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.</p>
`;
