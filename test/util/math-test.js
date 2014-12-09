(function () {
	var math = math = julekalender.util.math;

	buster.testCase("util.math", {
	    "isPrimeNumber returns true for prime numbers": function () {
	    	var primes = [2, 13, 5009,5011,5021],
	    		i;

	    	for(i = 0; i < primes.length; i++) {
	    		assert.isTrue(math.isPrimeNumber(primes[i]), "" + primes[i]);
	    	}
	    },
	    "isPrimeNumber returns false for non-prime numbers": function () {
	    	var nonPrimes = [0, 1, 4, 8, 220, 350, 384, 1024, 4096, 8192],
	    		i;

	    	for(i = 0; i < nonPrimes.length; i++) {
	    		assert.isFalse(math.isPrimeNumber(nonPrimes[i]), ""+ nonPrimes[i]);
	    	}
	    },
	    "getRealDivisors return an array" : function () {
	    	var numbers = math.getDivisors(6);

	    	assert.isArray(numbers);
	    },
	    "getDivisors(6) returns 1, 2 and 3" : function () {
	    	var numbers = math.getDivisors(6);

	    	assert.equals(3, numbers.length);
	    	assert.greater(numbers.indexOf(1), -1, 1);
	    	assert.greater(numbers.indexOf(2), -1, 2);
	    	assert.greater(numbers.indexOf(3), -1, 3);
	    },
	    "getDivisors(18) returns 1, 2, 3, 6 and 9 " : function () {
	    	var numbers = math.getDivisors(18);
	    	
	    	assert.equals(5, numbers.length);
	    	assert.greater(numbers.indexOf(1), -1);
	    	assert.greater(numbers.indexOf(2), -1);
	    	assert.greater(numbers.indexOf(3), -1);
	    	assert.greater(numbers.indexOf(6), -1);
	    	assert.greater(numbers.indexOf(9), -1);
	    },
	    "isRealDivisors with divisors for 6 returns true" : function () {
	    	var divisors = math.getDivisors(6);

	    	assert.isTrue(math.isRealDivisors(divisors, 6));
	    },
	    "isRealDivisors with divisors for 18 returns false" : function () {
	    	var divisors = math.getDivisors(18);

	    	assert.isFalse(math.isRealDivisors(divisors, 18));
	    }
	});
}());

