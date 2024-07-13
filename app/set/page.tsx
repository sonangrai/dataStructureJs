import { Set } from "./logic";

function index() {
  let set = new Set();
  set.add("sonang");
  set.add(12);
  set.add("don-man");
  set.show();
  set.remove(12);
  set.show();

  return <div>Set</div>;
}

export default index;
