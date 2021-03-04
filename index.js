class ArbitraryNumber{
    constructor(num){
        this._isNegative = false;
        this._integer = "0";
        this._decimal = "0";

        if(num[0] === "-"){
            this._isNegative = true;
            num = num.slice(1);
        }

        if(num.includes(".")){
            num = num.split(".");
            this._integer = num[0];
            this._decimal = num[1];
        }else{
            this._integer = num;
        }
    }

    greaterThan(number){
        if(this._isNegative && number[0] === "-") {
            this._isNegative = false;
            let response = this.lessThan(number.replace("-", ""));
            this._isNegative = true;
            return response;
        }
        if(this._isNegative && number[0] !== "-") return false;
        if(!this._isNegative && number[0] === "-") return true;

        let splits = number.split(".");
        let integer = splits[0] || "0";
        let decimal = splits[1] || "0";

        let thisInteger = this._integer.padStart(integer.length, "0");
        integer = integer.padStart(this._integer.length, "0");

        for(let i = 0; i < thisInteger.length; i++){
            let thisNum = parseInt(thisInteger[i]);
            let thatNum = parseInt(integer[i]);
            if(thisNum > thatNum) return true;
            if(thisNum < thatNum) return false;
        }
        
        let thisDecimal = this._decimal.padEnd(decimal.length, "0");
        decimal = decimal.padEnd(this._decimal.length, "0");

        for(let i = 0; i < thisDecimal.length; i++){
            let thisDec = parseInt(thisDecimal[i]);
            let thatDec = parseInt(decimal[i]);
            if(thisDec > thatDec) return true;
            if(thisDec < thatDec) return false;
        }

        return false;
    }

    lessThan(number){
        if(this._isNegative && number[0] === "-") {
            this._isNegative = false;
            let response = this.greaterThan(number.replace("-", ""));
            this._isNegative = true;
            return response;
        }
        if(this._isNegative && number[0] !== "-") return true;
        if(!this._isNegative && number[0] === "-") return false;

        let splits = number.split(".");
        let integer = splits[0] || "0";
        let decimal = splits[1] || "0";

        let thisInteger = this._integer.padStart(integer.length, "0");
        integer = integer.padStart(this._integer.length, "0");

        for(let i = 0; i < thisInteger.length; i++){
            let thisNum = parseInt(thisInteger[i]);
            let thatNum = parseInt(integer[i]);
            if(thisNum > thatNum) return false;
            if(thisNum < thatNum) return true;
        }
        
        let thisDecimal = this._decimal.padEnd(decimal.length, "0");
        decimal = decimal.padEnd(this._decimal.length, "0");

        for(let i = 0; i < thisDecimal.length; i++){
            
            let thisDec = parseInt(thisDecimal[i]);
            let thatDec = parseInt(decimal[i]);
            if(thisDec > thatDec) return false;
            if(thisDec < thatDec) return true;
        }

        return false;
    }

    add(number){
        let carry = 0;
        if(number[0] === "-") number.replace("-", "");
        let splits = number.split(".");
        
        //Add up the decimals
        let thatDecimal =  splits[1] || "0";
        thatDecimal = thatDecimal.padEnd(this._decimal.length, "0");
        let thisDecimal = this._decimal.padEnd(thatDecimal.length, "0");
        let result = this._add(thisDecimal, thatDecimal);
        this._decimal = this._dropZeroes(result[0]);
        carry = result[1];

        //Add up the integers
        let thatInteger = splits[0] || "0";
        thatInteger = thatInteger.padStart(this._integer.length, "0");
        let thisInteger = this._integer.padStart(thatInteger.length, "0");
        carry = carry.toString().padStart(thisInteger.length, "0");
        thisInteger = this._add(thisInteger, carry.toString())[0];
        [thisInteger, carry] = this._add(thisInteger, thatInteger);
        this._integer = this._dropZeroes(`${carry.toString()}${thisInteger}`);

        return this;
    }

    print(){
        let response =  this._integer;
        if(this._decimal !== "0") response = `${response}.${this._decimal}`;
        if(this._isNegative === true) response = `-${response}`;
        return response;
    }

    _add(first, second){
        let answer = "";
        let carry = 0;

        for(let i = first.length-1; i >= 0; i--){
            let result = parseInt(first[i]) + parseInt(second[i]) + carry;
            carry = Math.floor(result / 10);
            answer = `${result % 10}${answer}`;
        }

        return [answer, carry];
    }

    _dropZeroes(number, isDecimal = false){
        if(number === "0") return number;
        if(isDecimal) number = number.split("").reverse().join();
        for(let i = 0; i < number.length; i++){
            if(number[i] !== "0" && !isDecimal) return number.slice(i);
            if(number[i] !== "0" && isDecimal) return number.slice(i).split("").reverse().join();
        }
    }
}

module.exports = ArbitraryNumber;

// let number = new ArbitraryNumber("123456789123456789");
// number
//     .add("987654321987654321")
//     .print();