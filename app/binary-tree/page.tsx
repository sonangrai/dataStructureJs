import fetchFrame from "app/api";
import CodeFrame from "components/common/code-frame";
import { BinaryTree } from "./logic";

async function getCode() {
  const res = await fetchFrame("binary-tree");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function page() {
  const data = await getCode();

  const bst = new BinaryTree();

  bst.insert(1);
  bst.insert(13);
  bst.insert(89);
  bst.show();

  return (
    <div>
      <CodeFrame data={data} />
    </div>
  );
}

export default page;
