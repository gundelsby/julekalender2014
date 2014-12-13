(function() {
    var luke13 = julekalender.luke13;
    
    buster.testCase("luke13", {
        "run program": function() {
    		this.timeout = 60000;

            luke13.run();
            assert.isTrue(true);
        }
    });
}());