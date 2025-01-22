function createSum() {
  // please implement this method.
  let total = 0;
  let fun = function (num) {
    if (arguments.length === 1) {
      total += num;
      return total;
    } else return total;
  };
  return fun;
}

// Usage
const sum = createSum();
console.log(sum(10)); // 10
console.log(sum(20)); // 30
console.log(sum()); // 30
console.log("su"); 
const su = createSum();
console.log(su(10)); // 10
console.log(su(15)); // 25
console.log(su(5)); // 30
console.log(sum(10)); // 40
console.log(sum(20)); // 60
console.log(sum()); // 60
console.log(sum(1,4)); // 60

