// task 1

// a b və c ədədləri verilir. a və b ədədlərindən hansının c ədədinə daha yaxın olduğunu tapmağınız tələb olunur.

// let a=prompt(" a ədədini daxil et: ");
// let b=prompt(" b ədədini daxil et: ");
// let c=prompt(" c ədədini daxil et: ");
// let c_a=(Number(c)-Number(a));
// let c_b=(Number(c)-Number(b));

// if (c_a > c_b){
//     alert(" Daxil edilən b ədədi c ədədinə daha yaxındır. ")
// }else{
//     alert(" Daxil edilən a ədədi c ədədinə daha yaxındır. ")
// }


// task 2

// x adında dəyişən təyin edin. bu dəyişənə istənilən tipdə data təyin edilə bilər.Sizdən tələb olununan daxil edilən dəyərin növünü tapmaq və ona uyğun ekrana mesaj yazdırmaqdır. (Nümunə: Daxil etdiyini dəyər rəqəmdir)

// let x=5;
// console.log(typeof(x));

// let a = 12345;
// let b= a.toString();
// let c;
// for (var i = b.length - 1; i >= 0; i--) {
//     c=a%10;
//     a=a-c;
//     a=a/10;
//     console.log(c);
// }

// task 3


// task 4

// verilən 4 ədədi böyükdən kiçiyə doğru ekrana çap edən program yazın

// let a = 8;
// let b =2;
// let c =6;
// let d =3;
// let arr =[a , c, b, a];
// arr.sort((e, f) => e - f);
// console.log(arr);

// task 6

// 3 nöqtənin koordinatları verilir.Bu verilən koordinatlara görə a nöqtəsinə ən yaxın nöqtəni tapan proqram yazın
// a_x=120,a_y=200
// b_x=230,b_y=400
// c_x=210,c_y=345

// let ax =120;
// let ay=200;
// let bx =230;
// let by=400;
// let cx=210;
// let cy=345;

// let ab =Math.sqrt(Math.pow((ax-bx),2)+ Math.pow((ay-by),2));
// let ac=Math.sqrt(Math.pow((ax-cx),2)+ Math.pow((ay-cy),2));
// console.log(ab);
// console.log(ac);

// if (ab>ac) {
//    console.log(`c a daha yaxındır`);
// }else if(ab<ac){
//    console.log(`b a daha yaxındır`);
// }else if(ab==ac){
//    console.log(`b və c a eyni yaxınlıqdadır`);
// }else{
//    console.log(`yaxınlığın olubç olmaması ölçülə bilmədi`)
// }

// task 5

// verilən kəsirli ədədin (nümumə: 4.234) tam hissəsi ilə kəsirli hissəsini ayrı ayrı ekrana çap edən program yazın

// let a = 4.234;
// let netice;
// let netice_2;
// netice = Math.floor(a);
// netice_2=a-netice;

// console.log(netice);
// console.log(netice_2);
