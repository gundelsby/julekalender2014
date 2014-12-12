var julekalender = julekalender || {};
(function() {

    julekalender.luke11 = function() {
        return {
    		run : function () {
    			this.primes = generated_primes;
    			console.log("Searching in ", this.primes.length, " prime numbers...");

    			console.log(this.findAnswer());
	  		},
	  		findAnswer : function () {
	  			var i = 541;
	  			for(; i < this.primes.length; i++) {
	  				if(this.hasEqualsSequence(7, i)
	  					&& this.hasEqualsSequence(17, i)
	  					&& this.hasEqualsSequence(41, i)
	  					&& this.hasEqualsSequence(541, i)) {
	  					return this.primes[i];
	  				}
	  			}

	  			return -1;
	  		},
	  		hasEqualsSequence : function (addendCount, currentPosition) {
	  			var currentValue = this.primes[currentPosition],
	  				currentValueHalved = currentValue / 2,
	  				sum,
	  				i = 0,
	  				j = 0;

	  			for(; i < currentPosition || this.primes[i] < currentValueHalved; i++) {
	  				sum = 0;
	  				for(j = 0; j < addendCount; j++) {
		  				sum += this.primes[i + j];
	  				}
		  			if(sum === currentValue) {
		  				return true;
		  			}
	  			}

	  			return false;
	  		}
        };
	}();
}());

/*
I dagens luke skal vi finne en skikkelig skatt av et primtall. Vi er på jakt etter tallet N, som har følgende egenskaper:

Tallet N kan skrives som summen av 7 sammenhengende primtall.
Tallet N kan skrives som summen av 17 sammenhengende primtall.
Tallet N kan skrives som summen av 41 sammenhengende primtall.
Tallet N kan skrives som summen av 541 sammenhengende primtall.
Tallet N skal være et primtall.
Tallet N er det laveste positive heltallet som oppfyller disse egenskapene.
Som et eksempel på hvordan en slik kjede fungerer kan vi ta 41. 41 er nemlig det minste primtallet som kan skrives som summen av 3 (11 + 13 + 17 = 41) og 6 (2 + 3 + 5 + 7 + 11 + 13 = 41) sammenhengende primtall. 
Dette eksemplet bruker 3 og 6 sammenhengende primtall. Oppgaven stiller andre krav til tallet N. Eksemplet med 41 er derfor kun for å illustrere hva vi mener med sammenhengende primtall og hvordan en slik kjede er ment å fungere.

Hva er N?

Julegavetips: N er mindre enn 10 millioner
*/