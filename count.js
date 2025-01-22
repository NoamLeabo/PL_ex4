function countdown(n) {
  // please implement this method.
  let fun = function(){
    return n--;
  }
  return fun
}

// Usage
const timer = countdown(5);
console.log(timer()); // 5
console.log(timer()); // 4
console.log(timer()); // 3
console.log(timer()); // 2
console.log(timer()); // 1
console.log(timer()); // 0
const new_timer = countdown(0);
console.log(new_timer()); // 0
console.log(new_timer()); // -1
console.log(new_timer()); // -2