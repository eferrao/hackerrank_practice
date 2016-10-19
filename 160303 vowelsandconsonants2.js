//utilizes regular expression
function vowelsAndConsonants(s){
	var s = s.toLowerCase().slice('');
	//var re = match the letters aeiou
	//opposite = re = /[^aeiou]/ => that ^ means don't match
	var re = /[aeiou]/; 
	var c=[], v=[];  

	for (var i=0; i<s.length; i++){
		//if match of s[i] to any letter inside re === true, push to vowels
		if (re.test(s[i]) === true){
			v.push(s[i])
		}
		//if match is false, add to consonants
		if (re.test(s[i]) === false){
			c.push(s[i])
		}
	}
	
	//cycles through and prints letter x or array v
	//if you were to do for(x IN v) - would print out number
	for (x of v){console.log(x)}
	for (x of c){console.log(x)}
}

vowelsAndConsonants('javascriptloop')