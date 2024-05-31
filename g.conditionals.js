//conditionals
//?if
//?if...else
//?if...elseif....else
//?switch
//?ternary


if(2<3){
    console.log(2+3);
}

//? number is odd or even

let x = 4

if(x%2 === 0){
    console.log('even');
}else{
    console.log('odd');
}

//? find greatest number among three positive numbers



let a =4;
let b =27;
let c= 6;

if(a>b && a>c){
    console.log(a,' is the greatest');
}else if(b>c){
    console.log(b,'is the greatest');
}else{
    console.log(c,'is the greatest');
}





//?switch best for multiple choice


//?syntax
//switch(variable){
  //  case value:
    //    code
      //  break;

    //  default:
    //code
//}



let dayNumber = 8
switch(dayNumber){
    case 1:
        console.log('sunday');
        break;
    
    case 2:
        console.log('monday');
        break;  
    
     case 3:
        console.log('tuesday');
        break;       

    case 4:
        console.log('wednesday');
        break;           

    default:
        console.log('invalid no');    
}

//? ternary
let remainder=x%2;

remainder===0?console.log('even'):console.log('odd');

//ternary chaining

const a1 = 4;

a1<0?console.log('-ve'):a1>0?console.log('+ve'):console.log('zero');



