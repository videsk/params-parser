# params Parser

This library allow to generate a url with params added by object, array or by units.

## How to use

For start only need initialize class.

```js
const paramParse = new paramsToURL();
```

## Add params by one

```js
paramParse.add()
```

## Add params by object

```js
paramParse.byObj({ name: 'John', number: 9236376288 });
```

## Add params by array

```js
paramParse.byArray('channels[$in]', ['5c82cb15582685351224cce3', '5c82cb25582685351224cce4'])
```

## Get the URL

For get the URL with parameters only need execute:

```js
paramParse.parse();

// Output
'?name=John&number=9236376288&channels[$in]=5c82cb15582685351224cce3&channels[$in]=5c82cb25582685351224cce4';
```

## Copyrights

This library is totally open source with Apache 2.0 license, but was designed for Videsk™ products.
