(function() {
    var math = math || julekalender.util.math;
    var luke10 = julekalender.luke10;
    
    buster.testCase("luke10", {
        "run program": function() {
            var lastManStanding = luke10.run(1500);
            
            console.log(lastManStanding);
            assert.isTrue(true);
        }
    });
}());