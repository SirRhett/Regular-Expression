/*          Match Numbers and Letters of the Alphabet

    You saw how you can use character sets to specify a group of characters to match, 
    but that's a lot of typing when you need to match a large range of characters 
    (for example, every letter in the alphabet). Fortunately, there is a built-in feature 
    that makes this short and simple.

    Inside a character set, you can define a range of characters to match using a 
    hyphen character: -.

    For example, to match lowercase letters a through e you would use [a-e].
*/
                let catStr = "cat";
                let batStr = "bat";
                let matStr = "mat";
                let bgRegex = /[a-e]at/;
                catStr.match(bgRegex); // Returns ["cat"]
                batStr.match(bgRegex); // Returns ["bat"]
                matStr.match(bgRegex); // Returns null
/*
Also, it is possible to combine a range of letters and numbers in a single character set.
*/
                let jennyStr = "Jenny8675309";
                let myRegex = /[a-z0-9]/ig;
                // matches all letters and numbers in jennyStr
                jennyStr.match(myRegex);
/*
*/
//SetUp
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line