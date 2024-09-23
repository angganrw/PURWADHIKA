// #1 Tulis kode untuk menukar huruf besar/kecil setiap karakter dari string
// Contoh: ‘The Quick BrOwN Fox’ -> ‘the QUIcK bRoWn fox’
let strings = "The QuIcK BrOwN FoX";
let splits = strings.split("");
for (let i = 0; i < splits.length; i++) {
  splits[i] =
    splits[i] === splits[i].toUpperCase()
      ? splits[i].toLowerCase()
      : splits[i].toUpperCase();
}
strings = splits.join("");
console.log(strings);

// #2 Tulis kode untuk mencari bilangan terbesar dari dua bilangan bulat yang diberikan
// Contoh: num1 = 42, num2 = 27 → 42
let int1 = 42;
let int2 = 10;

if (int1 === int2) {
  console.log("Numbers are the same");
} else if (int1 > int2) {
  console.log(`${int1} is larger than ${int2}`);
} else {
  console.log(`${int2} is larger than ${int1}`);
}

// #3 Tulis pernyataan kondisional untuk mengurutkan tiga angka
// Contoh: num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
let num1 = 42;
let num2 = 27;
let num3 = 18;

if (num1 <= num2 && num1 <= num3) {
  if (num2 <= num3) {
    console.log(`${num3}, ${num2}, ${num1}`);
  } else {
    console.log(`${num2}, ${num3}, ${num1}`);
  }
} else if (num2 <= num1 && num2 <= num3) {
  if (num1 <= num3) {
    console.log(`${num3}, ${num1}, ${num2}`);
  } else {
    console.log(`${num1}, ${num3}, ${num2}`);
  }
} else if (num3 <= num1 && num3 <= num2) {
  if (num1 <= num2) {
    console.log(`${num2}, ${num1}, ${num3}`);
  } else {
    console.log(`${num1}, ${num2}, ${num3}`);
  }
}

// #4 Tulis kode yang menunjukkan 1 jika input berupa string, 2 jika input berupa angka, dan 3 untuk tipe data lainnya.
// Contoh: “hello” → 1
let input = 0;
if (typeof input === "string") {
  console.log(1);
} else if (typeof input === "number") {
  console.log(2);
} else {
  console.log(3);
}

// #5 Tulis kode untuk mengubah setiap huruf a menjadi * dari string input
// Contoh: ‘Sebuah apel sehari menjauhkan dokter’ -> `*n *apel * hari menjauhkan dokter *w*y`
let sentence = "An apple a day keeps the doctors away";
let splitSentence = sentence.split("");
for (let i = 0; i < splitSentence.length; i++) {
  if (splitSentence[i].toLowerCase() === "a") {
    splitSentence[i] = "*";
  }
}
sentence = splitSentence.join("");
console.log(sentence);
