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

let x=5;
console.log(typeof(x));

let a = 12345;
let b= a.toString();
let c;
for (var i = b.length - 1; i >= 0; i--) {
    c=a%10;
    a=a-c;
    a=a/10;
    console.log(c);
}

// task 3

// let eded=prompt("Ədəd daxil et: ");
// for(let i=0; i<eded.length; i++){
//     console.log(eded.charAt(i))
// }


// task 4

//  let azalanSira=[0, -1, -10,]
// azalanSira.sort(function(a,b){return(b-a)})
// document.write(azalanSira)