import sharp from 'sharp';

const resizeImage = async (imageData, width, height) => {
  try {
    const resizedImage = await sharp(imageData)
      .resize(width, height)
      .toBuffer();
    return resizedImage;
  } catch (error) {
    console.error('Error resizing image:', error);
    throw error;
  }
};

const compressImage = async (imageData, quality) => {
  try {
    const compressedImage = await sharp(imageData)
      .jpeg({ quality })
      .toBuffer();
    return compressedImage;
  } catch (error) {
    console.error('Error compressing image:', error);
    throw error;
  }
};

export { resizeImage, compressImage };