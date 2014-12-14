(function() {
    var luke14 = julekalender.luke14;
    
    buster.testCase("luke14", {
    	"flipDigits(6) should return 9" : function () {
    		assert.equals(luke14.flipDigits(6), 9);
    	},
        "flipDigits(69) should return 96" : function () {
        	assert.equals(luke14.flipDigits(69), 96);
        },
        "flipDigits(916) should return 619" : function () {
        	assert.equals(luke14.flipDigits(916), 619);
        },
        "run program": function() {
    		this.timeout = 60000;

            luke14.run();
            assert.isTrue(true);
        }
    });
}());