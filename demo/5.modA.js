module.exports.test = "A";

const modB = require("./5.modB");
console.log("modA:", modB.test);

module.exports.test = "AA";
