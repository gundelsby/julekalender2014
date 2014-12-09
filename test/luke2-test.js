/*
For et gitt nummer, n, finn tallet m, hvor det første sifferet i m = n og antall siffer i m = n og hver tosifret tallsekvens i m skal være unike primtall. Tallet skal også være lavest mulig.

Eksempel: Dersom n = 5 blir m = 53113.
Første siffer i m er 5.
Antall siffer i m er 5.
De tosifrete tallsekvensene i m, 53, 31, 11 og 13, er alle unike primtall.
Det er det laveste mulige tallet som oppfyller alle disse egenskapene.

*/
(function () {
	var luke2 = julekalender.luke2;
	var math = julekalender.util.math;

	buster.testCase("Luke 2", {
	    "luke2 is an object": function () {
	        assert.isObject(luke2);
	    },
	    ".getResult(x) returns a number with digit count equal to x" : function () {
	    	var x = 7,
	    		result = "" + luke2.getResult(x);

	    	assert.equals(x, result.length);
	    },
	    ".getResult(x) return a number where x is first digit" : function () {
	    	var x = 5,
	    		result = "" + luke2.getResult(x);

	    	assert.equals("" + x, result.charAt(0));
	    },
	    ".getResult(x) returns a number where all two digit sequences are prime numbers" : function () {
	    	var result = "" + luke2.getResult(9),
	    		sequences = [],
	    		i;

	    	for(i = 0; i < result.length-1; i++) {
    			sequences.push(result.substr(i, 2));
	    	}

	    	for(i = 0; i < sequences.length; i++) {
	    		assert.isTrue(math.isPrimeNumber(parseInt(sequences[i], 10)), "" + sequences[i]);
	    	}

	    }
	});
}());
