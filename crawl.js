const HCCrawler = require('headless-chrome-crawler');

(async () => {
  const crawler = await HCCrawler.launch({
    maxDepth: 1,
  });
  await crawler.queue('http://localhost:8080');
  await crawler.onIdle();
  console.log("Hello");
  await crawler.close();
})();
