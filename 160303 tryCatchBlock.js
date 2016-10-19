/**
Task

Given a variable named my_stringmy_string, try reversing the string using my_string.split(my_string.split(``).reverse().join().reverse().join(``)) and then print the reversed string to the console. 
If the try clause has an error, print the error message to the console. 
Finally, print the typeof of the my_stringmy_string variable to the console.

Output Format

The statement to print in the try block is:

Reversed string is : ${my_string}
The statement to print in the catch block is:

Error : ${err.message}
The statement to print in the finally block is:

Type of my_string is : ${typeof my_string}
**/

// function processData(my_string) {
//     try{
//         var reverseS=my_string.split('').reverse().join(''); 
//         console.log("Reversed string is: "+reverseS)
//     }catch(err){
//         console.log(err)
//     }finally{
//         console.log("Type of my_string is :"+typeof my_string)
//     }
// } 


// processData('1234')


function Square(A, B, C, D){
    this.A = A;
    this.B = B;
    this.C = C;
    this.D = D;
}
//Write Your Code Below This Line

var mySquare = new Square(3,3,3,3)



Square.prototype.isSquare = function(){ 
    if(this.A == this.B && this.A == this.C && this.A == this.D){ 
        console.log(true); 
    }else{ 
        console.log(false); 
    } 
}

// Square.prototype.isSquare = function(){ if(this.A == this.B && this.A == this.C && this.A == this.D){ console.log(true); }else{ console.log(false); } }

console.log(mySquare.isSquare)
