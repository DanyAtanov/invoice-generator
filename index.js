import Invoice from "./invoice.js";

//let invoice = new Invoice();
let invoice = new Invoice({
 /*  productList: [
    {
      number: "34344",
      name: "Еще один товара",
      quantity: "5",
      price: "20122.50",
    },
  ], */
});

console.log(invoice);

invoice.generate();
//invoice.test();
