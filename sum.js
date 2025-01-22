function createSum() {
  // please implement this method.
  let total = 0 
  let fun = function(num){
    if (arguments.length === 1) {
      total += num;
      return total;
    }
    else 
        return total;
  }
  return fun;
}

// Usage
const sum = createSum();
console.log(sum(10)); // 10
console.log(sum(20)); // 30
console.log(sum()); // 30
