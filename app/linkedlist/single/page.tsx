import { LinkedList } from "./logic";

function SingleLinkedList() {
  let ll = new LinkedList();
  ll.insert("Cat", "Head");
  ll.insert("Dog", "Cat");
  ll.insert("Beaver", "Dog");
  ll.display();
  ll.remove("Dog");
  ll.display();

  return <div>SingleLinkedList</div>;
}

export default SingleLinkedList;
