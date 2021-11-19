const { asyncUnlink } = require("../lib/regex-unlink");

(async () => {
  // asynchronous example :
  await asyncUnlink("**/**/**.txt", (err) => {
    if (err) {
      console.log(err);
    }

    console.log("Delete all .txt files successful!");
  });
})();
