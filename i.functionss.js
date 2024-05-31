//function
/*function name(){

};
*/

//arrow function onelinerrrrrrrr
const sayHi = () => {
  console.log("Hi");
};
sayHi();
const DoProduct = (num1, num2) => num1 * num2;
console.log(DoProduct(2, 3));
//odd or even

const oddOReven = (num) => (num % 2 === 0 ? "even" : "odd");

console.log(oddOReven(7));

//waf to check polarity of a No

const polarityCheck = (number) => {
  let check;
  if (number < 0) {
    check = "negative";
  } else if (number > 0) {
    check = "positive";
  } else {
    check = "zero";
  }

  return check;
};

console.log(polarityCheck(-6));
