var julekalender = julekalender || {};
julekalender.util = julekalender.util || {};

(function () {
	julekalender.util.math = function () {
		return {
			isPrimeNumber : function (number) {
				var i, limit;

				if(number < 2) {
					return false;
				}
				
				limit = Math.ceil(number/2);
				for(i = 2; i <= limit; i++) {
					if(number % i === 0) {
						return false;
					}
				}

				return true;
			},
			getDivisors : function (number) {
				var i = 1,
					divisors = [i],
					limit = Math.ceil(number/2);

				for(i++; i <= limit; i++) {
					if(number % i === 0) {
						divisors.push(i);
					}
				}

				return divisors;
			},
			isRealDivisors : function (divisors, product) {
				var sum = 0,
					i = 0;
				
				for(; i < divisors.length; i++) {
					sum += divisors[i];
				}

				return sum === product;
			}
		};
	}();
}());
