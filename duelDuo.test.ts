
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Check that clicking the Draw button displays the div with id = “choices”', async () => {
     await driver.findElement(By.id("draw")).click()

     const choices = await driver.findElement(By.id("choices"))
     const displayed = await choices.isDisplayed()

     expect(displayed).toBe(true)
})


// Check that clicking an “Add to Duo” button displays the div with id = “player-duo”
test('Check that clicking an “Add to Duo” button displays the div with id = “player-duo”', async () => {
    await driver.findElement(By.id("draw")).click()
    
    
    await driver.findElement(By.xpath('(//button[text() = "Add to Duo"])[1]')).click()

    const message = await driver.findElement(By.id("player-duo"))
    const displayed = await message.isDisplayed()

    expect(displayed).toBe(true)
})

