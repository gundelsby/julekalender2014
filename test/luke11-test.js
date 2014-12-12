(function() {
    var math = math || julekalender.util.math;
    var luke11 = julekalender.luke11;
    
    buster.testCase("luke11", {
        "run program": function() {
    		this.timeout = 60000;

            console.log(luke11.run());
            assert.isTrue(true);
        }
    });
}());