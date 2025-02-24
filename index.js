const puppeteer = require('puppeteer-extra');

const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

async function run() 
{
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto("https://www.amazon.com/GNX-LP-Kendrick-Lamar/dp/B0DP1JZ6DT/ref=asc_df_B0DP1JZ6DT?mcid=42b13374a6373f8aa2a2e0c3bba6bbe2&hvocijid=327381546459992356-B0DP1JZ6DT-&hvexpln=73&tag=hyprod-20&linkCode=df0&hvadid=730434177080&hvpos=&hvnetw=g&hvrand=327381546459992356&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9192197&hvtargid=pla-2281435180738&psc=1")

    let selector = "button[id='nav-assist-add-to-cart']";
    await page.waitForSelector(selector);
    await page.evaluate((selector) => {
        document.querySelector(selector).click();
    }, selector)
    

}

run();