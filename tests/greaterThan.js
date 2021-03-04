const Math = require("../index.js");
const tester = require("../tester.js");

tester([
    {
        name: "left-larger",
        test: "assertTrue",
        left: new Math("12").greaterThan("5"),
    },
    {
        name: "right-larger",
        test: "assertFalse",
        left: new Math("12").greaterThan("13")
    },
    {
        name: "zero-equals",
        test: "assertFalse",
        left: new Math("0").greaterThan("0")
    },
    {
        name: "negative",
        test: "assertFalse",
        left: new Math("-18").greaterThan("2")
    },
    {
        name: "compare-to-negative",
        test: "assertTrue",
        left: new Math("10").greaterThan("-2")
    },
    {
        name: "two-negative-greater",
        test: "assertTrue",
        left: new Math("-10").greaterThan("-12")
    },
    {
        name: "two-negative-less",
        test: "assertFalse",
        left: new Math("-10").greaterThan("-8")
    },
    {
        name: "decimal-greater",
        test: "assertTrue",
        left: new Math("10.25").greaterThan("10.24")
    },
    {
        name: "decimal-less",
        test: "assertTrue",
        left: new Math("10.253").greaterThan("10.25")
    },
    {
        name: "negative-decimal-greater",
        test: "assertTrue",
        left: new Math("-10.24").greaterThan("-10.241")
    },
    {
        name: "negative-decimal-less",
        test: "assertFalse",
        left: new Math("-10.24").greaterThan("-10.199")
    },
    {
        name: "large-numbers",
        test: "assertTrue",
        left: new Math("1111111111111111111111111111111111111111111111").greaterThan("22222222222222222222222222222")
    }
]);