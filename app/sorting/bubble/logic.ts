/**
 *
 * @param input : array of numbers
 * @returns : sorted array of numbers
 */
const bubbleSortFn = (input: number[]) => {
  for (let i = 0; i < input.length - 1; i++) {
    let flag: boolean = false;
    for (let j = 0; j < input.length - i; j++) {
      if (input[j] > input[j + 1]) {
        // Swapping
        let temp = input[j + 1];
        input[j + 1] = input[j];
        input[j] = temp;
        flag = true;
      }
    }
    if (!flag) break;
  }

  return input.join(",");
};

export default bubbleSortFn;
