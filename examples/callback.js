const { unlink } = require("../lib/regex-unlink");

// delete file with regex
unlink("**/**.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Delete all .txt files successful!");
});

// or without regex
unlink("test.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Delete all .txt files successful!");
});

// Trigger fs.unlink error:
unlink(".", (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Delete all .txt files successful!");
});

// Trigger glob error:
unlink(null, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Delete all .txt files successful!");
});
