

#  Book Product Scraper

A lightweight web scraper built with **[Puppeteer](https://pptr.dev/)** to extract book/product details such as title, price, and availability from e-commerce websites.

---

##  Features

* Extracts product details (title, price, etc.)
* Headless browser automation with Puppeteer
* Easy to extend for scraping more attributes
* Modular and developer-friendly

---

## Installation

Clone this repository:

```bash
https://github.com/vivek0101012/ProductScrapper-Puppeteer.git
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Usage

Run the scraper with Node.js:

```bash
node scrapper.js
```

By default, it will scrape book/product details from the configured site.
You can customize the URL inside `scrapper.js`.

---

##  Example Output

```json
[
  {
    "title": "Book Title 1",
    "price": "$10.99",
    "availability": "In stock"
  },
  {
    "title": "Book Title 2",
    "price": "$7.49",
    "availability": "Out of stock"
  }
]
```

---

## 🛠️ Tech Stack

* **Node.js**
* **Puppeteer**

---

## Roadmap

* [ ] Add support for multiple sites
* [ ] Export data to CSV/JSON file
* [ ] Add CLI arguments for custom URLs
* [ ] Add error handling & retries

---

