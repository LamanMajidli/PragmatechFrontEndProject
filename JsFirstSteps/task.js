 // task1

// a b və c ədədləri verilir. a və b ədədlərindən hansının c ədədinə daha yaxın olduğunu tapmağınız tələb olunur.

// let a = 10;
// let b = 8;
// let c = 5;

//  if (a-b < b-c) {
//     console.log(true);
//  }
//  else {
//      console.log(false);
//  }

//  task2

//x adında dəyişən təyin edin. bu dəyişənə istənilən tipdə data təyin edilə bilər.Sizdən tələb olununan daxil edilən dəyərin növünü tapmaq və ona uyğun ekrana mesaj yazdırmaqdır. (Nümunə: Daxil etdiyini dəyər rəqəmdir)

// let x = '5';
// let ad = "Sifarisci"
// console.log(typeof x);
// if(x = String) {
//     console.log(`hormetli ${ad} sizin taskin cavabi Stringdir`)
// }
// else {
//     console.log("cavab yanlisdir");
// }


// task 3


// task 4

// verilən 4 ədədi böyükdən kiçiyə doğru ekrana çap edən program yazın

// let a = 7;
// let b = 10;
// let c = 5;
// let d = 2;
// let f = 4;
// let g = 6;
// let h = 3;
// let arr = [a,b,c,d,f,g,h];
// arr.sort((a,b) => a + b);  
// console.log(arr)
// arr.sort((a,b) => a -  b);
// console.log(arr);




// task5

// verilən kəsirli ədədin (nümumə: 4.234) tam hissəsi ilə kəsirli hissəsini ayrı ayrı ekrana çap edən program yazın

// let a = 4.234;
//  console.log(a);
//  console.log(a.toFixed());

// task 6
// 3 nöqtənin koordinatları verilir.Bu verilən koordinatlara görə a nöqtəsinə ən yaxın nöqtəni tapan proqram yazın
// a_x=120,a_y=200
// b_x=230,b_y=400
// c_x=210,c_y=345



// task19mart

// let a = 78;

// if (a = 4) {
//     console.log(a);
// } else {
//     let a = 12;
//     console.log(a);
// }

// console.log(a);

let a = 78;

function Foo() {
     a = 34;
    console.log(a)
}
console.log(a);
Foo()