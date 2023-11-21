const puppeteer  = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false, args: [] });
  const page = await browser.newPage();
  await page.goto('https://lens.google.com/search?ep=subb&hl=en-IN&re=df&p=AbrfA8rFB_teeGaacG0B5sgJwjT7Zj-8Pewk9aJXN1f3kckWCCjoxTutdnsqricKmNfVCcFvkA_-F4lcBKAulmR7sOlvFimKuSSaZ37l9JKHEAZ7pSlkx7UcUCiEo4J7WYcQMIOaBe_yeSC0JW_6rrolV3Njokw2rvz6qH5p1wPlrf3Q-RUVmdVV76uiSEA6IMc_BiEiJiFXvNHV7169YvNQi7slZ14HvPPNnAi3rBD9itl3xwFrCvDqTsVuS7vREWwwMlIueE-SZQ8txz8rJJ_yflvyVoIVGto770b9BqUJpDO5Bm0qmJ9YKYzjvm7aM6--n4xb#lns=W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsIkVrY0tKREV6Wm1ZM016QmhMV1E0TlRRdE5ESTFNUzA1TVRCaUxUUXhabU5qWm1VNFpUaGhaUklmY3paYU5XUjZZbWR4WTFWUk9FZHRjM3A0VFdaRGJIVXpkSE5KZW5WNFp3PT0iLG51bGwsbnVsbCxudWxsLDIsbnVsbCxbbnVsbCxudWxsLG51bGwsW1s1MzkzOCw1OTI2Nl1dXV0=');
  console.log('Google Image Search page loaded');
  // await page.
  const button = await page.$('div.VfPpkd-dgl2Hf-ppHlrf-sM5MNb > button');
  console.log(button);
  await button.click();
  console.log('Button clicked');
  await button.click()
  // console.log('Button clicked');

  const uploadButton = page.waitForSelector('amqM1 VfPpkd-StrnGf-rymPhb-ibnC6b')
  console.log(uploadButton);
      await uploadButton.click();
        console.log('Button clicked');
//   await uploadButton.uploadFile('./Cute-Cat.jpg');
})();