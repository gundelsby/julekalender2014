(function() {
    var luke16 = julekalender.luke16;
    
    buster.testCase("luke16", {
        "run program": function() {
    		this.timeout = 60000;

            luke16.run();
            assert.isTrue(true);
        }
    });
}());