(function() {
    var refute = buster.refute;
    var math = math || julekalender.util.math;
    var luke9 = julekalender.luke9;
    
    buster.testCase("luke9", {
        "hasOnlyUniqueCharacters for 1231085 returns false" : function () {
        	refute(luke9.hasOnlyUniqueCharacters("" + 1085 + 123));
        },
        "hasOnlyUniqueCharacters for 1231085 returns boolean" : function () {
        	assert.equals("boolean", typeof luke9.hasOnlyUniqueCharacters("" + 1085 + 123));
        },
        "getUniqueNumbers(123, 199, 1085) returns empty array" : function () {
        	assert.equals(luke9.getUniqueNumbers(123, 199, 1085).length, 0);
        },
        "run program": function() {
            luke9.run();
            
            assert.isTrue(true);
        }
    });
}());