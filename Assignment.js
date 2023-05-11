// Pattern which is to be printed

// 1
// 3 2
// 4 5 6
// 10 9 8 7
// 11 12 13 14 15


let n = 5;
let num = 1;

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    if (i % 2 === 0) {
      row = num + " " + row;
      num--;
    } else {
      row += num + " ";
      num++;
    }
  }
  if (i % 2 === 0) {
    num += i;
  } else {
    num += i - 1;
  }
  console.log(row);
}
