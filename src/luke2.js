/*
 * @depend util/math.js
 */

var julekalender = julekalender || {};

julekalender.luke2 = (function () {
	var math = julekalender.util.math;

	var getNextPrimeNumber = function (number) {
		while(true) {
			if(math.isPrimeNumber(number)) {
				return number;
			}
			number++;
		}

	};

	return {
		init : function (container) {
			var self = this;
			this.resultOutput = container.find(".result p");

			container.find("button").on("click", self.buttonClickHandler);
		},
		buttonClickHandler : function (event) {
			var input = event.target.parent().find("#luke2_number").value;
			if(input) {
				this.result.text(this.getResult(input));
			}
		},
		getResult : function (number) {
			var digits = [number],
				sequences = [],
				lastPrime;

			while(digits.length < number) {
				lastPrime = getNextPrimeNumber(digits[digits.length-1] * 10);
				while(sequences.indexOf(lastPrime) > -1){
					lastPrime = getNextPrimeNumber(lastPrime + 1);
				}
				sequences.push(lastPrime);
				digits.push(lastPrime % (digits[digits.length-1] * 10));
			}

			return parseInt(digits.join(""));
		}
	};
}());
