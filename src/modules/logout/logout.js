import { Constants } from '../../utils/constants';
import { By } from 'selenium-webdriver';
import { driver } from '../../index.js';

const TEST_CASE = 'User should be able to logout';

let testSteps = async () => {
    await driver.sleep(6000);
    await driver.findElement(By.id('test-accountDropdown')).click();
    await driver.sleep(1000);
    await driver.findElement(By.xpath('//*[@id="test-logout"]')).click();
}


let Logout = () => it(TEST_CASE, testSteps.bind(this));
export default Logout;