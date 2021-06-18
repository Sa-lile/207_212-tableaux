const tableau1 = ['a','b','c','d','d'];
const tableau2 = ['z','x','y'];
const tableau3 = tableau1.concat(tableau2);


// tableau2[2] = 125;

console.log(tableau3);

console.log(tableau3.includes('d'));

const multitab = [1,2,3,[1,2,[3]]];
console.log(multitab.flat(2));

const fruits = ['Faise', 'Pomme', 'Raisins'];

console.log(fruits.join('----'));

console.log(fruits.reverse());



// let tableau = ['a','b','c','d'];
//         //0/1/2/3

// // tableau.splice(0,0,'z');

// console.log(tableau.slice(2,4));

// tableau.push(5);
// tableau.pop(); 
// // enleve la fin
// tableau.shift(); 
// // enleve au début

// tableau.unshift('a'); 
// // ajuter au début


// console.log(tableau.indexOf('d'));
// console.log(tableau[tableau.length-1]);
// console.log(tableau[3]);

