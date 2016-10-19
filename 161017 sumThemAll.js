//We consider the sum of an array of integers to be the sum of its individual elements. For example, if the array is numbers=[1,2,3,4], the sum of the array is 1+2+3+4 = 10. 
//Complete the sum function in the editor. It has 1 parameter: an arry of n integers, numbers. It must return na integer denoting the sum of number's elements
//First line contains an integer, n, denoting the size of the numbers array

function processData(input) {
    var lines = input.split('\n');
    var n = parseInt(lines.shift(), 10);

    var data = lines.shift().split(' ').map(function (s) { return parseInt(s, 10) });
    data.sort(function(o1, o2) { return o1 - o2; });
    process.stdout.write(sum(data) + '\n');
} 

function sum(numbers){

}


process.stdin.resume();
process.stdin.setEncoding('ascii');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function (data) {
    __input_stdin += data;
});

process.stdin.on('end', function () {
    __input_stdin_array = __input_stdin.split("\n");
    var res;
    var n = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
    __input_currentline += 1;
    for (var i = 0; i<n;i++) {
        var _line = __input_stdin_array[__input_currentline].trim();
        __input_currentline += 1;
        var line = _line.split(" ");
        var _a = parseInt(line[0]);
        var _b = parseInt(line[1]);
        res = _a + _b;
        process.stdout.write(""+res+"\n");
    }
});