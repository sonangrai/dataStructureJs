import fetchFrame from "app/api/index.ts";
import Article from "components/common/Article";
import CodeFrame from "components/common/code-frame";

async function getCode() {
  const res = await fetchFrame("searching/linear");

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
        <Article title="Linear Searching" description={document} />
      </article>
      <CodeFrame data={data} />
    </>
  );
}

export default page;

const document = `
  <p class="text-[16px] font-light"> 
    Linear search is the most common and simplest searching algorithm. This algorithm compares the <b>each</b> item and return if found.
  </p>
`;
