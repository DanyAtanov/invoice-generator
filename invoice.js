let Invoice = (() => {
  "use strict";

  function template(invoice) {
    return `<table width="100%" style="font-family: Arial">
  <tr>
    <td style="width: 68%; padding: 20px 0">
      <div style="text-align: justify; font-size: 11pt">
        Внимание! Оплата данного счета означает согласие с условиями поставки
        товара. Счет действителен в течение 5(пяти) банковских дней, не считая
        дня выписки счета. Уведомление об оплате обязательно, в противном случае
        НЕ ГАРАНТИРУЕТСЯ наличие товара на складе. Товар отпускается по факту
        прихода денег на р/с Поставщика, самовывозом, при наличии доверенности и
        паспорта.
      </div>
    </td>
    <td style="width: 32%; text-align: center; padding: 30px 0">
      <img src="<!--Лого url-->" style="width: 70%" />
    </td>
  </tr>
</table>

<table
  width="100%"
  border="2"
  style="border-collapse: collapse; width: 100%; font-family: Arial"
  cellpadding="2"
  cellspacing="2"
>
  <tr style="">
    <td colspan="2" rowspan="2" style="min-height: 13mm; width: 105mm">
      <table
        width="100%"
        border="0"
        cellpadding="0"
        cellspacing="0"
        style="height: 13mm"
      >
        <tr>
          <td valign="top">
            <div>СТ-ПЕТЕРБУРГСКИЙ филиал ПАО "ПРОМСВЯЗЬБАНК"<br />Г.</div>
          </td>
        </tr>
        <tr>
          <td valign="bottom" style="height: 3mm">
            <div style="font-size: 10pt">Банк получателя</div>
          </td>
        </tr>
      </table>
    </td>
    <td style="min-height: 7mm; height: auto; width: 25mm">
      <div>БИK</div>
    </td>
    <td rowspan="2" style="vertical-align: top; width: 60mm">
      <div style="height: 7mm; line-height: 7mm; vertical-align: middle">
        044030555
      </div>
      <div>30101810000000000555</div>
    </td>
  </tr>
  <tr>
    <td style="width: 25mm">
      <div>Сч. №</div>
    </td>
  </tr>
  <tr>
    <td style="min-height: 6mm; height: auto; width: 50mm">
      <div>ИНН</div>
    </td>
    <td style="min-height: 6mm; height: auto; width: 55mm">
      <div>КПП</div>
    </td>
    <td
      rowspan="2"
      style="min-height: 19mm; height: auto; vertical-align: top; width: 25mm"
    >
      <div>Сч. №</div>
    </td>
    <td
      rowspan="2"
      style="min-height: 19mm; height: auto; vertical-align: top; width: 60mm"
    >
      <div>40702810306000008712</div>
    </td>
  </tr>
  <tr>
    <td colspan="2" style="min-height: 13mm; height: auto">
      <table
        border="0"
        cellpadding="0"
        cellspacing="0"
        style="height: 13mm; width: 105mm"
      >
        <tr>
          <td valign="top">
            <div>ООО ""</div>
          </td>
        </tr>
        <tr>
          <td valign="bottom" style="height: 3mm">
            <div style="font-size: 10pt">Получатель</div>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
<br />

<div
  style="
    font-weight: bold;
    font-size: 25pt;
    padding-left: 5px;
    font-family: Arial;
  "
>
  Счет № ${invoice.number} от ${invoice.date}
</div>
<br />

<div
  style="background-color: #000000; width: 100%; font-size: 1px; height: 2px"
>
  &nbsp;
</div>

<table width="100%" style="font-family: Arial">
  <tr>
    <td style="width: 30mm; vertical-align: top">
      <div style="padding-left: 2px">Поставщик:</div>
    </td>
    <td>
      <div style="font-weight: bold; padding-left: 2px">
        ООО "" ИНН , КПП ,<br />
        <span style="font-weight: normal"
          >, Российская Федерация, г. , Невский пр-кт, д. лит. ,<br />
          пом. , тел.: +7() , факс: +7()
        </span>
      </div>
    </td>
  </tr>
  <tr>
    <td style="width: 30mm; vertical-align: top">
      <div style="padding-left: 2px">Покупатель:</div>
    </td>
    <td>
      <div style="font-weight: bold; padding-left: 2px">
        ИП , ИНН 7564644646, КПП 45465446456,<br /><span
          style="font-weight: normal"
          >213245, Российская Федерация, г. , пр-кт, д.151 лит. А,<br />
          пом. , тел.: +7() , факс: +7()
        </span>
      </div>
    </td>
  </tr>
</table>

<table
  border="2"
  width="100%"
  cellpadding="2"
  cellspacing="2"
  style="border-collapse: collapse; width: 100%; font-family: Arial"
>
  <thead>
    <tr>
      <th style="width: 13mm">№</th>
      <th style="width: 17mm">Артикул</th>
      <th>Товары (работы, услуги)</th>
      <th style="width: 20mm">Кол-во</th>
      <th style="width: 17mm">Ед.</th>
      <th style="width: 27mm">Цена</th>
      <th style="width: 27mm">Сумма</th>
    </tr>
  </thead>
  <tbody>
   ${templateCart(invoice)}
  </tbody>
</table>

<table
  style="font-family: Arial"
  border="0"
  width="100%"
  cellpadding="1"
  cellspacing="1"
>
  <tr>
    <td></td>
    <td style="width: 27mm; font-weight: bold; text-align: right">Итого:</td>
    <td style="width: 27mm; font-weight: bold; text-align: center">0.00</td>
  </tr>
  <tr>
    <td></td>
    <td style="width: 27mm; font-weight: bold; text-align: right">
      Итого НДС:
    </td>
    <td style="width: 27mm; font-weight: bold; text-align: center">0.00</td>
  </tr>
  <tr>
    <td></td>
    <td style="width: 37mm; font-weight: bold; text-align: right">
      Всего к оплате:
    </td>
    <td style="width: 27mm; font-weight: bold; text-align: center">0.00</td>
  </tr>
</table>

<br />
<div style="font-family: Arial">
  Всего наименований 0 на сумму 0.00 рублей.<br />
  Ноль рублей 00 копеек
</div>
<br /><br />
<div
  style="background-color: #000000; width: 100%; font-size: 1px; height: 2px"
>
  &nbsp;
</div>
<br />
<div style="font-family: Arial; font-size: 10pt">
  1. Счет действителен в течении 5 (пяти) банковских дней, не считая дня выписки
  счета. В случае нарушения срока оплаты сохранение цены на товар и наличие
  товара на складе НЕ ГАРАНТИРУЕТСЯ.<br />
  2. Оплата данного счета означает согласие с условиями изложенными в п.1
</div>
<br /><br />
<div
  style="
    background: url('<!--url печати в png сюда-->');
    background-repeat: no-repeat;
    padding: 30px 10px;
    width: 400px;
    height: 250px;
  "
>
  <div>Руководитель ______________________</div>
  <br />
  <br /><br />

  <div>Главный бухгалтер ______________________</div>
  <br />

  <div style="width: 85mm; text-align: center">М.П.</div>
  <br />
</div>
`;
  }

  function templateProduct(product, index) {
    return `<tr>
        <td style="width: 13mm">${index + 1}</td>
        <td style="width: 17mm">${product.number}</td>
        <td>${product.name}</td>
        <td style="width: 20mm">${product.quantity}</td>
        <td style="width: 17mm">Шт.</td>
        <td style="width: 27mm; text-align: center">${product.price}</td>
        <td style="width: 27mm; text-align: center">Сумма</td>
      </tr>`;
  }

  function templateCart(invoice) {
    let template = "";
    invoice.productList.forEach((product, i) => {
      template += templateProduct(product, i);
    });

    return template;
  }
  class Invoice {
    constructor(config = {}) {
      this.date = new Date().toLocaleDateString("ru-RU");
      this.number = 1;
      this.productList = [
        {
          number: "12124",
          name: "Имя товара",
          quantity: "2",
          price: "2122.50",
        },
        {
          number: "34344",
          name: "Еще один товара",
          quantity: "5",
          price: "20122.50",
        },
      ];
      this.templateCart = templateCart(this);
      this.template = template(this);
      Object.assign(this, config);
    }

    test(invoice = this) {
      console.log(templateCart(invoice));
    }

    generate(invoice = this) {
      const element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:text/html;charset=utf-8," + encodeURIComponent(template(invoice))
      );
      element.setAttribute(
        "download",
        `Счет_${invoice.number}_от_${invoice.date}.html`
      );
      element.textContent = `Счет_${invoice.number}_от_${invoice.date}`;
      document.body.appendChild(element);
    }
  }

  return Invoice;
})();

export default Invoice;
