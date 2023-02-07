# Watermark Generator Script
### A command-line tool to add watermark to a video file.

## Prerequisites
(*) Node.js version 12 or later
(*) FFmpeg installed on your system
(*) A video file and a watermark image file
### Installation
(*) Clone or download the repository to your local machine
(*) In the terminal, navigate to the root directory of the repository
(*) Run the following command to install the dependencies:

``
npm install
``
### Usage
The tool takes three arguments: the input video file, the output video file, and the watermark image file. To run the tool, open the terminal, navigate to the root directory of the repository, and run the following command:

``
node index.js input.mp4 output.mp4 watermark.png
``

The tool will add the watermark image to the center of the input video file and save the result as the output video file. The output file will have the same format as the input file.

### Note
If the arguments are not passed, you will get an error message:

### Error: missing required argument(s). Usage: node index.js inputPath outputPath watermarkPath

### Demo
Open the demo folder to view a demo video and its added watermark

### Contributions
PR's / Reviews are welcome here. I don't take opinions personally! I'm always open to learning.