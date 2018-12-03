# v2

for https://christianfei.com

# go live

```
./build ; ./deploy ; ./purge
```


## develop

```
npx serve dist/
npx watch ./build --ignoreDotFiles --ignoreDirectoryPattern="/dist/"
```

## write

```
./write this is a test
```

# sync getpocket.com items

```
npx @christian_fei/pocket-sync [pocket_consumer_key] <pocket_access_token>
```

## build

with

```
./build
```

## deploy

with

```
./deploy
```

## purge

fill out `secrets` by copying `secrets.example`.

then

```
./purge
```

