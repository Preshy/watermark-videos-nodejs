const ffmpeg = require("fluent-ffmpeg");
const { Promise } = require("core-js");

export async function addWatermark(inputPath: string, outputPath: string, watermarkPath: string) {
  return new Promise((resolve, reject) => {
    ffmpeg(inputPath)
      .addInput(watermarkPath)
      .complexFilter([
        {
          filter: "overlay",
          options: {
            x: "(main_w - overlay_w) / 2",
            y: "(main_h - overlay_y) / 2",
          },
          inputs: "[1:v]",
          outputs: "watermarked",
        },
      ])
      .on("end", resolve)
      .on("error", reject)
      .save(outputPath);
  });
}