// the pattern which is to be printed
// * # * # *   
// $ % % $
// * # *
// $ %
// *

let symbol1 = "*";
let symbol2 = "#";
let symbol3 = "$";
let symbol4 = "%";
let space = " ";

let pattern = [
  [symbol1, space, symbol2, space, symbol1, space, symbol2, space, symbol1],
  [symbol3, space, symbol4, space, symbol4, space, symbol3],
  [symbol1, space, symbol2, space, symbol1],
  [symbol3, space, symbol4],
  [symbol1]
];

for (let i = 0; i < pattern.length; i++) {
  let row = "";
  for (let j = 0; j < pattern[i].length; j++) {
    row += pattern[i][j];
  }
  console.log(row);
}

  

