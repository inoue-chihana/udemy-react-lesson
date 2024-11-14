function fn(number) {
  return number * 2;
}
console.log(fn(2));

const fnarrow2 = (number) => {
  console.log(number);
  return number * 2;
};

const fnarrow = (number) => number * 2;
console.log(fnarrow(3));

const fnArrowObj = number => ({
  result: number * 2,
});
console.log(fnArrowObj(2));
