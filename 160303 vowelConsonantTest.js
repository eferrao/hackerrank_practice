function vowelsAndConsonants(s) {
    
    var string = s.toLowerCase().split(''), 
    c = '', 
    vArray = ['a','e','i','o','u']; 

    for (c of string){
        if(vArray.indexOf(c)!==-1){
            console.log(c);
        }
    }

    for (c of string){
        if(vArray.indexOf(c)===-1){
            console.log(c);
        }
    }
}

vowelsAndConsonants("javascriptloops")