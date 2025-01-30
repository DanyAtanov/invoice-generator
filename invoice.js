let Invoice = (() => {
  "use strict";

  function template(invoice) {
    return `<div style="font-size: 10pt; font-family: Arial">
  <table width="100%">
    <tr>
      <td style="width: 68%; padding: 0 0 10px">
        <div style="text-align: justify; font-size: 6pt">
          Внимание! Оплата данного счета означает согласие с условиями поставки
          товара. Счет действителен в течение 5(пяти) банковских дней, не считая
          дня выписки счета. Уведомление об оплате обязательно, в противном
          случае НЕ ГАРАНТИРУЕТСЯ наличие товара на складе. Товар отпускается по
          факту прихода денег на р/с Поставщика, самовывозом, при наличии
          доверенности и паспорта.
        </div>
      </td>
      <td style="width: 32%; text-align: center; padding: 0 0 10px">
        <img src="<!--Лого url-->" style="width: 70%" />
      </td>
    </tr>
  </table>

  <table
    width="100%"
    border="1"
    style="border-collapse: collapse; width: 100%; font-size: 10pt"
    cellpadding="2"
    cellspacing="2"
  >
    <tr>
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
              <div style="font-size: 10pt">
                Ф-Л "СЕВЕРНАЯ СТОЛИЦА" АО "РАЙФФАЙЗЕНБАНК" г. Санкт-Петербург
              </div>
            </td>
          </tr>
          <tr>
            <td valign="bottom" style="height: 3mm">
              <div style="font-size: 9pt">Банк получателя</div>
            </td>
          </tr>
        </table>
      </td>
      <td style="min-height: 7mm; height: auto; width: 25mm">
        <div style="font-size: 9pt">БИK</div>
      </td>
      <td rowspan="2" style="vertical-align: top; width: 60mm">
        <div style="height: 7mm; line-height: 7mm; vertical-align: middle">
          044030723
        </div>
        <div>30101810100000000723</div>
      </td>
    </tr>
    <tr>
      <td style="width: 25mm">
        <div>Сч. №</div>
      </td>
    </tr>
    <tr>
      <td style="min-height: 6mm; height: auto; width: 50mm">
        <div>ИНН 7816189554</div>
      </td>
      <td style="min-height: 6mm; height: auto; width: 55mm">
        <div>КПП 781101001</div>
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
        <div>40702810603000079889</div>
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
              <div style="font-size: 10pt">
                Общество с ограниченной ответственностью Торговый Дом "АВТОграф"
              </div>
            </td>
          </tr>
          <tr>
            <td valign="bottom" style="height: 3mm">
              <div style="font-size: 9pt">Получатель</div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <div style="font-weight: bold; font-size: 14pt; padding-left: 5px; padding-top: 10px;">
    Счет № ${invoice.number} от ${invoice.date}
  </div>
  <br />

  <div
    style="background-color: #000000; width: 100%; font-size: 1px; height: 2px"
  >
    &nbsp;
  </div>

  <table width="100%" style="font-size: 9pt">
    <tr>
      <td style="width: 30mm; vertical-align: top">
        <div style="padding-left: 2px">Поставщик:</div>
      </td>
      <td>
        <div style="font-weight: bold; padding-left: 2px">
          Общество с ограниченной ответственностью Торговый Дом "АВТОграф", ИНН
          7816189554, КПП 781101001, 192019, Санкт-Петербург г, Седова ул, дом
          11, литера Б, помещение 19-Н, тел.: (812) 334-39-96
        </div>
      </td>
    </tr>
    <tr></tr>
    <tr></tr>
    <tr></tr>
    <tr></tr>
    <tr>
      <td style="width: 30mm; vertical-align: top">
        <div style="padding-left: 2px">Покупатель:</div>
      </td>
      <td>
        <div style="font-weight: bold; padding-left: 2px">
          ИП Илон Масков , ИНН 660000000000, 90210, Лос-Анджелес, Беверли-Хилз,
          спросить Илона
        </div>
      </td>
    </tr>
  </table>

  <table
    border="2"
    width="100%"
    cellpadding="2"
    cellspacing="2"
    style="border-collapse: collapse; width: 100%; font-size: 10pt"
  >
    <thead>
      <tr>
        <th style="width: 13mm">№</th>
        <th style="width: 27mm">Артикул</th>
        <th>Товары (работы, услуги)</th>
        <th style="width: 20mm">Кол-во</th>
        <th style="width: 17mm">Ед.</th>
        <th style="width: 35mm">Цена</th>
        <th style="width: 35mm">Сумма</th>
      </tr>
    </thead>
    <tbody>
    ${templateCart(invoice)}
    </tbody>
  </table>

  <table
    border="0"
    width="100%"
    cellpadding="1"
    cellspacing="1"
    style="font-size: 10pt; padding-top: 5px"
  >
    <tr>
      <td></td>
      <td style="width: 27mm; font-weight: bold; text-align: right">Итого:</td>
      <td style="width: 35mm; font-weight: bold; text-align: center">${totalSum(
        invoice
      )}</td>
    </tr>
    <tr>
      <td></td>
      <td style="width: 27mm; font-weight: bold; text-align: right">
        В т.ч. НДС (20%):
      </td>
      <td style="width: 35mm; font-weight: bold; text-align: center">${totalVat(
        invoice
      )}</td>
    </tr>
    <tr>
      <td></td>
      <td style="width: 37mm; font-weight: bold; text-align: right">
        Итого с НДС:
      </td>
      <td style="width: 35mm; font-weight: bold; text-align: center">${totalSum(
        invoice
      )}</td>
    </tr>
  </table>

  <br />
  <div style="font-size: 10pt">
    Всего наименований ${totalNames(invoice)} на сумму ${totalSum(invoice)} руб.<br />
    <b>Ноль рублей 00 копеек</b>
  </div>
  <br /><br />
  <div
    style="background-color: #000000; width: 100%; font-size: 1px; height: 2px"
  >
    &nbsp;
  </div>
  <br />
  <br />
  <table
    width="100%"
    style="border-collapse: collapse; width: 100%; font-size: 10pt"
    cellpadding="2"
    cellspacing="2"
  >
    <tr>
      <td style="width: 20mm"><b>Руководител</b>ь</td>
      <td style="width: 30mm; border-bottom: 1px solid #000"></td>
      <td>Громов И.С.</td>
    </tr>
    <tr></tr>
    <tr></tr>
    <tr>
      <td style="width: 20mm"><b>Бухгалтер</b></td>
      <td style="width: 30mm; border-bottom: 1px solid #000"></td>
      <td>Майорова С. Р.</td>
    </tr>
  </table>
</div>
`;
  }

  function templateProduct(product, index) {
    return `<tr>
        <td style="width: 13mm">${index + 1}</td>
        <td style="width: 17mm">${product.number}</td>
        <td>${product.name}</td>
        <td style="width: 20mm; text-align: center">${parseInt(
          product.quantity
        )}</td>
        <td style="width: 17mm; text-align: center">Шт.</td>
        <td style="width: 35mm; text-align: center">${parseFloat(
          product.price
        ).toFixed(2)}</td>
        <td style="width: 35mm; text-align: center">${(
          parseInt(product.quantity) * parseFloat(product.price)
        ).toFixed(2)}</td>
      </tr>`;
  }

  function templateCart(invoice) {
    let template = "";
    invoice.productList.forEach((product, i) => {
      template += templateProduct(product, i);
    });

    return template;
  }

  function totalSum(invoice) {
    let total = 0;
    invoice.productList.forEach((product) => {
      total += parseFloat(product.price) * parseInt(product.quantity);
    });

    return total.toFixed(2);
  }

  function totalVat(invoice) {
    let vat = totalSum(invoice) * 0.2;

    return vat.toFixed(2);
  }

  function totalNames(invoice) {
    return invoice.productList.length;
  }
  class Invoice {
    constructor(config = {}) {
      this.date = new Date().toLocaleDateString("ru-RU");
      this.number = 1;
      this.productList = [
        {
          number: "12124",
          name: "Playstation 5 Pro",
          quantity: "1 шт.",
          price: "97500 руб.",
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
