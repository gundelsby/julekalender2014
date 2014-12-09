var julekalender = julekalender || {};
(function() {
    julekalender.luke9 = function() {
        return {
            run: function() {
                var validSums = this.getUniqueNumbers(1000, 1830, ""), 
                    validAddends,
                    lastAddend,
                    lowestAddend,
                    i, j;

                for (i = 0; i < validSums.length; i++) {
                    validAddends = this.getUniqueNumbers(123, 987, validSums[i]);
                    for (j = 0; j < validAddends.length; j++) {
                        lastAddend = validSums[i] - validAddends[j];
                        if (lastAddend >= 123 && lastAddend <= 987) {
                            if (this.hasOnlyUniqueCharacters("" + lastAddend + validSums[i] + validAddends[j])) {
                                if (!lowestAddend || lastAddend < lowestAddend) {
                                    lowestAddend = lastAddend;
                                }
                            }
                        }
                    }
                }
                console.log(lowestAddend);
            },
            hasOnlyUniqueCharacters: function(input) {
                var unique = "",
                    string = "" + input,
                    i;

                for (i = 0; i < string.length; i++) {
                    if (string.lastIndexOf(string[i]) == string.indexOf(string[i])) {
                        unique += string[i];
                    }
                }
                return (unique.length === string.length);
            },
            getUniqueNumbers: function(low, high, excludedDigits) {
                var numbers = [];
                for (; low <= high; low++) {
                    if (this.hasOnlyUniqueCharacters(low) && this.hasOnlyUniqueCharacters("" + low + excludedDigits)) {
                        numbers.push(low);
                    }
                }
                return numbers;
            }
        };
    }();
}());