// Complete the given staircase function which takes an integer N, the height of the staircase as its argument and prints out the staircase as shown below:
//     #
//    ##
//   ###
//  ####
// ##### 

function StairCases(n){
        var a = n;
        for (x=0; n; x++){
                StairCase(n, a);
                n--;
        }
} 

function StairCase(n, a) {
        //n is amount of "staircases". Will need 2 counters = spaceCounter, casesCounter (n)
        //1st staircase = n-1 spaces + n. Push to Array. Convert arry to string.
        // var spaces = ' '; 
        // var cases = "#"; 
        
        var spaceCount = n-1; 
        var stairCase = [];
        
        var numCount = a - spaceCount; 


        while(spaceCount>0){
                stairCase.push(' '); 
                spaceCount--;
        }

        while(numCount>0){
                stairCase.push('#'); 
                numCount--;
        }

        var stairs = stairCase.join('')
        console.log(stairs)
}

StairCases(5)

//HackerRank Solution:
/*
 * Complete the function below.
 */
// function StairCase(n){
//         var a = n;
//         for (x=0; n; x++){
//                 StairCas(n, a);
//                 n--;
//         }
// } 

// function StairCas(n, a) {
//         //n is amount of "staircases". Will need 2 counters = spaceCounter, casesCounter (n)
//         //1st staircase = n-1 spaces + n. Push to Array. Convert arry to string.
//         // var spaces = ' '; 
//         // var cases = "#"; 
        
//         var spaceCount = n-1; 
//         var stairCase = [];
        
//         var numCount = a - spaceCount; 


//         while(spaceCount>0){
//                 stairCase.push(' '); 
//                 spaceCount--;
//         }

//         while(numCount>0){
//                 stairCase.push('#'); 
//                 numCount--;
//         }

//         var stairs = stairCase.join('')
//         process.stdout.write(stairs + '\n')
// }

