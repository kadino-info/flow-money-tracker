  function Monefy(root) {
    const formTbl = root.querySelector('.FormTBL');
    const tables = formTbl.querySelectorAll('table');
    let infos = [];
    const info = tables[0]
    const detail = tables[1];
    let headers = detail.querySelectorAll('th');
    let rows = detail.querySelectorAll('tr');
    headers = headers.map((el) => {
      let result = el.innerText;
      result = result.replace(',&nbsp;', ', ')
      result = result.replace('кк', 'к к')
      result = result.replace('валютекарт', 'валюте карт')
      return result.trim();
    })
    let account = '';
    let infoRows = info.querySelectorAll('tr');
    infoRows.map((row) => {
      const cells = row.querySelectorAll('td');
      infos.push(cells.map((cell) => {
        const text = cell.innerText.trim();
        if (text.match(/ВЫПИСКА ПО СЧЕТУ КЛИЕНТА/)) account = text.replace('ВЫПИСКА ПО СЧЕТУ КЛИЕНТА ', '')
        return text;
      }));
    });

    rows = rows.map((row) => {
      const result = {};
      const cells = row.querySelectorAll('td');
      cells.map((cell, i) => {
        result[headers[i]] = cell.innerText.trim();
      })
      result['Счёт'] = account;
      return result;
    })
    return rows;
  }

module.exports = { Monefy }

