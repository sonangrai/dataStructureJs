const linearSearchFn = (arr: number[], item: number) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return -1;
};

export default linearSearchFn;
