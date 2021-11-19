const { asyncUnlink } = require("../lib/regex-unlink");

(async () => {
  // asynchronous example :
  try {
    await asyncUnlink("**/**/**.txt");
  } catch (e) {
    console.err(e);
  }
})();
