//Practice Problem 1 for Eloquent Javascript
//Triangle Increment Program

/*
var triangle = "#";

for (let counter = 1; counter <= 7; counter += 1){
    console.log(triangle);
    triangle += ("#");
}
*/

//Practice Problem 2 for Eloquent Javascript
//Number Divisible Program

/*
for (let numberCount = 1; numberCount <= 100; numberCount++){
    if (numberCount % 3 == 0 && numberCount % 5 == 0){
        console.log("FizzBuzz");
    }
    else if (numberCount % 3 == 0){
        console.log("Fizz");
    }
    else if (numberCount % 5 == 0){
        console.log("Buzz");
    }
    else {
        console.log(numberCount);

    }
}
*/

//Practice Problem 3 for Eleoquent Javascript
//Chess Board Program

/*
var board = "";
var boardSize = 8;

   for (var lineCount = 0; lineCount < boardSize; lineCount++) {
       for (var spaceCount = 0; spaceCount < boardSize; spaceCount++) {
           if (lineCount % 2 == 0) {
                var black = "#";
                var white = " ";
           } 
            else {
                black = " ";
                white = "#";
            }
           if (spaceCount % 2 == 0) {
               board += white;
           } else {
               board += black;
           }
       }
       board += "\n";
   console.log(board);
*/