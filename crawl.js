const HCCrawler = require('headless-chrome-crawler');

/*class Crawler {
  async _setBypassCSP() {
    //if (!this._options.jQuery) return;
    // @ts-ignore
    await this._page.setBypassCSP(false);
  }
}*/

(async () => {
  const crawler = await HCCrawler.launch({
    maxDepth: 1,
    jQuery: false
  });
  /*class Crawler {
    async _setBypassCSP() {
      //if (!this._options.jQuery) return;
      // @ts-ignore
      await this._page.setBypassCSP(false);
    }
  }*/
  await crawler.queue({ url: 'http://localhost:8080/', saveAs: 'localhost.png' });
  await crawler.onIdle();
  console.log("Hello");
  await crawler.close();
})();
