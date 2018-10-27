---
title: 'Using Cryptosheet.cc: Aggregate account balance by exchange and currency pair'
date: 2018-06-26
layout: post
category: posts
---

I don't know about you, but **I always struggled with keeping track of my cryptocurrency assets** that I have on different exchanges.

With the help of **[cryptosheet.cc](https://cryptosheet.cc) I am now able to get a realtime view of my account balances** on different exchanges like GDAX, Coinbase, Binance, Kraken, Gatehub, Block.io.

All on a single Google Spreadsheet, here is the proof:

![cryptosheet accounts breakdown](/assets/images/posts/cryptosheet-accounts-breakdown.png)

<div class="container">
  <section class="section hero card">
    <div class="card-body">
      <h1 class="title is-3">🔥 Follow <a href="https://twitter.com/getcryptosheet">@getcryptosheet</a> on Twitter!</h1>
      <!-- <h1 class="title is-4"><a href="https://cryptosheet.cc">cryptosheet.cc</a></h1> -->
    </div>
  </section>
</div>

## Get on board in 4 easy steps

Now I want to explain how you can do the same by signing up for [cryptosheet.cc](https://cryptosheet.cc)!

1) **Create an account** on [cryptosheet.cc](https://cryptosheet.cc/)

2) Signup for a **monthly subscription** with Stripe, you can cancel whenever you want

3) Create a **Google Spreadsheet**

4) Provide the **Access Keys** for your preferred exchanges


## Spreadsheet configuration

Once you set up the access keys and shared the Google spreadsheet, you can begin to aggregate the data.

On the **ACCOUNTS** worksheet, you can get easy access to the current account balances across exchanges and wallet providers.

### Breakdown in new worksheet

Did you know that in spreadsheet formulas you can reference other worksheets? That's exactly what you're gonna need.

![cryptosheet accounts example](/assets/images/posts/cryptosheet-accounts-example.png)

Now follow these steps:

- Create a new worksheet

- `copy` the following text

```
"By exchange"
coinbase	=SUMIF(ACCOUNTS!$A$2:$A, "*" & $A2 & "*", ACCOUNTS!$G$2:$G)
gdax	=SUMIF(ACCOUNTS!$A$2:$A, "*" & $A3 & "*", ACCOUNTS!$G$2:$G)
blockio	=SUMIF(ACCOUNTS!$A$2:$A, "*" & $A4 & "*", ACCOUNTS!$G$2:$G)
kraken	=SUMIF(ACCOUNTS!$A$2:$A, "*" & $A5 & "*", ACCOUNTS!$G$2:$G)	=SUM(B2:B5)


"By currencyPair"
ltc-eur	=SUMIF(ACCOUNTS!$B$2:$B, "*" & $A9 & "*", ACCOUNTS!$G$2:$G)
eth-eur	=SUMIF(ACCOUNTS!$B$2:$B, "*" & $A10 & "*", ACCOUNTS!$G$2:$G)
btc-eur	=SUMIF(ACCOUNTS!$B$2:$B, "*" & $A11 & "*", ACCOUNTS!$G$2:$G)
bch-eur	=SUMIF(ACCOUNTS!$B$2:$B, "*" & $A12 & "*", ACCOUNTS!$G$2:$G)
eur-eur	=SUMIF(ACCOUNTS!$B$2:$B, "*" & $A13 & "*", ACCOUNTS!$G$2:$G)	=SUM(B9:B13)
```

- `paste` it into the new worksheet *(you can use "Edit" > "Paste Special" > "Paste values only" in Google Sheets)*

Here is GIF as a quick how-to:

![cryptosheet-paste-spreadsheet-values](/assets/images/posts/cryptosheet-paste-spreadsheet-values.gif)

---

This is one way to make use of the raw data Cryptosheet.cc provides you!

[Signup today](https://cryptosheet.cc) to get control over your cryptocurrency assets!