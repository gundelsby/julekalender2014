/*
Tenk deg et rutenett med 10x10 ruter, som kan være hvite eller sorte. Koordinatene telles fra 0, så vi har koordinater 0-9 langs X og Y-aksene. Alle rutene har et nummer, som er definert som X*10+Y. Så rute (5,7) har nummer 57, og rute (9,9) har nummer 99.

I begynnelsen er alle rutene hvite. I posisjon (0,0) står en sjakk-springer (også kjent som hest).

Brikken flytter etter følgende regler hver runde:
Undersøk rutene springeren kan flytte til (etter vanlige sjakk-regler uten å forlate rutenettet). Flytt til den av disse rutene som har lavest nummer og som har samme farge som ruten springeren står på. Hvis ingen av disse rutene har samme farge, flytt til den ruten som har høyest nummer.
Etter at springeren har flyttet, flipp fargen på ruten som springeren nettopp forlot til den motsatte fargen. Hvis ruten springeren stod i var svart, skal ruten etter flyttet bli hvit (og omvendt).
Hvor mange av rutene er sorte når springeren har flyttet 200 ganger? (Ja, fargen på ruten springeren forlot den siste gangen skal skiftes før du teller.)
*/
(function () {
	var luke3 = julekalender.luke3;
	var math = julekalender.util.math;

	buster.testCase("Luke 3", {
	    "luke3 is an object": function () {
	        assert.isObject(luke3);
	    },
	    "luke3.board is an array with length of 10" : function () {
	    	luke3.init();
	    	assert.equals(10, luke3.board.length);
	    },
	    "luke3.board's items are arrays with length of 10" : function () {
	    	var i;

	    	luke3.init();
	    	for(i = 0; i < luke3.board.length; i++) {
	    		assert.equals(10, luke3.board[i].length);
	    	}
	    },
	    "luke3.board all tiles are white" : function () {
	    	var i, j;

	    	luke3.init();
	    	for(i = 0; i < luke3.board.length; i++) {
	    		for(j = 0; j < luke3.board[i].length; j++) {
	    			assert.equals("white", luke3.board[i][j].color);
	    		}
	    	}
	    },
	    "luke3.init sets piece position to 0,0" : function () {
	    	luke3.init(),

	    	assert.equals(0, luke3.piece.x);
	    	assert.equals(0, luke3.piece.y);
	    },
	    "luke3.piece position is 0,0, after movePiece() position is 1,2" : function () {
	    	luke3.init();
	    	luke3.movePiece();

	    	assert.equals(1, luke3.piece.x);
	    	assert.equals(2, luke3.piece.y);
	    },
	    "piece positions is 0,0, after movePiece tile 0,0 is black" : function () {
	    	luke3.init();
	    	luke3.movePiece();

	    	assert.equals("black", luke3.board[0][0].color);
	    },
	    "piece position is 0,0, after 2 x movePiece position is 0,4" : function () {
	    	luke3.init();
	    	luke3.movePiece();
	    	luke3.movePiece();

	    	assert.equals(0, luke3.piece.x);
	    	assert.equals(4, luke3.piece.y);
	    },
	    "move piece 200 times, count black squares" : function () {
	    	var i,
	    		j,
	    		blackSquareCount = 0;
	    	luke3.init();

	    	for(i = 0; i < 200; i++) {
	    		luke3.movePiece();
	    	}

	    	for(i = 0; i < luke3.board.length; i++) {
	    		for(j = 0; j < luke3.board[i].length; j++) {
	    			if("black" === luke3.board[i][j].color) {
	    				blackSquareCount++;
	    			}
	    		}
	    	}

	    	console.log("Black squares: " + blackSquareCount);
	    }
	});
}());
