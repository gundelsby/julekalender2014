var julekalender = julekalender || {};

(function () {
    var math = math || julekalender.util.math;

	julekalender.luke15 = function () {
		return {
			run : function () {
				var i,
					j,
					sets,
					counter = 0;

				for(i = 1023; i < 9876; i++) {
					if(!this.hasMoreThanTwoZeroes(i)) {
						sets = this.generateSets(i);
						for(j = 0; j < sets.length; j++) {
							if(sets[j].x > 9 && sets[j].y > 9 && sets[j].x * sets[j].y === i) {
								counter++;
								break;
							}
						}
					}
				}

				console.log(counter);
			},
			generateSets : function (number) {
				var numberArr = ("" + number).split(""),
					sets = [];

				sets.push({
					x : parseInt([numberArr[0], numberArr[1]].join("")),
					y : parseInt([numberArr[2], numberArr[3]].join(""))
				});
				sets.push({
					x : parseInt([numberArr[0], numberArr[1]].join("")),
					y : parseInt([numberArr[3], numberArr[2]].join(""))
				});
				sets.push({
					x : parseInt([numberArr[0], numberArr[2]].join("")),
					y : parseInt([numberArr[1], numberArr[3]].join(""))
				});
				sets.push({
					x : parseInt([numberArr[0], numberArr[2]].join("")),
					y : parseInt([numberArr[3], numberArr[1]].join(""))
				});
				sets.push({
					x : parseInt([numberArr[0], numberArr[3]].join("")),
					y : parseInt([numberArr[1], numberArr[2]].join(""))
				});
				sets.push({
					x : parseInt([numberArr[0], numberArr[3]].join("")),
					y : parseInt([numberArr[2], numberArr[1]].join(""))
				});
				sets.push({
					x : parseInt([numberArr[1], numberArr[0]].join("")),
					y : parseInt([numberArr[2], numberArr[3]].join(""))
				});
				sets.push({
					x : parseInt([numberArr[1], numberArr[0]].join("")),
					y : parseInt([numberArr[3], numberArr[2]].join(""))
				});
				sets.push({
					x : parseInt([numberArr[1], numberArr[2]].join("")),
					y : parseInt([numberArr[3], numberArr[0]].join(""))
				});
				sets.push({
					x : parseInt([numberArr[1], numberArr[3]].join("")),
					y : parseInt([numberArr[2], numberArr[0]].join(""))
				});

				return sets;
			},
			hasMoreThanTwoZeroes : function (number) {
				var str = "" + number,
					i = 0,
					count = 0;
				for(; i < str.length; i++) {
					if(str[i] === "0") {
						count++
					}
					if(count > 1) {
						return true;
					}
				}

				return false;
			}
		};
	}();
}());
/*
Vi skal finne tallene, n, som har følgende egenskaper:
n består av 4 siffer.
n = x * y.
x og y består av 2 siffer.
Sifrene i x og y utgjør sifrene i n.
Både x og y kan ikke være delelig på 10 (men én eller ingen kan).

Eksempler på tall som oppfyller dette er 1260 (= 21 * 60) og 1395 (= 15 * 93).

Eksemplene viser at vi kan stokke vilkårlig om på sifrene i x og y. Kravet er kun at de skal bestå av de samme sifrene som i n.

Legg også merke til at i det første eksemplet er y, 60, delelig på 10, men kravet vi stiller er at både x og y ikke skal være delelig på 10, noe 21 ikke er.

Hvor mange tall (antall n) finnes det som oppfyller disse egenskapene?
*/