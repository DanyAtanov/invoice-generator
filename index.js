import Invoice from "./invoice.js";

//let invoice = new Invoice();
let invoice = new Invoice({
	date: '12 апреля',
  productList: [
    {
      number: "JPLS-30 AURA-3",
      name: "JPLS-30 AURA-3 Лампа светодиодная,световой поток до 4200лм в режиме 5 цв.температур.",
      quantity: "2шт",
      price: "1222.50 руб",
    },
  ],
});

console.log(invoice);

invoice.generate();
//invoice.test();
