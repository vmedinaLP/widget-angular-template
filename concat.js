const concat = require("concat-files");
const fs = require("fs");
const path = require("path");

const files = [
  path.resolve(__dirname, "./dist/prod-packer/main.js"),
  path.resolve(__dirname, "./dist/prod-packer/polyfills.js"),
  path.resolve(__dirname, "./dist/prod-packer/runtime.js"),
];

concat(
  files,
  path.resolve(__dirname, "./dist/prod-packer/ALFIN.js"),
  function (err) {
    if (files) {
      files.forEach((file) => fs.unlinkSync(file));
    }
    if (err) throw err;
    console.log("done");
  }
);
