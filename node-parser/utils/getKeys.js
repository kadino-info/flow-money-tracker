const keys = {
  'Дата операции': 'date',
  'Дата отражения': 'showDate',
  'Операция': 'operation',
  'Тип операции': 'type',
  'Сумма в валюте операции': 'operationAmount',
  'Валюта операции': 'operationCurrency',
  'Сумма в валюте счета': 'amount',
  'Валюта счета': 'currency',
  'Место операции (страна, наименование точки, город)': 'point',
  'Код авторизации': 'authCode',
  'МСС': 'mcc',
  'Вознаграждение клиенту по операции в валюте счета': 'clientCashback',
  'Статус операции': 'type',
  'Дата отражения по счету': 'showDate',
  'Дата совершения транзакции': 'date',
  'Описание операции': 'operation',
  'Место проведения транзакции': 'point',
  'Вал тр.': 'operationCurrency',
  'Сумма в валюте транзакции': 'operationAmount',
  'Сумма в валюте карт-счета, BYN': 'amount',
  'Остаток карт-счета, BYN': 'sum',
  'Карточка': 'card',
}

function getKeys(header) { return keys[header]; };

module.exports = {
  getKeys,
}
