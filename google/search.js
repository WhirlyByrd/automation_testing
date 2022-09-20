const { By } = require('selenium-webdriver')

const search = async (driver, searchTerm) => {
    
    await driver.findElement(By.name('q')).sendKeys(`${searchTerm}\n`)

    let resultsText = await driver.findElement(By.id('res')).getText()

    expect(resultsText.toLowerCase()).toContain(searchTerm.toLowerCase())

    await driver.findElement(By.name('q')).clear()
    await driver.sleep(4000)


    await driver.findElement(By.name('q')).sendKeys(`corgi mixes\n`)
    await driver.sleep(4000)


}

module.exports = {
    search
}