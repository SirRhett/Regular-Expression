/*              Match All Numbers

    You've learned shortcuts for common string patterns like alphanumerics. 
    Another common pattern is looking for just digits or numbers.

    The shortcut to look for digit characters is \d, with a lowercase d. This is 
    equal to the character class [0-9], which looks for a single character of any 
    number between zero and nine.

    Use the shorthand character class \d to count how many digits are in movie titles. 
    Written out numbers ("six" instead of 6) do not count.
*/
//SetUp:
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/gi; // Change this line
let result = numString.match(numRegex).length;

_______________________________________________________

/*              Match All Non-Numbers

The last challenge showed how to search for digits using the shortcut \d with a 
lowercase d. You can also search for non-digits using a similar shortcut that uses an 
uppercase D instead.

The shortcut to look for non-digit characters is \D. This is equal to the character 
class [^0-9], which looks for a single character that is not a number between zero and nine.


Use the shorthand character class for non-digits \D to count how many non-digits 
are in movie titles.
*/
//SetUp:
let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/gi; // Change this line
let result = numString.match(noNumRegex).length;