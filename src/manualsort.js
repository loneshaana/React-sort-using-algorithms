const doReplace = (min, i, data) => {
  console.log("replace ", data[min].name, " with ", data[i].name);
  const temp = data[min];
  data[min] = data[i];
  data[i] = temp;
};
const less = (a, b) => {
  return a.name < b.name;
};
export const SelectionSort = (
  data: Array,
  key: String,
  sortType: ["ASC,DEC"]
) => {
  const len = data.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i; j < len; j++) {
      if (data[i][key] > data[j][key]) {
        min = j;
      }
    }
    doReplace(min, i, data);
  }
  return data;
};

export const InsertionSort = (data: Array) => {
  const len = data.length;
  for (let i = 1; i < len; i++) {
    for (let j = i; j > 0 && less(data[j], data[j - 1]); j--) {
      doReplace(j, j - 1, data);
    }
  }
  return data;
};

const partition = (data: Array, low, high) => {
  let i = low;
  let j = high;
  let pivot = data[low];
  // console.log("Pivot ", pivot);
  while (true) {
    while (less(pivot, data[++i])) {
      if (i === high) break;
    }

    while (!less(pivot, data[--j])) {
      if (j === low) break;
    }

    if (i >= j) break;
    doReplace(i, j, data);
  }
  doReplace(low, j, data);
  return j;
};

const sort = (data, low, high) => {
  if (high <= low) return;
  let j = partition(data, low, high);
  sort(data, low, j - 1);
  sort(data, j + 1, high);
};

export const QuickSort = (data: Array) => {
  const newObj = Object.assign([], data);
  sort(newObj, 0, data.length - 1);
  return newObj;
};

// r a w n a
// r a n w a
// n a r w a
// w r n a a
//
