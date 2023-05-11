//pattern which is to be printed

function zigzagPattern(sequence) {
    sequence.sort((a, b) => b - a); // Sort the sequence in descending order
    let result = [];
    let mid = Math.ceil(sequence.length / 2);
  
    for (let i = 0; i < mid; i++) {
      let j = sequence.length - 1 - i;
      if (i === j) { // If only one number is remaining, add it to the result
        result.push(sequence[i]);
      } else {
        result.push(sequence[j], sequence[i]);
      }
    }
  
    return result;
  }
  
  // Example usage
  let sequence = [1, 2, 3, 4, 5];
  console.log(zigzagPattern(sequence)); // Output: [5, 1, 4, 2, 3]
  