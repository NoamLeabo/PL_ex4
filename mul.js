function createMultiplier(x) {
  // please implement this method.
  let fun = function(y){return x*y};
  return fun;
}

// Usage
const multiplyBy2 = createMultiplier(2);
console.log(multiplyBy2(5)); // 10
console.log(multiplyBy2(10)); // 20

const multiplyBy3 = createMultiplier(3);
console.log(multiplyBy3(4)); // 12
console.log(multiplyBy3(3*3)); // 27
