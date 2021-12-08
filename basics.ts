function add(
  number1: number,
  number2: number,
  printResult: boolean,
  resultPhrase: string
) {
  // if (typeof n1 !== "number" || typeof n2 !== "number") {
  //   throw new Error("Incorrect input!");
  const result = number1 + number2;
  if (printResult) {
    console.log(resultPhrase + result);
  } else {
    return result;
  }
}

// one way
//const number1 = 5;

//second way
let number1: number;
number1 = 5;

const number2 = 2.8;

const printResult = true;
//const resultPhrase = "Result is: ";
let resultPhrase = "Result is: ";
//resultPhrase = 0 => will give us an error because if you hover on resultPhrase you will see is a string

add(number1, number2, printResult, resultPhrase);
