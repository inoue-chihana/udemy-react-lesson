function print(callback) {
  console.log(callback);
  const result = callback;
  console.log(result);
}

print(fn(10));

function fn(number = 3) {
  return number * 2;
}