import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
let PORT = 3000;

let products = [
  {
    id: 1,
    name: "Xiaomi iPhone 12",
    brand: "Xiaomi",
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: "Android",
    camera: 108,
  },
  {
    id: 2,
    name: "Oppo Mi 10",
    brand: "Xiaomi",
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: "iOS",
    camera: 64,
  },
  {
    id: 3,
    name: "Samsung Mi 10",
    brand: "Oppo",
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 4,
    name: "Apple Find X2",
    brand: "Samsung",
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 48,
  },
  {
    id: 5,
    name: "Oppo Mi 11",
    brand: "Xiaomi",
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: "iOS",
    camera: 24,
  },
  {
    id: 6,
    name: "OnePlus Find X3",
    brand: "Apple",
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 7,
    name: "Apple Pixel 5",
    brand: "Apple",
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 24,
  },
  {
    id: 8,
    name: "Google Mi 10",
    brand: "Oppo",
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: "iOS",
    camera: 108,
  },
  {
    id: 9,
    name: "Oppo Mi 11",
    brand: "Samsung",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 10,
    name: "Xiaomi Mi 10",
    brand: "Oppo",
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: "Android",
    camera: 12,
  },
  {
    id: 11,
    name: "OnePlus Pixel 5",
    brand: "Apple",
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 12,
  },
  {
    id: 12,
    name: "Xiaomi OnePlus 8",
    brand: "Xiaomi",
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: "Android",
    camera: 48,
  },
  {
    id: 13,
    name: "Xiaomi Pixel 6",
    brand: "Oppo",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 108,
  },
  {
    id: 14,
    name: "Samsung Find X2",
    brand: "Oppo",
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: "Android",
    camera: 48,
  },
  {
    id: 15,
    name: "Google OnePlus 8",
    brand: "Apple",
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: "iOS",
    camera: 24,
  },
  {
    id: 16,
    name: "OnePlus iPhone 12",
    brand: "OnePlus",
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: "iOS",
    camera: 64,
  },
  {
    id: 17,
    name: "Google Mi 11",
    brand: "Oppo",
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 18,
    name: "Google OnePlus 9",
    brand: "Apple",
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 64,
  },
  {
    id: 19,
    name: "Oppo Galaxy S22",
    brand: "Samsung",
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: "Android",
    camera: 12,
  },
  {
    id: 20,
    name: "Apple Pixel 5",
    brand: "Oppo",
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: "Android",
    camera: 108,
  },
];








// Exercise 1
const sortByPopularity = (value1, value2) => {
  return value2.rating - value1.rating
}

app.get('/products/sort/popularity',(req, res) => {
  let sortedProducts = products.slice()
  sortedProducts.sort(sortByPopularity)
  res.json({ products: sortedProducts })
})


// Exercise 2
const sortByPriceDesending = (value1, value2) => {
  return value2.price - value1.price
}

app.get('/products/sort/price-high-to-low',(req, res) => {
  let sortedProducts = products.slice()
  sortedProducts.sort(sortByPriceDesending)
  res.json({ products: sortedProducts })
})


// Exercise 3
const sortByPriceAscending = (value1, value2) => {
  return value1.price - value2.price
}

app.get('/products/sort/price-low-to-high',(req, res) => {
  let sortedProducts = products.slice()
  sortedProducts.sort(sortByPriceAscending)
  res.json({ products: sortedProducts })
})


// Exercise 4
const filterByRam = (value, ram) => {
  return value.ram === ram
}

app.get('/products/filter/ram',(req, res) => {
  let ram = parseFloat(req.query.ram);
  let filteredProducts = products.filter((value) => filterByRam(value, ram))
  res.json({ products: filteredProducts })
})


// Exercise 5
const filterByRom = (value, rom) => {
  return value.rom === rom
}

app.get('/products/filter/rom',(req, res) => {
  let rom = parseFloat(req.query.rom);
  let filteredProducts = products.filter((value) => filterByRom(value, rom))
  res.json({ products: filteredProducts })
})


// Exercise 6
const filterByBrand = (value, brand) => {
  return value.brand.toLowerCase() === brand.toLowerCase()
}

app.get('/products/filter/brand',(req, res) => {
  let brand = req.query.brand;
  let filteredProducts = products.filter((value) => filterByBrand(value, brand))
  res.json({ products: filteredProducts })
})


// Exercise 7
const filterByOs = (value, os) => {
  return value.os.toLowerCase() === os.toLowerCase()
}

app.get('/products/filter/os',(req, res) => {
  let os = req.query.os;
  let filteredProducts = products.filter((value) => filterByOs(value, os))
  res.json({ products: filteredProducts })
})


// Exercise 8
const filterByPrice = (value, price) => {
  return value.price <= price
}

app.get('/products/filter/price',(req, res) => {
  let price = parseFloat(req.query.price);
  let filteredProducts = products.filter((value) => filterByPrice(value, price))
  res.json({ products: filteredProducts })
})


// Exercise 9
app.get('/products',(req, res) => {
  res.json(products)
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
