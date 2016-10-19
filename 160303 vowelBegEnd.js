/**Objective
In this challenge, we use regular expressions to evaluate a given string.

Resources 
Check out the Tutorial tab to learn more about regular expressions.

Task
Given a string, ss, composed of lowercase letters [a-z][a-z], determine if the string begins and ends with the same vowel.

The code for handling the input and output is given. You only have to declare the rere variable. 
For example, if the regular expression is [aeiou], then write:

var re = /[aeiou]/;
**/


function matchBegEnd(s){
	var s = string.toLowerCase().slice('');
	var re = /[aeiou]/;

	if(re.test(s[0]) === true){
		var endL=s.slice(-1); 
	    if(s[0] === endL){
	        console.log(true);
	    } else {console.log(false)}; 
	}else {console.log(false)};

}

matchBegEnd(s)
