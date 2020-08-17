import { Constants } from '../../utils/constants';
import { By } from 'selenium-webdriver';
import { driver } from '../../index.js';

const TEST_CASE = 'User should be able to open Submittals Dashboard';

let testSteps = async () => {
    await driver.findElement(By.xpath(`//li[contains(@data-qa,'navigation.submittals')]/a[1]`)).click();
    await driver.sleep(6000);
}

let SubmittalsDashboard = () => it(TEST_CASE, testSteps.bind(this));

export default SubmittalsDashboard;