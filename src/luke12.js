var julekalender = julekalender || {};
(function() {

    julekalender.luke12 = function() {
        return {
    		run : function () {
				var date = new Date(1337, 0, 1),
					endDate = new Date(2014, 11, 12),
					counter = 0;

				while(date.getDay() != 5) {
					date.setDate( date.getDate() + 1);
				}
				while(date < endDate) {
					if(date.getDate() == 13) {
						counter++;
					}
					date.setDate(date.getDate() + 7);
				}

				console.log(counter);
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

/*
Fredag den 13. er når den 13. dagen i en måned faller på en fredag. I vesteuropeiske og særlig engelskspråklige land blir dagen knyttet til uhell eller ulykker. 

Heldigvis er det bare fredag den 12. i dag, men hvor mange fredag den 13. har det vært siden den 1. januar 1337 og fram til i dag?

Julegavetips: Startdatoen i oppgaven er fra før den gregorianske kalender ble innført. Vi har allikevel tatt utgangspunkt i denne kalenderen i fasiten til denne oppgaven.
*/