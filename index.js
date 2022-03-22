const Gun = require("gun");
require("gun/nts.js");
Gun.Rmem = require("gun/lib/rmem.js");
if (typeof window !== "undefined") {
  Gun.Rmem = window.Rmem;
  require("gun/sea.js");
}

module.exports = Gun;
