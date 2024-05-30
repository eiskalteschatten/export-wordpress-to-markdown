import fs from 'node:fs';
import { Readable } from 'stream';
import { finished } from 'stream/promises';

export async function downloadImage(imageUrl, destination) {
  if (fs.existsSync(destination)) {
    console.error('File already exists:', destination);
    return true;
  }

  try {
    const response = await fetch(imageUrl);

    if (response.ok) {
      const fileStream = fs.createWriteStream(destination, { flags: 'wx' });
      await finished(Readable.fromWeb(response.body).pipe(fileStream));
      return true;
    }

    console.error('Failed to download image:', imageUrl);
    return false;
  }
  catch (error) {
    console.error('Failed to download image:', imageUrl, error);
    return false;
  }
}

export function convertEscapedAscii(string) {
  return string.replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(dec));
}

export function stripHtml(string) {
  return string.replace(/<[^>]*>/g, '');
}