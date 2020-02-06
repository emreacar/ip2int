#!/usr/bin/env node
const ip2int = require('./index.js')

const ipAddr = process.argv[2]
const fromRange = process.argv[3] || false

if(fromRange) {
  const ranges = ip2int.fromRange(ipAddr)

  process.stdout.write(ipAddr + '= START RANGE: ' + ranges.start + ' END RANGE: ' + ranges.end + '\n')
}else{
  const toInt = ip2int.toInt(ipAddr)
  const toIp = ip2int.toIp(toInt)
  process.stdout.write('INPUT: ' + ipAddr + ' => ' + toIp + ' == ' + toInt + '\n')
}

