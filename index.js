function toInt(ip) {
  return ip.split('.')
      .reduce(function(part, index) {
        return (part << 8) +
          parseInt(index, 10)
      }, 0) >>> 0
}

function toIp(part) {
  let parts = [];

  parts.push( part>>24 )
  parts.push( part>>16 & 255)
  parts.push( part>>8 & 255)
  parts.push( part & 255)

  return parts.join('.')
}

module.exports.toInt = toInt
module.exports.toIp = toIp
