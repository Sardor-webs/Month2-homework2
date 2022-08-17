// //==============={1-masala}==============
// let l = 30 ;
// let metr = l/100;
// console.log(`${metr} metrs in ${l} santimetrs`);


// //==============={2-masala}==============
// let m = 1000 ;
// let tonn = m/1000;
// console.log(`${tonn} tonns in ${m} kilogramms`);


// //==============={3-masala}===============
// let b = 10 ;
// let a = 20 ;
// let result = a/b;
// console.log(`${result} martta`);


// //==============={4-masala}===============
// let son = 43;
// let onlikXona = son/10;
// let qoldiq = son%10/10;
// let resultOnlik = onlikXona - qoldiq;
// let birlik = son%10;
// console.log(resultOnlik + " onlik " + birlik + " birlik");


// //==============={5-masala}===============
// let son = 87;
// let onlikXona = son/10;
// let qoldiq = son%10/10;
// let resultOnlik = onlikXona - qoldiq;
// let birlik = son%10;
// let yigindi = birlik + resultOnlik;
// console.log(yigindi);


// //==============={6-masala}===============
// let son = 46;
// let onlikXona = son/10;
// let qoldiq = son%10/10;
// let resultOnlik = onlikXona - qoldiq;
// let birlik = son%10;
// let kopaytma = birlik * resultOnlik;
// console.log(kopaytma);


// //================{7-masala}===============
// let num = 1234;
// let yuzlarXonasi= num / 100 ;
// let qoldiq =num % 100 /100;
// let butun = yuzlarXonasi - qoldiq;
// console.log(butun);


// //=============={8-masala}==============
// let sekund =28937454;
// let soat = sekund / 3600 ;
// let soatQoldiq = sekund % 3600 /3600;
// let butunSoat = Math.round( soat - soatQoldiq);
// let qolganSekund = soatQoldiq *3600;
// let minut = qolganSekund / 60;
// let qolganSekund2 = qolganSekund % 60/60;
// let butunMinut = Math.round(minut - qolganSekund2);
// let resultSekund = Math.round( qolganSekund2 *60 );
// console.log(`${butunSoat} soat , ${butunMinut} minut , ${resultSekund} sekund o'tdi  `);




//===============  | IF ELSE | ===============




// //==============={1-masala}===============
// let num = 7 ;
// if(num>0){
//     console.log(`${num} musbat son`);
// }else{
//     console.log(`${num} manfiy son`);
// }


// //==============={2-masala}===============
// let num = 16;
// let toqmi = num % 2;
// if(toqmi>0){
//     console.log(`${num} toq son`);
// }else{
//     console.log(`${num} juft son`);
// }



// //==============={3-masala}===============
// let num = 54;
// let toqmi = num % 2;
// if(toqmi>0){
//     console.log(`${num} toq son`);
// }else{
//     console.log(`${num} juft son`);
// }




// //==============={4-masala}===============
// let num1 =234; 
// let num2 =432; 
//  if(num1>0 && num2>0){
//     console.log(`true`);
//  }else{
//     console.log(`false`);
//  }



// //================{5-masala}===============
// let a= 88;
// let b= 24;
// let c= 18;
//  if(a>b && b>c){
//     console.log(`true`);
//  }else{
//     console.log(`false`);
//  }




// //==============={6-masala}=================
// let a = 12 ,
//     b = 19 ,
//     c = 25;
// if(a<b && b<c){
//     console.log('true');
// }else{
//     console.log('false');
// }


// //==============={7-masala}==================
// let num1 = 43;
// let num2 = 17;
// let toqmi1 = num1 % 2;
// let toqmi2 = num2 % 2;
// if (toqmi1>0 && toqmi2>0) {
//     console.log('true');
// }else{
//     console.log('false');
// }




// //==============={8-masala}===================
// let num1 = 12,
//     num2 = 40,
//     num3 = 64,
//     num4 = 5672;

// if (num1>0 && num2>0 && num3>0 && num4>0) {
//     console.log('true');
// } else {
//     console.log('false');
// }



// //================={9-masala}=================
// let num1 = 6,
//     num2 = -17,
//     num3 = 1;
// if (num1 > 0 || num2 > 0 && num3 > 0) {
//     console.log('true');    
// } else {
//     console.log('false');    
// }



// //==============={10-masala}==================
// let num = 15,
//     kun = num % 21;
// if (kun == 1) {
//     console.log('Dushanba');
// } else if (kun == 2) {
//     console.log('Seshanba');
// } else if (kun == 3) {
//     console.log('Chorshanba');
// } else if (kun == 4) {
//     console.log('Payshanba');
// } else if (kun == 5) {
//     console.log('Juma');
// } else if (kun == 6) {
//     console.log('Shanba');
// } else {
//     console.log('Yakshanba');
// }



// // //==============={11-masala}=====================
// let code = 33 ;
// if (code == 33) {
//     console.log('Humans'); 
// } else if (code == 93 || code==94){
//     console.log('Ucell');     
// } else if (code == 99 || code==95){
//     console.log('Uzmobile');     
// } else{
//     console.log('Bolmadim');     
// }




// //===================={12-masala}=====================
// let num = 23;
// if (num>=0) {
//     console.log(++num);
    
// } else {
//     console.log(--num);
// }





// //====================={13-masala}=====================
// let num = -47;
// if (num>=0) {
//     console.log(num + 3);
    
// } else {
//     console.log(num-2);
// }


// //====================={14-masala}======================
// let num1 = 4445,

//     num2 = 8745;

// if (num1>num2) {

//     console.log('1-son katta');

// } else {

//     console.log('2-son katta');

// }




// //===================={15-masala}========================
// let num1 = 63,
//     num2 = 9884,
//     num3 = 834;

// if (num1>num2 && num1>num3){

//     console.log('1-son katta');
    
// } else if(num2>num1 && num2>num3){

//     console.log('2-son katta');

// } else{
//     console.log('3-son katta');
// }




// // ======================{16-masala}=====================
// let num1 = 234,
//     num2 = 2414,
//     num3 = 655;

// if (num1<num2 && num1<num3){

//     console.log('1-son kichik');
    
// } else if(num2<num1 && num2<num3){

//     console.log('2-son kichik');

// } else{
//     console.log('3-son kichik');
// }
