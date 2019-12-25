#!/usr/bin/env node
const ip2int = require('./index.js')

const ipAddr = process.argv[2]
const toInt = ip2int.toInt(ipAddr)
const toIp = ip2int.toIp(toInt)

process.stdout.write(toIp + ' == ' + toInt + '\n')