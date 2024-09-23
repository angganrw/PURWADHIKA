// 1# Tulis kode untuk mencari luas persegi panjang
// Contoh: panjang = 5, lebar = 3
// Hasil: 15
const p: number = 5; // Panjang
const l: number = 3; // Lebar
const ls: number = p * l; // Luas = Panjang x Lebar

console.log(`Hasil Luas Persegi Panjang Adalah ${ls}`);

// #2 Tulis kode untuk mencari keliling persegi panjang.
// Contoh: panjang = 5, lebar = 3
// Hasil: 16
const kl: number = 2 * (p + l); // Keliling = Panajng x Lebar

console.log(`Hasil Keliling Persegi Panjang Adalah ${kl}`);

// #3 Tulis kode untuk mencari diameter, keliling, dan luas lingkaran.
// Contoh: jari-jari = 5
// Output: diameter = 10, keliling = 31,4159, luas = 78,539
const jj: number = 5; // Jari Jari
const diameter: number = 2 * jj; // Diameter lingkaran 2 x jj(10)
const kel: number = 2 * Math.PI * jj; // Keliling atau bisa di pakai 3.14
const Luas: number = Math.PI * jj * jj; // Luas

console.log(
  `Hasil Dari Diameter = ${diameter} , Keliling = ${kel.toFixed(
    4
  )}, Dan Luas = ${Luas.toFixed(4)}`
);

// #4 Tulis kode untuk mencari sudut segitiga jika diketahui dua sudut.
// Contoh: a = 80, b = 65
// Output: 35
const a: number = 80; // Sudut a
const b: number = 65; // Sudut b
const c: number = 180; // Jumlah ketiga sudut suatu segitiga sama dengan 180 derajat.
const sdt = c - (a + b); // 180 - (80+65) = 35

console.log(`Hasil Sudut segitiga dari a dan b Adalah ${sdt}`);

// #5 Tulis kode untuk mengonversi hari ke tahun, bulan, dan hari (Catatan: 1 tahun: 365 hari, 1 bulan: 30 hari).
// Contoh: 400 hari → 1 tahun, 1 bulan, 5 hari
// Contoh: 366 hari → 1 tahun, 0 bulan, 1 hari
const days: number = 400; // Jumlah hari 400
const year: number = Math.floor(days / 365); // hari 400 di bagi 365
const months: number = Math.floor((days % 365) / 30); // hari di modulo % 365 baru di bagi 30

const hasildays: number = (days % 365) % 30;
console.log(
  `${days} hari → ${year} tahun, ${months} builan, ${hasildays} hari`
);

const hr: number = 366; // 366 Hari

const th: number = 365; // Jumlah hari dalam 1 tahun 365
const bl: number = 30; // Jumlah hari dalam 1 bulan 30
const jth: number = Math.floor(hr / th); // Jumlah Tahun (366 / 365)
const shr: number = hr % th; // Sisa hari 3655 & 365
const jbl: number = Math.floor(shr / bl); // Jumlah Bulan (/30)
const jhr: number = shr % th; // Jumlah Hari = 366

console.log(`${hr} hari → ${jth} tahun, ${jbl} builan, ${jhr} hari`);

// #6 Tulis kode untuk mendapatkan perbedaan antara tanggal dalam hari.
// Contoh: date1 = 2022-01-20, date2 = 2022-01-22
// Output: 2
const dt1: Date = new Date("2022-01-20");
const dt2: Date = new Date("2022-01-22");
console.log(`Perbedaannya adalah ${(dt1 - dt2) / (24 * 3600 * 1000)} hari`);
