const puppeteer = require('puppeteer-extra');

const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

async function run() 
{
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto("https://fill.dev/form/credit-card-simple")
    
    let selector = "input[id='cc-name']";
    await page.waitForSelector(selector);
    await page.type(selector, "Vamsi Chitturi");

    selector = "select[id='cc-type']";
    await page.select(selector, "visa");

    selector = "input[id='cc-number']";
    await page.type(selector, "1111111111111111");

    selector = "input[id='cc-csc']";
    await page.type(selector, "111");

    selector = "select[id='cc-exp-month']";
    await page.select(selector, "11");

    selector = "select[id='cc-exp-year']";
    await page.select(selector, "2027");

    selector = "button[type='submit']";
    await page.click(selector);

    

}

run();