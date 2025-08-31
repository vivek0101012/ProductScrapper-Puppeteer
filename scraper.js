
import puppeteer from "puppeteer";
import fs from "fs/promises";

async function scrapeEcommerce() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  let results = [];
  let url = "https://books.toscrape.com/catalogue/page-1.html";

  while (url) {
    console.log(`Scraping: ${url}`);
    await page.goto(url, { waitUntil: "domcontentloaded" });

    // Wait for products
    await page.waitForSelector(".product_pod");

    const data = await page.evaluate(() => {
      const items = [];
      document.querySelectorAll(".product_pod").forEach((book) => {
        items.push({
          title: book.querySelector("h3 a").getAttribute("title"),
          price: book.querySelector(".price_color").innerText,
          link: book.querySelector("h3 a").href,
        });
      });

      // check next page
      const nextBtn = document.querySelector(".next a");
      return { items, nextPage: nextBtn ? nextBtn.href : null };
    });

    results.push(...data.items);
    url = data.nextPage;
  }

  await browser.close();

  // Save data
  await fs.writeFile("books.json", JSON.stringify(results, null, 2));
  console.log(` Scraped ${results.length} books and saved to books.json`);
}

scrapeEcommerce().catch(console.error);
