const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const captcha=async () => {
    const browser = await puppeteer.launch({ headless: true, args: ['--disable-infobars', '--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.goto('https://www.google.com.my/imghp');
    console.log('Google Image Search page loaded');
    try {
        const button = await page.waitForSelector('div.dRYYxd > div.nDcEnd');

        console.log(button);
    
        await button.click();
        console.log('Button clicked1');
        await button.click();
        await button.click();
        await button.click();
        console.log('Button clicked2');
    
    
        await page.$eval('.cB9M7', el => el.value = 'https://syedforum.000webhostapp.com/img/captcha.png');
        const submit = await page.$('div.Qwbd3');
        console.log('----------->', submit);
        await submit.click();
    
        await page.waitForNavigation();
        const textButton = await page.waitForSelector('#ucj-3');
        console.log('<---------,', textButton);
        await textButton.click()
        await page.waitForSelector('.QeOavc')
        let element = await page.$('[dir="ltr"]')
        let value = await page.evaluate(el => el.querySelector('[dir="ltr"]').innerHTML, element)
        console.log(value);
        browser.close()
    } catch (error) {
        console.log('try to reload or image is unreadable', error);
    }
   
    
};





app.get('/', async (req, res) => {
res.send('hi')
});
app.get('/sd', async (req, res) => {
    res.send('hi')
    captcha()
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

