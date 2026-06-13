function nextPalindrome(num) {
  // Convert input to a number and start checking from the next integer
  let nextNum = Number(num) + 1;

  // Helper function to check if a number is a palindrome
  function isPalindrome(n) {
    const str = n.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }

  // Loop until we find the next palindrome
  while (!isPalindrome(nextNum)) {
    nextNum++;
  }

  return nextNum;
}

// Taking input and showing output as per instructions
const input = prompt("Enter a palindrome number");
alert(nextPalindrome(input));