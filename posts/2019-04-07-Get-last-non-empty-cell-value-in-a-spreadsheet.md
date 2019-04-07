---
title: Get last non-empty cell value in a spreadsheet
date: 2019-04-07
---

Let's say your values are in the range `B2:B`.

To get the last value of all non-empty cells in that range, use the following formula:

```
=INDEX(B2:B,COUNTA(B2:B))
```

Where:

- INDEX returns `Content of a cell specified by a row and column offset`
- COUNTA returns `Number of rows in a dataset`


Based on [this article] for Microsoft Excel