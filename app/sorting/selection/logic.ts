/**
 *
 * @param input : array of numbers
 * @returns : sorted array of numbers
 */
const selectionSortFn = (input: number[]) => {
  let min;
  for (let i = 0; i < input.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < input.length; j++) {
      if (input[j] < input[min]) {
        min = j;
      }
    }
    let temp = input[i];
    input[i] = input[min];
    input[min] = temp;

    // Swap using destructuring
    // [input[i], input[min]] = [input[min], input[i]];
  }

  return input.join(",");
};

export default selectionSortFn;
