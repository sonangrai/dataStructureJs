import { DoubleLinkedList } from "./logic";

function DLinkedList() {
  let ll = new DoubleLinkedList();
  ll.insert("sun", "head");
  ll.insert("moon", "sun");
  ll.insert("earth", "sun");
  ll.display();
  ll.remove("sun");
  ll.display();

  return <div>DoubleLinkedList</div>;
}

export default DLinkedList;
