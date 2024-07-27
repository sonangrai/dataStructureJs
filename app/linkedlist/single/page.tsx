import fetchFrame from "app/api";
import CodeFrame from "components/common/code-frame";
import { LinkedList } from "./logic";

async function getCode() {
  const res = await fetchFrame("linkedlist/single");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function SingleLinkedList() {
  const data = await getCode();

  let ll = new LinkedList();
  ll.insert("Cat", "Head");
  ll.insert("Dog", "Cat");
  ll.insert("Beaver", "Dog");
  ll.display();
  ll.remove("Dog");
  ll.display();

  return (
    <div>
      <CodeFrame data={data} />
    </div>
  );
}

export default SingleLinkedList;
