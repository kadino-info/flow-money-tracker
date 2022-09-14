const { getKeys } = require('./utils/getKeys');
const { create, listAll } = require('./storages/mongo');


function BGPBank(root) {
    const info = root.querySelector('.section_1')
    const summary = root.querySelector('.section_2')
    const detail = root.querySelector('.section_3')
    let rows = detail.querySelectorAll('tr');
    let headers = detail.querySelectorAll('th');
    headers = headers.map((el) => getKeys(el.innerText.trim()));
    let account = '';

    let infoRows = info.querySelectorAll('tr');
    infoRows.map((row) => {
      const cells = row.querySelectorAll('td');
      cells.map((el, i) => {
        if (el.innerText.match(/Номер карточного счета:/)) account = cells[i + 1].innerText;
      })
    });

    const newRows = [];
    rows.map((row) => {
      const cells = row.querySelectorAll('td');
      if (cells.length === 12) {
        const result = {};
        cells.map((cell, i) => {
          if (i === 4 || i === 6) {
            const num = parseFloat(cell.innerText.trim(), 10);
            result[headers[i]] = cells[3].innerText === 'СПИСАНИЕ' ? -num : num;
          } else result[headers[i]] = cell.innerText.trim();
        })
        result['account'] = account;
        newRows.push(result);

      }
    })
    return newRows;
  }

module.exports = { BGPBank }
