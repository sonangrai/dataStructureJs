import fetchFrame from "app/api/index.ts";
import Article from "components/common/Article";
import CodeFrame from "components/common/code-frame";

async function getCode() {
  const res = await fetchFrame("set");

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
        <Article title="Merge Sorting" description={document} />
      </article>
      <CodeFrame data={data} />
    </>
  );
}

export default page;

const document = `
  <p class="text-[16px] font-light"> 
    Merge sort works by dividing an array into smaller subarrays, sorting each subarray, and then merging the sorted subarrays back together to form the final sorted array.
`;
