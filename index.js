class ArbitraryNumber{
    constructor(num){
        this._isNegative = false;
        this._integer = null;
        this._decimal = null;

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

    add(number){
        let answer = "";

        let carry = 0;
        let firstNumber = 0;
        let secondNumber = 0;

        //Add up the decimals
        if(this._decimal !== null){
            firstNumber = this._decimal.padEnd(number.length, "0");
            secondNumber = number.padEnd(this._decimal.length, "0");
            for(let i = firstNumber.length-1; i >= 0; i--){
                let num = parseInt(firstNumber[i]) + parseInt(secondNumber[i]) + carry;
                answer = `${(num % 10).toString()}${answer}`;
                carry = Math.floor(num / 10);
            }

            this._decimal = answer;
            answer = "";
        }

        //Add up the integers
        firstNumber = this._integer.padStart(number.length, "0");
        secondNumber = number.padStart(this._integer.length, "0");
        for(let i = firstNumber.length-1; i >= 0; i--){
            let num = parseInt(firstNumber[i]) + parseInt(secondNumber[i]) + carry;
            answer = `${(num % 10).toString()}${answer}`;
            carry = Math.floor(num / 10);
        }

        //Remove any preceding zeroes
        for(let i = 0; i < answer.length; i++){
            if(answer[i] !== "0"){
                answer = answer.slice(i);
                break;
            }
        }

        //Add the carry
        this._integer = (carry !== 0) ? `${carry.toString()}${answer}` : answer;

        return this;
    }

    print(){
        let response =  this._integer;
        if(this._decimal !== null) response = `${response}.${this._decimal}`;
        if(this._isNegative === true) response = `-${response}`;
        return response;
    }
}

module.exports = ArbitraryNumber;