"use strict";
exports.__esModule = true;
var watermarker_1 = require("./watermarker");
// node index.js input.mp4 output.mp4 watermark.png
var _a = process.argv, inputPath = _a[2], outputPath = _a[3], watermarkPath = _a[4];
// validate argument variables
if (!inputPath || !outputPath || !watermarkPath) {
    console.error("Error: missing required argument(s). Usage: node index.js inputPath outputPath watermarkPath");
    process.exit(1);
}
// do the magick!
(0, watermarker_1.addWatermark)(inputPath, outputPath, watermarkPath)
    .then(function () { return console.log("Watermark added successfully"); })["catch"](function (error) { return console.error(error); });
