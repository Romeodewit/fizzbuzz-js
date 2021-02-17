const FIZZ = "Fizz";
const BUZZ = "Buzz";
const BANG = "Bang";
const BONG = "Bong";
const FEZZ = "Fezz";

const divisible_by = (numerator, denominator) => {
  return numerator % denominator === 0;
};

const reverseArray = () => {
  let reverseArray = [];
  for (let i = 0; i < reverseText.length; i++) {
    reverseArray.unshift(reverseText[i]);
  }
  console.log(reverseArray.join(""));
};

const fizzingThatBuzz = () => {
  for (let i = 1; i <= 143; i++) {
    let fizz = divisible_by(i, 3);
    let buzz = divisible_by(i, 5);
    let bang = divisible_by(i, 7);
    let bong = divisible_by(i, 11);
    let fezz = divisible_by(i, 13);
    let reverse = divisible_by(i, 17);

    const text = `${fizz ? FIZZ : ""}${fezz ? FEZZ : ""}${buzz ? BUZZ : ""}${bang ? BANG : ""}`;
    
    const reverseText = text.split(/(?=[A-Z])/);

    const reverseArray = () => {
      let reverseArray = [];
      for (let i = 0; i < reverseText.length; i++) {
        reverseArray.unshift(reverseText[i]);
      }
      console.log(reverseArray.join(""));
    };

    if ((text === "" && bong) || (text === "Fezz" && bong)) {
      console.log(text + BONG);
    } else if (reverse && text !== "") {
      reverseArray();
    } else {
      text === "" ? console.log(i) : console.log(text);
    }
  }
};
// Here, we create our main function.
const fizzbuzz = () => {
  console.log("Welcome to FizzBuzz!");

  fizzingThatBuzz();
};

// Now we run the main function...
fizzbuzz();
