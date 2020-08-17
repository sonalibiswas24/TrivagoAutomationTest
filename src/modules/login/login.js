import { Constants } from '../../utils/constants';
import { By } from 'selenium-webdriver';
import { driver } from '../../index.js';

const TEST_CASE = 'User should be able to login';

let testSteps = async () => {
    driver.get(Constants.LOGIN_URL);
    await driver.manage().window().maximize();
    await driver.findElement(By.id('test-email')).sendKeys(Constants.LOGIN_USERNAME);
    await driver.findElement(By.id('test-submitLogin')).click();
    await driver.sleep(2000);
    

    await driver.findElement(By.id('test-password')).sendKeys(Constants.LOGIN_PASSWORD);
    await driver.findElement(By.id('test-submitLogin')).click();
    await driver.sleep(6000);
}

let Login = () => it(TEST_CASE, testSteps.bind(this));

export default Login;