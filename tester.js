/*
tests = [{
    test: String (name of function to use)
    left: Any (condition to check)
    right: Any (condition to compare to)
    name: String (name of the test)
}]
*/
module.exports = (tests)=>{
    let assertEquals = (left, right) => left === right;

    let passed = 0;
    let failed = [];

    for(let i = 0; i < tests.length; i++){
        let result = false;

        switch(tests[i].test){
            case "assertEquals":
                result = assertEquals(tests[i].left, tests[i].right);
                break;
        }

        if(result === true){
            passed++;
        }else{
            failed.push(tests[i]);
        }
    }

    console.log(`${passed} tests passed. ${failed.length} tests failed`);
    for(let i = 0; i < failed.length; i++){
        console.log();
        console.log(`${failed[i].name} failed`);
        console.log(`Left: ${failed[i].left}`);
        console.log(`Right: ${failed[i].right}`);
    }
}