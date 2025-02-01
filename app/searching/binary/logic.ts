function binarySearch(arr: number[], x: number) {
  let low = 0;
  let high = arr.length - 1;
  let mid;

  while (high >= low) {
    mid = Math.floor((low + (high - low)) / 2);

    if (arr[mid] === x) return mid;

    if (arr[mid] < x) low = mid + 1;
    else high = mid - 1;
  }

  return -1;
}

export default binarySearch;
