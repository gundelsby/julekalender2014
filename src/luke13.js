var julekalender = julekalender || {};
(function() {
    var math = math || julekalender.util.math;
    
    julekalender.luke13 = function () {
        return {
    		run : function () {
    			var mirps = [],
    				i = 0;

    			for(; generated_primes[i] < 1000; i++) {
    				if(this.isMirp(generated_primes[i])) {
    					mirps.push(generated_primes[i]);
    				}
    			}

    			console.log(mirps);
    			console.log(mirps.length);
    		},
    		isMirp : function (number) {
    			var candidate = math.reverse(number);
    			
    			return candidate !== number && math.isPrimeNumber(candidate);
    		}
     	};
    }();
}());

/*
Vi definerer MIRPTALL som primtall som fortsatt er primtall når sifrene reverseres, uten at de er palindromer. (Et palindrom er et ord eller tall som gir samme resultat enten det leses fra høyre eller venstre).

For eksempel er 13 et primtall, fordi reversen, 31, også er et primtall. Dette blir da et MIRPTALL.

Eksempler på tall som ikke er MIRPTALL er for eksempel 23. Dette er et primtall, men reverserer vi det får vi 32, som ikke er et primtall. 5 og 101 er heller ikke MIRPTALL, da disse er palindromer.

Hvor mange positive heltall under 1000 er MIRPTALL?

Julegavetips: Selv om 13 og 31 reverseres til hverandre er de fortsatt MIRPTALL “hver for seg” (på grunn av definisjonen). Begge må derfor telles med som en del av resultatet.
*/
