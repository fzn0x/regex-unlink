## regex-unlink

`fs.unlink` but accepts regex, works with `Promise` and `callback` approach.

### Installation

```sh
npm install regex-unlink
```

### Usage

The usage was so simple and similar with `fs.unlink`.

```js
// delete files with `.txt` extension using callback approach
unlink("**/**.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Delete all .txt files successful!");
});

// you can specify path without regex
unlink("./text.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Delete all .txt files successful!");
});

// delete files with `.txt` extension using asynchronous approach
(async () => {
  await asyncUnlink("**/**.txt", (err) => {
    if (err) {
      console.log(err);
    }

    console.log("Delete all .txt files successful!");
  });
})();
```

### API

[examples here.](./examples)\
[declaration files here.](./index.ts)

- **options:** `const options: globOptions;`
  options binding for [glob](https://www.npmjs.com/package/glob)

- **unlink:** `function unlink(path: string, callback?: Function): void;`
  unlink using `callback`, equivalent of `fs.unlink`
- **asyncUnlink:** `function asyncUnlink(path: string): Promise<void>;`
  unlink using `Promise`, equivalent of `fs.promises.unlink`

### License

`regex-unlink` using the [MIT License](./LICENSE.md)
