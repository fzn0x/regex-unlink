// Type definitions for regex-unlink
// Project: https://github.com/fncolon/regex-unlink#README.md
// Definitions by: Muhammad Fauzan <https://github.com/fncolon>

import fs = require("fs");

declare namespace RegexUnlink {
  interface globOptions {
    cwd?: string | undefined;
    root?: string | undefined;
    dot?: boolean | undefined;
    nomount?: boolean | undefined;
    mark?: boolean | undefined;
    nosort?: boolean | undefined;
    stat?: boolean | undefined;
    silent?: boolean | undefined;
    strict?: boolean | undefined;
    cache?:
      | { [path: string]: boolean | "DIR" | "FILE" | ReadonlyArray<string> }
      | undefined;
    statCache?:
      | { [path: string]: false | { isDirectory(): boolean } | undefined }
      | undefined;
    symlinks?: { [path: string]: boolean | undefined } | undefined;
    realpathCache?: { [path: string]: string } | undefined;
    sync?: boolean | undefined;
    nounique?: boolean | undefined;
    nonull?: boolean | undefined;
    debug?: boolean | undefined;
    nobrace?: boolean | undefined;
    noglobstar?: boolean | undefined;
    noext?: boolean | undefined;
    nocase?: boolean | undefined;
    matchBase?: any;
    nodir?: boolean | undefined;
    ignore?: string | ReadonlyArray<string> | undefined;
    follow?: boolean | undefined;
    realpath?: boolean | undefined;
    nonegate?: boolean | undefined;
    nocomment?: boolean | undefined;
    absolute?: boolean | undefined;
    fs?: typeof fs;
  }

  const options: globOptions;

  function unlink(path: string, callback?: Function): void;

  function asyncUnlink(path: string): Promise<void>;
}

export = RegexUnlink;
