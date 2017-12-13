---
title: 'Mapping historic market data'
date: 2017-12-11
layout: post
category: posts
bg_image: /assets/images/posts/market-data.png
---


Market data is generally represented as an array of arrays, and each entry is a data point that represents a "snapshot" of the market in a given period of time.


Each data point contains information like the timestamp, open/close price, high/low price and the volume of transactions in this period.

![market data](/assets/images/posts/market-data.full.png)

Here is a recent sample of a few data points for the currency pair `LTC-EUR` on the market [`gdax`](https://www.gdax.com/):

```
const marketData = [
  [
    1513025761,     // time
    161,            // low
    163.11,         // high
    162.98,         // open
    162.67,         // close
    823.99626973    // volume
  ],
  [
    1513024062,
    157.22,
    164.01,
    157.5,
    163,
    5343.671050650007
  ]
]
```

## map to array of objects

To get a more pleasant array of objects to work with, you can map the array structure to an Object with named property like this:

```
marketData.map(h => ({
  time: h[0],
  low: h[1],
  high: h[2],
  open: h[3],
  close: h[4],
  volume: h[5]
}))
```

And the result would be the following:

```
[
  {
    "time": 1513025761,
    "low": 161,
    "high": 163.11,
    "open": 162.98,
    "close": 162.67,
    "volume": 823.99626973
  },
  {
    "time": 1513024062,
    "low": 157.22,
    "high": 164.01,
    "open": 157.5,
    "close": 163,
    "volume": 5343.671050650007
  }
]
```

## Map to array of objects grouped by key

It can also be interesting to have the data grouped by key.

You can achieve this, reducing each key to an array of the corresponding values:

```
Object.keys(marketData[0]) // ['time','low','high','open','close','volume']
.reduce((acc, key => ({
  ...acc,
  [key]: marketData.map(data => data[key]) // returns an array of values for each key
}), {})
```

```

{
  "time": [1513024062, 1513025761],
  "low": [157.22, 161],
  "high": [164.01, 163.11],
  "open": [157.5, 162.98],
  "close": [163, 162.67],
  "volume": [5343.671050650007, 823.99626973]
}
```

---

Discuss these thoughts with me on [twitter](https://twitter.com/christian_fei)!
