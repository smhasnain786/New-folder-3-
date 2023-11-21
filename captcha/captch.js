const Tesseract = require('tesseract.js')
Tesseract.recognize(
    './captcha (1).png',
    'eng',
    { logger: m => console.log(m) }
  ).then(({ data: { text } }) => {
    console.log(text);
  })