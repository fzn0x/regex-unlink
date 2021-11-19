## regex-unlink

`fs.unlink` but accepts regex, works with `Promise` and `callback` approach.

### Installation

```sh
npm install regex-unlink
```

### API

[examples here.](./examples)
[declaration files here.](./index.ts)

- **options:** `const options: globOptions;`
  options binding for [glob](https://www.npmjs.com/package/glob)

- **unlink:** `function unlink(path: string, callback?: Function): void;`
  unlink using `callback`, equivalent of `fs.unlink`
- **asyncUnlink:** `function asyncUnlink(path: string): Promise<void>;`
  unlink using `Promise`, equivalent of `fs.promises.unlink`

### License

`regex-unlink` using the [MIT License](./LICENSE.md)
