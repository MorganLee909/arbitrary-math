let math = require("./index.js");

let add = {
    evenLength: function(){
        let sum = math.add("1234", "4321");
        let answer = "5555"

        if(sum === answer){
            return true;
        }

        console.log("Even length test failed");
        console.log(`Left: ${sum}, Right: ${answer}`);
        console.log();
        return false;
    },

    firstNumberLarger: function(){
        let sum = math.add("1234", "1");
        let answer = "1235";

        if(sum === answer){
            return true;
        }

        console.log("First number larger failed");
        console.log(`Left: ${sum}, Right: ${answer}`);
        console.log();
        return false;
    },

    secondNumberLarger: function(){
        let sum = math.add("10", "17564");
        let answer = "17574";

        if(sum === answer){
            return true;
        }

        console.log("Second number larger failed");
        console.log(`Left: ${sum}, Right: ${answer}`);
        console.log();
        return false;
    },

    zeroesAllOver: function(){
        let sum = math.add("0070010", "0001756400");
        let answer = "1826410";

        if(sum === answer){
            return true;
        }

        console.log("Extraneous zeroes failed");
        console.log(`Left: ${sum}, Right: ${answer}`);
        console.log();
        return false;
    },

    largeNumbers: function(){
        let sum = math.add("123456789123456789", "987654321987654321");
        let answer = "1111111111111111110";

        if(sum === answer){
            return true;
        }

        console.log("Large numbers failed");
        console.log(`Left: ${sum}, Right: ${answer}`);
        console.log();
        return false;
    },

    oneNegative: function(){
        let sum = math.add("-1", "10");
        let answer = "9";

        if(sum === answer){
            return true;
        }

        console.log("One negative failed");
        console.log(`Left: ${sum}, Right: ${answer}`);
        console.log();
        return false;
    },

    twoNegative: function(){
        let sum = math.add("-10814750987490209847358092811234142981409857420", "-10");
        let answer = "-10814750987490209847358092811234142981409857430";

        if(sum === answer){
            return true;
        }

        console.log("Two negative failed");
        console.log(`Left: ${sum}, Right: ${answer}`);
        console.log();
        return false;
    },

    oneDecimal: function(){
        let sum = math.add("1", "0.876");
        let answer = "1.876";

        if(sum === answer){
            return true;
        }

        console.log("One decimal failed");
        console.log(`Left: ${sum}, Right: ${answer}`);
        console.log();
        return false;
    },

    twoDecimalAndNegative: function(){
        let sum = math.add("-1.8", "-0.876");
        let answer = "-2.676";

        if(sum === answer){
            return true;
        }

        console.log("One decimal failed");
        console.log(`Left: ${sum}, Right: ${answer}`);
        console.log();
        return false;
    }
}

add.evenLength();
add.firstNumberLarger();
add.secondNumberLarger();
add.zeroesAllOver();
add.largeNumbers();
add.oneNegative();
add.twoNegative();
add.oneDecimal();
add.twoDecimalAndNegative();