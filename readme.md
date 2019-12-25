# IP2INT
> Convert ip addresses to comparable integers and create ip ranges from string

## INSTALL
```
npm i ip2integer
```

## USAGE

> For general usage import module

```
import ip2int from 'ip2integer'
```

> For convert ip to integer
```
const toInt = ip2int.toInt('10.0.0.1')
//result => 167772161
```

> For convert integer to ip
```
const toIp = ip2int.toIp(167772161)
//result => '10.0.0.1'
```

> For convert integer from range
```
const range = '10.0.0.1/2.10'
const rangeInts = ip2int.fromRange(range)
//result => {start:167772161, end:167772682}
```

## TODO
- [ ] Add more detailed information **fromRange** method
- [ ] Add ipv6 support