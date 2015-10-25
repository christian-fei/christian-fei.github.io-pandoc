---
title: 'Elixir Plug order matters!'
date: 2015-10-25
layout: post
---

I ran into this gotcha today as I was [playing](https://github.com/christian-fei/hello_plug) with [Plug](http://hexdocs.pm/plug/extra-readme.html) of Elixir.

The issue I was facing was that I defined a super simple plug that added a header to the underlying connection:

```
defmodule HelloPlug.Plug do
  import Plug.Conn
  def init(options) do
    options
  end

  def call(conn, options) do
    put_resp_header(conn, "x-plug", "PlugPlug")
  end
end
```

And it was plugged into the router definition like so:

```
  plug :match
  plug :dispatch
  plug HelloPlug.Plug # here it is!
```


In the router test I was getting errors that said that the response was already sent:

```
     test/hello_plug_test.exs:7
     ** (Plug.Conn.AlreadySentError) the response was already sent
```

Then it hit me: **Plugs are executed in the order they are defined!**. The problem was that the `:dispatch` function (from `Plug.Router`) was sending the request down the wire, and *after* that I was trying to set the header to the connection.

Simply plugging my Plug before `:match` and `:dispatch` did the trick:

```
  plug HelloPlug.Plug
  plug :match
  plug :dispatch
```
