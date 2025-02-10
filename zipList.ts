function zipList(array1: string[], array2: number[]): (string | number)[] {
  const listLength = array1.length;
  const newList: (string | number)[] = [];
  let index = 0;

  while (index < listLength) {
    newList.push(array1[index]);
    newList.push(array2[index]);
    index++;
  }

  return newList;
}
function zipListTheFunctional(array1: string[], array2: number[]): (string | number)[] {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
  return array1.flatMap((item: number | string, index: string | number) => [item, array2[index]]);
}
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctional(['a', 'b', 'c'], [1, 2, 3]));
