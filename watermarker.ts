const ffmpeg = require("fluent-ffmpeg");

export async function addWatermark(inputPath: string, outputPath: string, watermarkPath: string) {
  return new Promise((resolve, reject) => {
    ffmpeg()
     .input(inputPath)
      .input(watermarkPath)
      .videoCodec('libx264')
      .outputOptions('-pix_fmt yuv420p')
      .complexFilter([
          "[0:v]scale=640:-1[bg];[bg][1:v]overlay=W-w-10:H-h-10"
      ])
      .on("end", resolve)
      .on("error", reject)
      .save(outputPath);
  });
}