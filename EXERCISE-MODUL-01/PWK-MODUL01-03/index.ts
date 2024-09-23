// #1 Tulis kode untuk menampilkan tabel perkalian bilangan bulat tertentu.
// Contoh: Angka → 9
// Output:
// 9 ​​x 1
// 9 x 2
// …
// 9 x 10
const _number1: number = 9;
for (let i = 1; i <= 10; i++) {
  console.log(`${_number1} x ${i}`);
}

// #2 Tulis kode untuk memeriksa apakah suatu string merupakan palindrom atau bukan.
// Contoh: ‘madam’ → palindrom
let _string1: string = " madam";
console.log(_string1.split(""));
console.log(_string1.split("").reverse());
let _reverString1: string = _string1.split("").reverse().join("");
console.log(_string1 == _reverString1 ? "palindrome" : "not palindrome");

// #3 Tulis kode untuk mengonversi sentimeter ke kilometer.
// Contoh: 100000 → “1 km”
const Cm: number = 50;
const cmToKm: number = Cm / 100000;
console.log(cmToKm);

// #4 Tulis kode untuk memformat angka sebagai mata uang (IDR)
// Contoh: 1000 → “Rp. 1.000,00”
const angka: number = 1000;
const cursToCurrency = angka.toLocaleString("id-ID", {
  style: "currency",
  currency: "IDR",
});
console.log(cursToCurrency);

// #5 Tulis kode untuk menghilangkan kemunculan pertama “string pencarian” yang diberikan dari sebuah string
// Contoh: string = “Hello world”, string pencarian = “ell” → “Ho world”
const hstring: string = "Hello horld";
const search: string = "ell";
console.log(hstring.replace(search, ""));

// #6 Tulis kode untuk membuat huruf pertama setiap kata dalam string menjadi kapital
// Contoh: “hello world” → “Hello World”
let _string: string = "hello word";
console.log(_string);
console.log(_string.toLocaleUpperCase());
