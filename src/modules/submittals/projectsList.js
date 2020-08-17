import { Constants } from '../../utils/constants';
import { By } from 'selenium-webdriver';
import { driver } from '../../index.js';

const TEST_CASE = 'User should be able to navigate back to Projects List';

let testSteps = async () => {
    await driver.findElement(By.xpath(`//a[contains(@href,'/projects')]`)).click();
    await driver.sleep(4000);
}

let ProjectsList = () => it(TEST_CASE, testSteps.bind(this));

export default ProjectsList;