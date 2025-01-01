const merge = (left: number[], right: number[]) => {
  const result: number[] = [];

  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
};

const mergeSortFn = (input: number[]) => {
  if (input.length <= 1) return input;

  const middle = Math.floor(input.length / 2);
  const left = input.slice(0, middle);
  const right = input.slice(middle);

  const sortedLeft = mergeSortFn(left);
  const sortedRight = mergeSortFn(right);

  return merge(sortedLeft, sortedRight);
};

export default mergeSortFn;
