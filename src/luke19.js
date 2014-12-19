var julekalender = julekalender || {};

julekalender.luke19 = (function () {


	return {
		getBiggestPalindrome : function (str) {
			var subStringOffset, tmp, windowSize;

			for(windowSize = str.length-1; windowSize > 0; windowSize--) {
				for(subStringOffset = 0; subStringOffset < str.length - windowSize; subStringOffset++) {
					tmp = str.substring(subStringOffset, subStringOffset + windowSize);
					if(this.isPalinDrome(tmp)) {
						console.log("windowSize", windowSize);
						console.log("subStringOffset", subStringOffset);
						return tmp;
					}
				}
			}
		},
		isPalinDrome : function (str) {
			var rev = str.split("").reverse().join("");
			return rev === str;
		}
	};

}());