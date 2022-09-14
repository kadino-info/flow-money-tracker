const { parse } = require('node-html-parser');
const fs = require('fs');

const { MtBank } = require('./mtbank');
const { BGPBank } = require('./bgpb');
const { PriorBank } = require('./prior');
const { Monefy } = require('./monefy');

let result;
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
        result = MtBank(root);
        break;
      case 'bgpb':
        result = BGPBank(root);
        break;
      case 'prior':
        result = PriorBank(root);
      case 'monefy':
        result = Monefy(root);
        break;
      default:
        break;
    }
  } catch (err) { console.error(err); }

console.log(result)
