// Buat program untuk membuat transaksi
// Kelas Produk
// Properti
// Nama
// Harga
// Kelas Transaksi
// Properti
// Total
// Produk
// Semua data produk
// Jumlah
// Metode Tambahkan ke keranjang → Tambahkan produk ke transaksi
// Metode Tampilkan total → Tampilkan total transaksi saat ini
// Metode Pembayaran → Selesaikan transaksi, kembalikan data transaksi

interface IProduct {
  name: string;
  price: number;
}

interface ITransaction {
  products: { product: IProduct; qty: number }[];
}

class Product implements IProduct {
  name: string;
  price: number;

  constructor(paramName: string, paramPrice: number) {
    this.name = paramName;
    this.price = paramPrice;
  }
}

class Transaction implements ITransaction {
  #total;
  products: {
    product: IProduct;
    qty: number;
  }[];

  constructor() {
    (this.#total = 0), (this.products = []);
  }

  addToCart(product: IProduct, qty: number) {
    this.#total += product.price * qty;
    this.products.push({
      product,
      qty,
    });
  }

  showTotal() {
    return this.#total;
  }

  checkOut() {
    const currProduct: {
      product: IProduct;
      qty: number;
    }[] = [...this.products];
    this.#total = 0;
    this.products = [];
    return currProduct;
  }
}

const newTransaction = new Transaction();
newTransaction.addToCart(new Product("Kulkas", 50000), 5);
console.log(newTransaction.showTotal()); // 250000
newTransaction.addToCart(new Product("Lemari", 100000), 2);
console.log(newTransaction.showTotal()); // 450000
console.log(newTransaction.checkOut()); // Returns products added to cart
