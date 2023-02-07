import { addWatermark } from './watermarker'

// node index.js input.mp4 output.mp4 watermark.png
const [, , inputPath, outputPath, watermarkPath] = process.argv;

// validate argument variables
if (!inputPath || !outputPath || !watermarkPath) {
  console.error("Error: missing required argument(s). Usage: node index.js inputPath outputPath watermarkPath");
  process.exit(1);
}

// do the magick!
addWatermark(inputPath, outputPath, watermarkPath)
  .then(() => console.log("Watermark added successfully"))
  .catch((error) => console.error(error));
