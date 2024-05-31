//loopsssssssssssssssssssdsdss

//1.for
//2.while
//3. do while

//for(initial valu;condition;increment/decrement){

//}
//?for(let i=1;i<=10;i++){
//?console.log(i);
//?}

//?for(j=100;j>=50;j--){
//?console.log(j);
//?}

let x = 7;
let y = 0;

/*for(i=1;i<=x;i++){
  if(x%i===0){
    y++;
  };
}
if(y===2){
  console.log("prime");
}else{
  console.log("not prime");
};
*/

//efficient

let a = 16;
let isPrime = true;
for (let l = 2; l < a; l++) {
  if (a % l === 0) {
    isPrime = false;
  }
}
isPrime ? console.log("not prime") : console.log("prime");

/*while loop
while(condition){

}
*/

/*
do{
  codeee
}while()
*/
