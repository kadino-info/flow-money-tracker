const { parse } = require('node-html-parser');
const fs = require('fs');

const { MtBank } = require('./mtbank');
const { BGPBank } = require('./bgpb');
const { PriorBank } = require('./prior');
const { Monefy } = require('./monefy');

let datas;
const folder = './details/';
// const fileName = 'mtbank_2022_statement (1)';
const fileName = 'bgpb_2022_report2';
let bankName = '';

try {
  const data = fs.readFileSync(`${folder}${fileName}.html`, 'utf8');
  const root = parse(data);
  bankName = fileName.split('_')[0];

    switch (bankName) {
      case 'mtbank':
        datas = MtBank(root);
        break;
      case 'bgpb':
        datas = BGPBank(root);
        break;
      case 'prior':
        datas = PriorBank(root);
      case 'monefy':
        datas = Monefy(root);
        break;
      default:
        break;
    }
  } catch (err) { console.error(err); }

console.log(datas);
