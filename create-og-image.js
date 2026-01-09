const sharp = require('sharp');

async function createOgImage() {
  try {
    const bgColor = '#1a3a52';

    const logo = await sharp('public/AlvaMid-Logo-Small.png')
      .resize(600, 600, { fit: 'inside', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toBuffer();

    const background = await sharp({
      create: {
        width: 1200,
        height: 630,
        channels: 4,
        background: bgColor
      }
    })
    .png()
    .toBuffer();

    await sharp(background)
      .composite([{
        input: logo,
        gravity: 'center'
      }])
      .flatten({ background: bgColor })
      .jpeg({ quality: 95 })
      .toFile('public/og-image.jpg');

    console.log('✓ og-image.jpg создан успешно!');
    console.log('Размер: 1200x630px');
    console.log('Фон: темно-синий #1a3a52');

  } catch (error) {
    console.error('Ошибка:', error.message);
  }
}

createOgImage();
