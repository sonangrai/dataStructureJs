import fetchFrame from "app/api";
import CodeFrame from "app/sorting/component/code-frame";
import { Set } from "./logic";

async function getCode() {
  const res = await fetchFrame("set");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function index() {
  const data = await getCode();

  let set = new Set();
  set.add("sonang");
  set.add(12);
  set.add("don-man");

  let set2 = new Set();
  set2.add("jane");
  set2.add(12);
  set2.add("don-women");
  set2.add("sonang");

  return (
    <div>
      <CodeFrame data={data} />
    </div>
  );
}

export default index;
