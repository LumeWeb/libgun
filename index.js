const Gun = require("gun");
require("gun/nts.js");
Gun.Rmem = require("gun/lib/rmem.js");
if (typeof window !== "undefined") {
  Gun.Rmem = window.Rmem;
}

module.exports = Gun;
