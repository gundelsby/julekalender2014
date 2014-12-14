var julekalender = julekalender || {};

(function () {
    var math = math || julekalender.util.math;

	julekalender.luke14 = function () {
		return {
			run : function () {
				var i = 0,
					acceptedNumbers = [];

				for(; i < 100000; i++) {
					if(this.isEqualWhenFlipped(i)) {
						acceptedNumbers.push(i);
					}
				}

				console.log(acceptedNumbers);
				console.log(acceptedNumbers.length);
			},
			isEqualWhenFlipped : function (number) {
				if(this.containsUnflippableDigits(number)) {
					return false;
				}
				return number === this.flipDigits(math.reverse(number));
			},
			flipDigits : function (number) {
				var digits = ("" + number).split(""),
					i = 0;
				
				for(; i < digits.length; i++) {
					switch (digits[i]) {
						case "6":
							digits[i] = "9";
							break;
						case "9":
							digits[i] = "6";
							break;
					}
				}

				return parseInt(digits.join(""));	
			},
			containsUnflippableDigits : function (number) {
				var str = "" + number;
				if (str.indexOf(2) > -1
					|| str.indexOf(3) > -1
					|| str.indexOf(4) > -1
					|| str.indexOf(5) > -1
					|| str.indexOf(7) > -1) {
					return true;
				}

				return false;
			}
		}
	}();
}());
/*
I dagens luke skal vi forsøke å finne tall som kan leses likt når de blir rotert 180° (med andre ord; opp ned).

Sifrene vi kan tolke opp ned er 0, 1, 6, 8 og 9 og noen eksempler på tall som blir like opp ned er: 1, 916 og 8008.

Din oppgave er å telle antall heltall, fra og med 0 og opp til 100 000, som kan leses likt opp ned.
*/