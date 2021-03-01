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
        return false;
    },

    zeroesAllOver: function(){
        let sum = math.add("0070010", "0001756400");
        let answer = "1826410";

        if(sum === answer){
            return true;
        }

        console.log("Extraneos zeroes failed");
        console.log(`Left: ${sum}, Right: ${answer}`);
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
        return false;
    }
}

add.evenLength();
add.firstNumberLarger();
add.secondNumberLarger();
add.zeroesAllOver();
add.largeNumbers();