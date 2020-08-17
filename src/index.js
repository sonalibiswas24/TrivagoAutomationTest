import { Builder, By, Key } from 'selenium-webdriver';
import { Constants, getRandomEmailGenerator } from './utils/constants';

let driver;

describe('Trivago Magazine Test Suite', () => {
    before(async() => {
            // options if necessary (i.e. firefox.Options or chrome.Options)).
            driver = await new Builder().forBrowser('chrome').build();
    });


    describe('Smoke Tests package flow', () => {

        describe('Open Trivago URL', () => {
            it('User should be able to open the URL', async () => {
                driver.get(Constants.LOGIN_URL);
                await driver.manage().window().maximize();
            });
        });
           
        describe('Search for any location on Magazine by using the search bar', () => {
            it('User should be able to search the location', async () => {
                await driver.findElement(By.className('search-icon')).click();
                await driver.sleep(3000);
                await driver.findElement(By.className('search-input')).sendKeys(Constants.SEARCH_INPUT);
                await driver.sleep(3000);
                await driver.findElement(By.xpath('//*[@id="header"]/div/div/div[2]')).click();
                await driver.sleep(5000);
            });
        });

        describe('Subscribe to the Newsletter', () => {
            it('User should be able to Subscribe', async () => {
               await driver.findElement(By.className('newsletter-email-submit')).click();
               await driver.sleep(3000);
               await driver.findElement(By.className('et-email')).sendKeys(getRandomEmailGenerator());
               await driver.sleep(3000);
               await driver.findElement(By.className('submit')).click();
               await driver.sleep(5000);
           });
        });

        describe('Navigate to the destination through the top left menu', () => {
            it('User should be able to Navigate', async () => {
                await driver.findElement(By.tagName('body')).sendKeys(Key.ARROW_UP);
                await driver.sleep(3000);
                await driver.findElement(By.className('nav-icon')).click();
                await driver.sleep(3000);
                await driver.findElement(By.className('menu-title')).click();
                await driver.sleep(3000);
                await driver.findElement(By.xpath('//a[contains(@href,"/destination/northwest/")]')).click();
                await driver.sleep(2000);
            });
        });
    });
     
    after(() => driver && driver.quit());
});

