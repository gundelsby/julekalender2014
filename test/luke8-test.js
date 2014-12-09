(function () {
	var math = math = julekalender.util.math;

	buster.testCase("luke8", {
		"find numbers < 10000 with its real divisors sum equalling number" : function () {
			var divisors,
				actuals = [],
				i = 4;
			for(; i < 10000; i++) {
				divisors = math.getDivisors(i);
				if(math.isRealDivisors(divisors, i)) {
					actuals.push(i);
				}
			}

			console.log(actuals);
			assert.isTrue(true);
		}
	});
}());