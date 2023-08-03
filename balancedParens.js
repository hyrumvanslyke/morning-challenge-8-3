// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:
function balancedParens(str) {// funcion created
    let newStr = str.split('')
    let open = 0// start count for open "("
    let closed = 0// start count for closed ")"
    for (let i = 0; i < newStr.length; i++) {// loop through the string
      if (str[i] === "(") {// add one to open if there is a (
        open += 1
      } else if (str[i] === ")") {// add one to open if there is a )
        closed += 1
      }
    }
    return open === closed// if they are equal return true
  }
  console.log(balancedParens(sample1))//logged for testing
  console.log(balancedParens(sample2))//logged for testing
  console.log(balancedParens(sample3))//logged for testing
  console.log(balancedParens(sample4))//logged for testing