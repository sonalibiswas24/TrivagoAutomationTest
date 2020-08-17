const webdriver = require('selenium-webdriver');
const expect = require('chai').expect;
const By = require('selenium-webdriver').By;

describe('Smoke Tests', function() {
  // Test case1

  it('user should be able to login', function() {
    const driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('https://plangrid-test.planfront.net/login');
    driver.manage().window().maximize().then(_ =>
      driver.findElement(By.id('test-email')).sendKeys('sonali.jana@plangrid.com').then(_ =>
        driver.findElement(By.id('test-submitLogin')).click().then(_ =>
          driver.sleep(3000).then(_ =>
            driver.findElement(By.id('test-password')).sendKeys('infy@123').then(_ =>
              driver.findElement(By.id('test-submitLogin')).click().then(_ =>
                driver.sleep(3000).then()))))));
  }); // test-case end

  // Test case2

  it.only('user should be able to logout', function() {
    const driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('https://plangrid-test.planfront.net/login');
    driver.manage().window().maximize().then(function() {
      driver.findElement(By.id('test-email')).sendKeys('sonali.jana@plangrid.com').then(function() {
        driver.findElement(By.id('test-submitLogin')).click().then(function() {
          driver.sleep(3000).then(function() {
            driver.findElement(By.id('test-password')).sendKeys('infy@123').then(function() {
              driver.findElement(By.id('test-submitLogin')).click().then(function() {
                driver.sleep(7000).then(function() {
                  driver.findElement(By.id('test-accountDropdown')).click().then(function() {
                    driver.sleep(3000).then(function() {
                      driver.findElement(By.xpath('//*[@id="test-logout"]')).click().then(function() {

                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  }); // test-case end

  // Test case3

  it('user should not be able to login - invalid username/passwd', async function() {
    const driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('https://plangrid-test.planfront.net/login');
    driver.manage().window().maximize().then(function() {
      driver.findElement(By.id('test-email')).sendKeys('sonali.jana@plangrid.com').then(function() {
        driver.findElement(By.id('test-submitLogin')).click().then(function() {
          driver.sleep(3000).then(function() {
            driver.findElement(By.id('test-password')).sendKeys('node@123').then(function() {
              driver.findElement(By.id('test-submitLogin')).click().then(function() {
                driver.sleep(3000).then(function() {
                  driver.findElement(By.xpath('//div[contains(@class,\'error-alert\')]/span')).getText().then(function(text) {
                    expect(text).contains('Your password is incorrect or an account with email ');
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});// test-case end

// test-suite end
