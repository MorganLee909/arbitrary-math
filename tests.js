let Math = require("./index.js");
let tester = require("./tester.js");

let evenLength = {
    test: "assertEquals",
    left: new Math("1234").add("4321").print(),
    right: "5555",
    name: "even-length"
}

let firstNumberLarger = {
    test: "assertEquals",
    left: new Math("1234").add("1").print(),
    right: "1235",
    name: "first-number-larger"
};

let secondNumberLarger = {
    test: "assertEquals",
    left: new Math("10").add("17564").print(),
    right: "17574",
    name: "second-number-larger"
};

let extraneousZeroes = {
    test: "assertEquals",
    left: new Math("0070010").add("0001756400").print(),
    right: "1826410",
    name: "extraneous-zeroes"
};

let largeNumbers = {
    test: "assertEquals",
    left: new Math("123456789123456789").add("987654321987654321").print(),
    right: "1111111111111111110",
    name: "large-numbers"
};

let oneNegative = {
    test: "assertEquals",
    left: new Math("-1").add("10").print(),
    right: "9",
    name: "one-negative"
};

let twoNegative = {
    test: "assertEquals",
    left: new Math("-27484746262748492").add("-172172838374764627348").print(),
    right: "-172200323121027375840",
    name: "two-negative"
};

let negativeDecimal = {
    test: "assertEquals",
    left: new Math("-1.25").add("1.25").print(),
    right: "0",
    name: "negative-decimal"
};

let negativeDecimalTwo = {
    test: "assertEquals",
    left: new Math("-1.25").add("-1.25").print(),
    right: "-2.5",
    name: "negative-decimal-two"
};

tester([
    evenLength,
    firstNumberLarger,
    secondNumberLarger,
    extraneousZeroes,
    largeNumbers,
    oneNegative,
    twoNegative,
    negativeDecimal,
    negativeDecimalTwo
]);