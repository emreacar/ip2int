const assert = require('assert')
const ip2int = require('../index')

const toInt = [
  [167772161, '10.0.0.1'],
  [167772162, '10.0.0.2'],
  [167772415, '10.0.0.255'],
  [167772416, '10.0.1.0'],
  [184549375, '10.255.255.255'],
  [184549376, '11.0.0.0'],
  [3116185459, '185.189.55.115'],
];

toInt.forEach( item => {
  assert.equal(item[0], ip2int.toInt(item[1]))
  assert.equal(item[1], ip2int.toIp(item[0]))
})


console.log('\nAll tests passed');