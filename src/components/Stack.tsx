import Stack from "../classes/stack";

function StackDemo() {
  let stack = new Stack();
  stack.push("konang");
  stack.push("jonang");

  console.log(stack);
  stack.pop();
  console.log(stack);
  return <div>Stack</div>;
}

export default StackDemo;
