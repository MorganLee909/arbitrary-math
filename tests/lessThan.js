const Math = require("../index.js");
const tester = require("../tester.js");

tester([
    {
        name: "left-larger",
        test: "assertFalse",
        left: new Math("12").lessThan("5")
    },
    {
        name: "right-larger",
        test: "assertTrue",
        left: new Math("12").lessThan("13")
    },
    {
        name: "zero-equals",
        test: "assertFalse",
        left: new Math("0").lessThan("0")
    },
    {
        name: "negative",
        test: "assertTrue",
        left: new Math("-18").lessThan("2")
    },
    {
        name: "compare-to-negative",
        test: "assertFalse",
        left: new Math("10").lessThan("-2")
    },
    {
        name: "two-negative-greater",
        test: "assertFalse",
        left: new Math("-10").lessThan("-12")
    },
    {
        name: "two-negative-less",
        test: "assertTrue",
        left: new Math("-10").lessThan("-8")
    },
    {
        name: "decimal-greater",
        test: "assertFalse",
        left: new Math("10.25").lessThan("10.24")
    },
    {
        name: "decimal-less",
        test: "assertFalse",
        left: new Math("10.253").lessThan("10.25")
    },
    {
        name: "negative-decimal-greater",
        test: "assertFalse",
        left: new Math("-10.24").lessThan("-10.241")
    },
    {
        name: "negative-decimal-less",
        test: "assertTrue",
        left: new Math("-10.24").lessThan("-10.199")
    },
    {
        name: "large-numbers",
        test: "assertFalse",
        left: new Math("1111111111111111111111111111111111111111111111").lessThan("22222222222222222222222222222")
    }
]);