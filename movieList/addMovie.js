const {By} = require('selenium-webdriver')


const addMovie = async (driver) => {
    
    await driver.findElement(By.xpath('//input')).sendKeys('Greyhound')

    await driver.findElement(By.xpath('//button')).click()

    await driver.sleep(2000)

    const movie = await driver.findElement(By.xpath('//li'))
    const displayed = movie.isDisplayed()
    expect(displayed).toBeTruthy()

}

const crossMovie = async (driver) => {

    await driver.findElement(By.xpath('//span')).click()
    await driver.sleep(2000)

    const cross = await driver.findElement(By.xpath('//span[contains(@class, "checked")]'))
    const isCrossed = cross.isDisplayed()
    expect(isCrossed).toBeTruthy()
}

const deleteMovie = async (driver) => {
    await driver.findElement(By.xpath('(//button[text()="x"])[1]')).click()
    await driver.sleep(2000)

    const deleted = await driver.findElement(By.xpath('//ul[contains(text(), "")]'))
    const isDeleted = deleted.isDisplayed()
    expect(isDeleted).toBeTruthy()
}

const checkMessage = async (driver) => {
    
    const message = await driver.findElement(By.id("message"))

    const displayedMessage = message.isDisplayed()

    expect(displayedMessage).toBeTruthy()
}
    



module.exports = {
    addMovie,
    crossMovie,
    deleteMovie,
    checkMessage

}