var julekalender = julekalender || {};
(function() {
    julekalender.luke10 = function() {
        return {
    		run : function (guestCount) {
    			var i = 0,
    				tableSetting = [];

				for(; i < guestCount; i++) {
					tableSetting.push(i+1);
				}

				return this.passTheBottle(tableSetting, 0);
    		},
    		passTheBottle : function (drunkards, spillover) {
				var survivors = [],
					i = spillover;

				if(drunkards.length == 1) {
					return drunkards[0];
				}

				spillover = 0;
				console.log(drunkards[i]);
				for(; i < drunkards.length; i+=2) {
					survivors.push(drunkards[i]);
					if(i === drunkards.length - 1) {
						spillover = 1;
					}
				}

				return this.passTheBottle(survivors, spillover);
	  		}
        };
	}();
}());

/*
På julebordet er vi 1500 mennesker som sitter rundt et stort bord. Vi er nummerert fra 1 til 1500 langs bordet. Vi har fått tak i en flaske med meget sterk (men god!) akevitt.

Den første personen tar flasken og serverer person nummer to en dram. Akevitten er så sterk at denne personen går rett i bakken. Person nummer en sender så flaska videre til den tredje personen som serverer den fjerde en dram. Han går også rett i bakken og flasken sendes videre til femtemann. Dette fortsetter rundt slik at person nummer 1499 serverer person 1500 en dram (hvorpå han dundrer i gulvet) og gir flaska tilbake den første.

Nå serverer den første personen den tredje (som deiser av stolen) og gir flaska videre til den femte...

Dette fortsetter til det bare er en person igjen. Hvilken person sitter igjen ved julebordets slutt?
*/