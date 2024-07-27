import fetchFrame from "app/api";
import CodeFrame from "components/common/code-frame";
import { DoubleLinkedList } from "./logic";

async function getCode() {
  const res = await fetchFrame("linkedlist/double");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function DLinkedList() {
  const data = await getCode();

  let ll = new DoubleLinkedList();
  ll.insert("sun", "head");
  ll.insert("moon", "sun");
  ll.insert("earth", "sun");
  ll.display();
  ll.remove("sun");
  ll.display();

  return (
    <div>
      <CodeFrame data={data} />
    </div>
  );
}

export default DLinkedList;
