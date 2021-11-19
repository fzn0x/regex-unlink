const glob = require("glob");
const fs = require("fs");
const utils = require("./utils");

const options = {
  dot: true,
  ignore: "**/node_modules/**",
};

const unlink = (path, callback) => {
  glob(path, options, function (globError, files) {
    files.forEach((realPath) => {
      fs.unlink(realPath, (err) => {
        if (utils.isFunction(callback)) {
          callback(globError || err);
        }
      });
    });
  });
};

const asyncUnlink = async (path) => {
  const unlinked = [];

  glob(path, options, function (globError, files) {
    if (globError) {
      throw globError; // glob error
    }

    unlinked.push(
      files.forEach((realPath) => {
        return fs.promises.unlink(realPath);
      })
    );
  });

  return Promise.all(unlinked);
};

exports = module.exports = {
  options,
  unlink,
  asyncUnlink,
};
