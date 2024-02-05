/**
 *
 * @param input : array of numbers
 * @returns : sorted array of numbers
 */
const selectionSortFn = (input: number[]) => {
  for (let i = 0; i < input.length - 1; i++) {
    let smallest;
    for (let j = 0; j < input.length; j++) {
      if (input[j + 1] < input[j]) {
        smallest = j + 1;
      }
    }
    if (smallest) {
      let temp = input[i];
      input[i] = input[smallest];
      input[smallest] = temp;
    }
  }

  return input.join(",");
};

export default selectionSortFn;
