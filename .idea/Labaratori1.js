//1 задание


let a = 43;let b ;
let c = "dfhrdg";let d = null;
let f = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof f);
//2 задание


let a2 = 43;let b2 = 56;
if (a2==b2)
{
console.log("true");}
else
console.log("false");
if (a2<b2)
 {
 console.log("true"); }
 else
 console.log("false");
if (a2<=b2)
{console.log("true");
}else
console.log("false");
if (a2>b2)
{console.log("true");
}else
console.log("false");
//3 задание


let a3 = false;
let b3 = null;
let c3 ;
console.log( a3);
console.log(b3);
console.log( c3);
//4 задание


let a4 ="1"+2+3;
console.log( a4);
let b4 =1+2+"3";
console.log( b4);
let c4 ="1"-2;
console.log( c4);
let d4 = "1"+-2;
console.log( d4);
let f4 = "1"+"1"-"1";
console.log( f4);
let e4 ="foo"+-"bar";
console.log( e4);
let q4 = 0=="0";
console.log( q4);
let w4 = 0.5+0.1==0.6;
console.log( w4);
let r4 = 0.1+0.2==0.3;
console.log( r4);
let t4 = true+true+true==3;
console.log( t4);
let y4 = true==1;
console.log( y4);
let z4 = true===1;
console.log( z4);
let x4 = 1<2<3;
console.log( x4);
let v4 = 3>2>1;
console.log( v4);

let g4 = 9007199254740991+1==9007199254740991+2;console.log( g4);
let h4 = Math.sqrt(-1) == Math.sqrt(-1);
console.log( h4);
//5 задание


let str1="кто ";
let str2="ты ";let str3="такой?";
let concatenation= str1 + str2 + str3;
console.log( concatenation);
//6 задание



let str = "20";
let a6 = 5;
console.log(str + a6);
console.log(str - a6);
console.log(str * "2");
console.log(str / 2);

//7 задание

let a7 ="12";
let b7 = "7.15";
let c7 = Math.round(Number(a7)%Number(b7))
console.log(c7);


//8 задание

let x8 = Number(prompt("введите число: "));
let c8 =(x8**2-7*x8+10)/(x8**2-8*x8+12)
alert(c8);
console.log(c8);


//9 задание

let x9 = prompt("введите email: ");
let cx9 = '@';

if (x9.includes(cx9)) {
  console.log(x9);
} else {
   alert("Не найдет символ @,праверьте правильность email");
  console.log("Не найдет символ @,праверьте правильность email");
}



//2.1

let age = Number(prompt("введите возраст: "));

if (age>=1 && age <=17){
 alert("Для детей");
   console.log("Для детей");
};
if (age>=18 && age<=30){
 alert("Для молодежи");
   console.log("Для молодежи");
};
if (age<1 || age>30){
 alert("Для всех возростов");
 console.log("Для всех возростов");
};



//2.2

let a2_2 = Number(prompt("введите число1: "));
let b2_2 = Number(prompt("введите число2: "));
let max = a2_2>b2_2?a2_2:b2_2;
console.log(max);


//2.3



let a2_3 = Number(prompt("введите число ворон: "));
if (a>=1 || a<=10)
{
switch(a2_3) {
  case 1:
  alert("На ветке сидит одна ворона");
   console.log("На ветке сидит одна ворона");
    break;

  case 2:
    alert("На ветке сидит две вороны");
       console.log("На ветке сидит две вороны");
    break;
    case 3:
        alert("На ветке сидит три вороны");
           console.log("На ветке сидит три  вороны");
    break;
    case 4:
        alert("На ветке сидит четыре вороны");
           console.log("На ветке сидит четыре вороны");
    break;
    case 5:
            alert("На ветке сидит пять ворон");
               console.log("На ветке сидит пять ворон");
    break;
    case 6:
                alert("На ветке сидит шесть ворон");
                   console.log("На ветке сидит шесть ворон");
    break;
    case 7:
                alert("На ветке сидит семь ворон");
                   console.log("На ветке сидит семь ворон");
    break;
    case 8:
                alert("На ветке сидит восемь ворон");
                   console.log("На ветке сидит восемь ворон");
    break;
    case 9:
                alert("На ветке сидит девять ворон");
                   console.log("На ветке сидит девять ворон");
    break;
    case 10:
                alert("На ветке сидит десять ворон");
                   console.log("На ветке сидит десять ворон");
    break;



}
}
else
{
alert("Число ворон должно быть от 1 до 10");
};



//2.4

let a2_4 = 0;

while (a2_4<=50)
{ if(a2_4%2!=0)
{
console.log(a2_4);
}
a2_4++;
};
let b2_4;

for (b2_4=0;b2_4<=50;b2_4++)
{ if(b2_4%2!=0)
{
console.log(b2_4);
}
};



//2.5


let a2_5;
let b2_5=0;
for (a2_5=0;a2_5<=15;a2_5++)
{ if(a2_5!=5 && a2_5!=7)
{
b2_5=a2_5+b2_5;
}
};
console.log(b2_5);

//2.6
let a2_6 = Number(prompt("введите число x: "));
let b2_6 = Number(prompt("введите число y: "));
let c2_6=1;
let i2_6=0;
while(i2_6<b2_6)
{
c2_6=c2_6*a2_6;
i2_6++;
}
console.log(c2_6);
