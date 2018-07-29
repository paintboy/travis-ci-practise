console.log(process.argv[2]);
console.log('http://' + process.argv[2] + '/');

const HCCrawler = require('headless-chrome-crawler');
const CSVExporter = require('headless-chrome-crawler/exporter/csv');

const exporter = new CSVExporter({
    file: 'crawled.csv',
    fields: ['response.url', 'response.status', 'links.length'],
});

(async () => {
    const crawler = await HCCrawler.launch({
        maxDepth: 4,
        jQuery: false,
        allowedDomains: ['xypdkesxbk.dev'],
        exporter
    });
    await crawler.queue({ url: 'http://xypdkesxbk.dev/' });
    await crawler.onIdle();
    console.log("Crawler Done")
    await crawler.close();
})();
