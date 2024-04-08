export default function createImage(source) {
  const generatedImage = new Image();
  generatedImage.src = source;

  return generatedImage;
}