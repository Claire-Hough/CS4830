import scrapy

from .. import items

class QuotesSpider(scrapy.Spider):
    name = "quotes"
    start_urls = ['http://quotes.toscrape.com/']
    def parse(self, response):
        QUOTE_SELECTOR = 'div.quote'
        for quote in response.css(QUOTE_SELECTOR):
            
            TEXT_SELECTOR = 'span.text::text'
            AUTHOR_SELECTOR = 'span/small/text()'
            
            
            item = items.Challenge6Item()
            
            item['text'] = quote.css(TEXT_SELECTOR).extract_first()
            item['author'] = quote.xpath(AUTHOR_SELECTOR).extract_first()

            yield item
            
            
#            yield {
#                'text': quote.css(TEXT_SELECTOR).extract_first(),
#                'author': quote.xpath(AUTHOR_SELECTOR).extract_first()
#            }
            
        NEXT_PAGE_SELECTOR = 'li.next a::attr("href")'
        next_page = response.css(NEXT_PAGE_SELECTOR).extract_first()
        if next_page:
            yield scrapy.Request(response.urljoin(next_page), callback = self.parse)