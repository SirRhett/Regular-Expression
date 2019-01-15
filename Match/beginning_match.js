/*      Match Beginning String Patterns

Prior challenges showed that regular expressions can be used to look for a 
number of matches. They are also used to search for patterns in specific 
positions in strings.

In an earlier challenge, you used the caret character (^) inside a character 
set to create a negated character set in the form [^thingsThatWillNotBeMatched]. 
Outside of a character set, the caret is used to search for patterns at the 
beginning of strings.
*/
//SetUp
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);