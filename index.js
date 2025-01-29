import Invoice from "./invoice.js";

 let invoice = new Invoice();
/* let invoice = new Invoice({
  number: "69",
  date: "11 декабря",
}); */

console.log(invoice);

invoice.generate();
