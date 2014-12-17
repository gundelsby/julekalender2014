var julekalender = julekalender || {};

(function () {
	julekalender.luke16 = function () {
		return {
			run : function () {
				var number,
					powCounter = 20,
					target = 472047,
					tmpStr,
					result;

				for(; powCounter < 100; powCounter++) {
					number = Math.pow(2, powCounter);
					tmpStr = bigInt2str(number, 10);
					console.log(tmpStr);
					if(number > target && tmpStr.indexOf(""+target) > -1) {
						console.log("Found ", powCounter);
						result = powCounter;
						break;
					}
				}

				console.log(result);
			}
		};
	}();
}());

/*
En toerpotens er et tall som kan skrives som 2^n der n er et heltall.

Søk gjennom alle toerpotenser mindre enn 2^10000 og returner første n der en gitt substring forekommer. 

For eksempel, hvis stringen er “02”, så er svaret 10, fordi  2^10 = 1024 og ingen lavere toerpotenser inneholder “02”.

Hva er n for den minste toerpotensen som inneholder “472047”?
*/