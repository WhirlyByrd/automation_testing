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
}

const deleteMovie = async (driver) => {
    await driver.findElement(By.xpath("(//button[text()='x'])[1]")).click()
    await driver.sleep(2000)
}


module.exports = {
    addMovie,
    crossMovie,
    deleteMovie
}