module.exports = {
    add: function(num1, num2){
        let answer = "";
        num1 = num1.padStart(num2.length, "0");
        num2 = num2.padStart(num1.length, "0");

        let carry = 0;
        for(let i = num1.length - 1; i >=0; i--){
            let num = parseInt(num1[i]) + parseInt(num2[i]) + carry;
            answer = (num % 10).toString() + answer;
            carry = Math.floor(num / 10);
        }

        answer = carry.toString() + answer;

        for(let i = 0; i < answer.length; i++){
            if(answer[i] !== "0"){
                answer = answer.slice(i);
                break;
            }
        }

        return answer;
    }
}