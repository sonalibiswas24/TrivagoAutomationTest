import { Constants } from '../../utils/constants';
import { By } from 'selenium-webdriver';
import { driver } from '../../index.js';

const TEST_CASE = 'User should be able to search a Project';

let testSteps = async () => {
    await driver.findElement(By.name('project_search')).sendKeys(Constants.PROJECT_SEARCH_NAME);
    await driver.findElement(By.xpath(`//a[contains(@title,'${Constants.PROJECT_NAME}')]/span[1]/span[1]`)).click();
    await driver.sleep(6000);
}

let SearchProject = () => it(TEST_CASE, testSteps.bind(this));

export default SearchProject;