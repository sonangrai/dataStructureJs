export const bubbleSortFn = (input: number[]) => {
  for (let i = 0; i < input.length - 1; i++) {
    let flag: boolean = false;
    for (let j = 0; j < input.length; j++) {
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
