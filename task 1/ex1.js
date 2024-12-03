const num = 9;
Number(num % 2 === 0 || num % 3 === 0 || num % 5 === 0) && console.log("1"); //א

Number(
  (num % 2 === 0 && num % 3 === 0) ||
    (num % 3 === 0 && num % 5 === 0) ||
    (num % 2 === 0 && num % 5 === 0)
) && console.log("2"); //ב

Number(num % 2 === 0 && num % 3 === 0 && num % 5 === 0) && console.log("3"); //ג
