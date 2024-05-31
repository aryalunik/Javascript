//? string to number conversion

const x = '45';//numeric string
//const y =Number(x);
const y = +x;
console.log(y,typeof y);

//parseInt , parseFloat
const m ='12.2';
const n = parseInt(m);
const e = parseFloat(m);
console.log(n,typeof n,e, typeof e);
//?to string conversion

const isMarried = String(true);
console.log(isMarried,typeof isMarried);

//? template literal

const username = 'Smriti';
//Hi, I am Smriti.

console.log('Hi, I am ',username, '.');


//? string concatenation
console.log('Hi , I am '+username+'.');
console.log(`Hi, I am ${username}`);//template lateral

const h =3
const g = `${h}`;
console.log(g,typeof g);

