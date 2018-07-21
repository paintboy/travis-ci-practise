const HCCrawler = require('headless-chrome-crawler');

(async () => {
    const crawler = await HCCrawler.launch({
        maxDepth: 4,
        jQuery: false,
        allowedDomains: ['127.0.0.1', 'top']
    });
    await crawler.queue({ url: 'http://localhost/' });
    await crawler.onIdle();
    console.log("Hello");
    await crawler.close();
})();
