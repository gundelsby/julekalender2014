(function() {
    var luke15 = julekalender.luke15;
    
    buster.testCase("luke15", {
        "run program": function() {
    		this.timeout = 60000;

            luke15.run();
            assert.isTrue(true);
        }
    });
}());