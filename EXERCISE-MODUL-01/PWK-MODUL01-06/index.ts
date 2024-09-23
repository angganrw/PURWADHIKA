// 1# Buat fungsi untuk menghitung array data siswa
// Objek memiliki properti berikut:
// Nama → String
// Email → String
// Usia → Tanggal
// Nilai → Angka
interface Istudent {
  nama: string;
  email: string;
  usia: Date;
  nilai: number;
}

const students: Istudent[] = [
  {
    nama: "Budi",
    email: "budigg@gmail.com",
    usia: new Date("1998-01-01"),
    nilai: 60,
  },
  {
    nama: "Bubi",
    email: "bubigg@gmail.com",
    usia: new Date("1999-02-02"),
    nilai: 70,
  },
  {
    nama: "Buba",
    email: "bubagg@gmail.com",
    usia: new Date("2000-03-03"),
    nilai: 80,
  },
];

function calculateAge(date: Date) {
  const today = new Date();
  const diff = today.getTime() - date.getTime();
  console.log(diff);
  const age = new Date(diff);
  console.log(age);
  return Math.abs(age.getUTCFullYear() - 1970);
}

function calculateArray(arr: Istudent[]) {
  const result: {
    nilai: {
      highest: number;
      lowest: number;
      avarage: number;
    };
    usia: {
      highest: number;
      lowest: number;
      avarage: number;
    };
  } = {
    nilai: {
      highest: 0,
      lowest: 0,
      avarage: 0,
    },
    usia: {
      highest: 0,
      lowest: 0,
      avarage: 0,
    },
  };

  const nilai: number[] = [];
  const usia: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    nilai.push(arr[i].nilai);

    usia.push(calculateAge(arr[i].usia));
  }

  result.nilai.highest = Math.max(...nilai);
  result.nilai.lowest = Math.min(...nilai);
  result.nilai.avarage =
    nilai.reduce((a: number, b: number) => a + b) / arr.length;

  result.usia.highest = Math.max(...usia);
  result.usia.lowest = Math.min(...usia);
  result.usia.avarage =
    usia.reduce((a: number, b: number) => a + b) / arr.length;

  return result;
}

console.log(calculateArray(students));
