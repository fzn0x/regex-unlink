const { asyncUnlink } = require("../lib/regex-unlink");

(async () => {
  // asynchronous example :
  try {
    await asyncUnlink("**/**/**.txt");
  } catch (err) {
    console.error(err);
  }
})();
