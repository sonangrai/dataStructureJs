import { Set } from "./logic";

function index() {
  let set = new Set();
  set.add("sonang");
  set.add(12);
  set.add("don-man");

  let set2 = new Set();
  set2.add("jane");
  set2.add(12);
  set2.add("don-women");
  set2.add("sonang");

  return <div>Set</div>;
}

export default index;
