// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const assert = require('assert')

describe('testeLoginErrado', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.close();
  })
  it('testeLoginErrado', async function() {
    await driver.get("http://localhost:3000/login")
    await driver.manage().window().setRect({ width: 1050, height: 748 })
    await driver.findElement(By.id("floatingInput")).click()
    await driver.findElement(By.id("floatingInput")).sendKeys("semuser@gmail.com")
    await driver.findElement(By.id("floatingPassword")).sendKeys("123456")
    await driver.findElement(By.css(".w-100")).click()
    await driver.findElement(By.css(".alert")).click()
    {
      const elements = await driver.findElements(By.css(".alert"))
      assert(elements.length)
    }
  });
  it('testeLoginErradoSenhaCurta', async function() {
    await driver.get("http://localhost:3000/login")
    await driver.manage().window().setRect({ width: 1050, height: 748 })
    await driver.findElement(By.id("floatingInput")).click()
    await driver.findElement(By.id("floatingInput")).sendKeys("semuser@gmail.com")
    await driver.findElement(By.id("floatingPassword")).sendKeys("123")
    await driver.findElement(By.css(".w-100")).click()
    await driver.findElement(By.css(".alert")).click()
    {
      const elements = await driver.findElements(By.css(".alert"))
      assert(elements.length)
    }
  })
})
