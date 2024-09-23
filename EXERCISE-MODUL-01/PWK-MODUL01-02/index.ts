// #1 Tulis kode untuk memeriksa apakah angka tersebut ganjil atau genap
// Contoh: 25 → angka ganjil, 2 → angka genap
const angka: number = 25;
// console.log(angka % 2)
if (angka % 2 == 0) {
  // angka (25) di modulo % dengan 0
  console.log(`${angka} adalah angka genap`);
} else {
  console.log(`${angka} adalah angka ganjil`);
}

// #2 Tulis kode untuk memeriksa apakah angka tersebut merupakan bilangan prima atau bukan
// Contoh: 7 → 7 merupakan bilangan prima
// Contoh: 6 → 6 bukan bilangan prima
const ongko: number = 6;
let isPrime: boolean = true;

for (let i: number = 3; i < ongko; i++) {
  if (ongko !== i && ongko % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime);

// #3 Tulis kode untuk mencari jumlah angka 1 sampai N
// Contoh: 5 → 1 + 2 + 3 + 4 + 5 = 15
// Contoh: 3 → 1 + 2 + 3 = 6
const nmr: number = 5;
let hasil: string = `${nmr} -> `;
let sum: number = 0;
for (let i = 1; i <= nmr; i++) {
  sum += i;
  hasil += i === nmr ? `${i} = ${sum}` : `${i} +`;
}
console.log(hasil);

// #4 Tulis kode untuk mencari faktorial suatu bilangan
// Contoh: 4! → 4 x 3 x 2 x 1 = 24
// Contoh: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720
const no: number = 6;
hasil = `${no}! -> ${no} x`;
sum = no;
for (let i = no - 1; i >= 1; i--) {
  sum *= i;
  hasil += i === 1 ? `${i} = ${sum}` : `${i} x`;
}
console.log(hasil);

// #5 Tulis kode untuk mencetak N angka Fibonacci pertama
// Contoh: 15 → 610
const fibno: number = 15;
let fib: number = 0;
let nib: number = 0;
let nib2: number = 1;
let hasilfib = `${fibno} ->`;

for (let i = 1; i <= fibno; i++) {
  fib = nib + nib2;
  // console.log(fib);
  nib = nib2;
  // console.log(nib);
  nib2 = fib;
  // console.log(nib2);
  hasilfib += i === fibno ? `${nib}` : `${nib},`;
}
console.log(hasilfib);
