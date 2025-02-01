import fetchFrame from "app/api/index.ts";
import Article from "components/common/Article";
import CodeFrame from "components/common/code-frame";

async function getCode() {
  const res = await fetchFrame("searching/binary");

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
        <Article title="Binary Searching" description={document} />
      </article>
      <CodeFrame data={data} />
    </>
  );
}

export default page;

const document = `
  <p class="text-[16px] font-light"> 
    Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing the search interval in half. If the value of the search key is less than the item in the middle of the interval, the algorithm continues to search in the lower half. Otherwise, it continues in the upper half. This process continues until the value is found or the interval is empty.
  </p>
  <div class="mt-4">
    <h3 class="mb-2 font-bold">Steps</h3>
    <ol class="list-decimal pl-4">
        <li>Start with the entire sorted array.</li>
        <li>Find the middle element of the array.</li>
        <li>Compare the middle element with the target value:
            <ul class="list-disc pl-4">
                <li>If the middle element equals the target, return its index.</li>
                <li>If the middle element is greater than the target, search the left half.</li>
                <li>If the middle element is less than the target, search the right half.</li>
            </ul>
        </li>
        <li>Repeat the process until the target is found or the search interval is empty.</li>
    </ol>
  </div>
`;
