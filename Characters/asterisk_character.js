/*  Match Characters that Occur Zero or More Times

    The last challenge used the plus + sign to look for characters that occur one or more times. 
    There's also an option that matches characters that occur zero or more times.

    The character to do this is the asterisk or star: *.

    Create a regex chewieRegex that uses the * character to match all the upper and 
    lower"a" characters in chewieQuote. Your regex does not need flags, and it should not match 
    any of the other quotes. the asterisk * to look for zero or more characters.
*/
//Example:
let phrase = "wooooow look at that!";
let regexPlus = /wo+w/;
let regexStar = /wo*w/;
regexPlus.test(phrase); // returns true
regexStar.test(phrase); // returns true

//SetUp:
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let result = chewieQuote.match(chewieRegex);