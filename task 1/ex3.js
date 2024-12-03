const arr = [2, 3, 4, 6, 1, 5, 0, 0, 8, 0];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  arr[i] === 0 ? count++ : "";
}
console.log("zeros number in array is ", count);
