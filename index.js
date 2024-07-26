const puppeteer = require('puppeteer');

// async function run() {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://in.linkedin.com/')

//     // taking screenshot
//     // await page.screenshot({path: 'linkdInFull.png', fullPage: true})

//     // downloading as PDFs
//     // await page.pdf({path: 'linkdInA5.pdf', format: 'A5'})

//     // html content
//     // const html = await page.content();
//     // console.log(html);


//     // html title
//     // const title = await page.evaluate(() => document.title)
//     // console.log(title);

//     // all links
//     const links = await page.evaluate(() => Array.from(document.querySelectorAll('a'), (e) => e.href))
//     // const links = await page.evaluate(() => {
//     //     const nodeList = document.querySelectorAll('a');
//     //     const arrayLikeObject_to_array = Array.from(nodeList);
//     //     return array.map(e => e.href);
//     //   });
//     console.log(links);


//     await browser.close();

// }

// run();

async function articles() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.traversymedia.com/');

    const article = await page.evaluate(()=> Array.from(document.querySelectorAll('#cscourses .card'),
        (e) => ({
            levels: e.querySelector('.card-body .level').innerText,
            title: e.querySelector('.card-body h3').innerText,
            links: e.querySelector('.card-footer a').innerText,
        
        })
))
console.log(article);

await browser.close()
}

articles();

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
