const puppeteer = require('puppeteer');

async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://in.linkedin.com/')

    // taking screenshot
    // await page.screenshot({path: 'linkdInFull.png', fullPage: true})

    // downloading as PDFs
    // await page.pdf({path: 'linkdInA5.pdf', format: 'A5'})

    // html content
    // const html = await page.content();
    // console.log(html);


    // html title
    // const title = await page.evaluate(() => document.title)
    // console.log(title);

    // all links
    const links = await page.evaluate(() => Array.from(document.querySelectorAll('a'), (e) => e.href))
    console.log(links);


    await browser.close();

}

run();
