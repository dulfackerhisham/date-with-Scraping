const puppeteer = require('puppeteer');

async function run() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://in.linkedin.com/');

    const articles = await page.evaluate(() => Array.from(document.querySelectorAll('.explore-content-hub .w-full ul'), 
        (e) => ({
            name: e.querySelector('li a').innerText
        })
))


console.log(articles);

await browser.close()
}

run();