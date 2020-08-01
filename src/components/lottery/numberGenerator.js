export default function generateNumber(n){
   let possibleNumbers = [];
   let draw = [];
   let pos;
   for (let i = 0 ; i < 60 ; i++){
       // 60 is a arbitrary value, its the number of balls in a normal brazilian lottery, 1 through 60.
       possibleNumbers[i] = i+1;
   }
   for (let i = 0 ; i < n ; i++){
        pos = Math.ceil(Math.random()*(59-i));
        draw[i] = possibleNumbers[pos];
        possibleNumbers.splice(pos,1);
   }
   return draw.sort((a,b)=>a-b);
}