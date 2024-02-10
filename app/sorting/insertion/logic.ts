/**
 *
 * @param inp : array of numbers
 * @returns : sorted array of numbers
 */
const insertionSortFn = (inp: number[]) => {
  for (let i = 0; i < inp.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (inp[j] < inp[j - 1]) {
        let temp = inp[j];
        inp[j] = inp[j - 1];
        inp[j - 1] = temp;
      }
    }
  }

  return inp.join(",");
};

export default insertionSortFn;
