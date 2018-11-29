// example of a test group
// note: all tests under the test directory are ran

describe('Test scenario count card', ()=> {

    it('Count number of cards which have “New” label', ()=> {

        browser.url('https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/')
		let cardsList = browser.elements("//*[@id='business-credit-cards-v3']//div[@class='card-tile-wrap']//div[text()='New!']")
        console.log("Total new cards "+ cardsList.value.length)
		assert.equal(3, cardsList.value.length)
    });

  
});