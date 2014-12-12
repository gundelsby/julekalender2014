(function() {
    var luke12 = julekalender.luke12;
    
    buster.testCase("luke12", {
        "run program": function() {
    		this.timeout = 60000;

            luke12.run();
            assert.isTrue(true);
        }
    });
}());