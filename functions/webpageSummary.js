require("ts-node").register({ transpileOnly: true });

module.exports.handler = require("./handlers/webpageSummary").default;
