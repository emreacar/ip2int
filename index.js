/**
 *
 * @param {String} ip
 * @returns Number
 * @description Input: 10.0.0.1, Output: 167772161
 */
function toInt(ip) {
  return ip.split('.')
      .reduce(function(part, index) {
        return (part << 8) +
          parseInt(index, 10)
      }, 0) >>> 0
}

/**
 *
 * @param {Number} part
 * @returns String
 * @description Input: 167772161, Output 10.0.0.1
 */
function toIp(part) {
  let parts = [];

  parts.push( part>>24 )
  parts.push( part>>16 & 255)
  parts.push( part>>8 & 255)
  parts.push( part & 255)

  return parts.join('.')
}

/**
 *
 * @param {String} ipRange
 * @return Object {start, end}
 * @description InputEx: 10.0.0.1/2.1
 */
function fromRange(ipRange) {
  let data= {};
  let parsedRange= ipRange.split('/')

  data.start= parsedRange[0]
  data.end= parsedRange[0]

  if(parsedRange.length > 1) {
    let range= parsedRange[1].split('.'),
        replaceStart= 4 - range.length,
        tempRange_end= data.end.split('.')

    range.forEach(r => {
      tempRange_end[replaceStart]=r;
      ++replaceStart;
    })

    data.end= tempRange_end.join('.');
  }

  data.start= toInt(data.start)
  data.end= toInt(data.end)

  return data
}

module.exports.toInt = toInt
module.exports.toIp = toIp
module.exports.fromRange = fromRange
