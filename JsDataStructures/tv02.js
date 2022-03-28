let names = ['Eli', 'Ehmed', 'Sara', 'Sevda', 'Qurban'];
let surnames = ['Piriyev', 'Memmedov', 'Qurbanova', 'Ezizova', 'Sadiqzade'];
let ages = [23, 34, 40, 58, 60];
let students = {
    adlar: names,
    soyadlar: surnames,
    yaslar: ages
}

console.log(`Name: ${students.adlar[0]}, Surname: ${students.soyadlar[0]}, Age: ${students.yaslar[0]}`);
console.log(`Name: ${students.adlar[1]}, Surname: ${students.soyadlar[1]}, Age: ${students.yaslar[1]}`);
