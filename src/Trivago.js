import { Constants } from '../../utils/constants';
import { By } from 'selenium-webdriver';
import { driver } from '../../index.js';

const TEST_CASE = 'Search for any location on Magazine by using the search bar';

let testSteps = async () => {
    await driver.findElement(By.class('search-icon')).sendKeys(Constants.PROJECT_SEARCH_NAME);
    await driver.findElement(By.xpath(`//a[contains(@title,'${Constants.PROJECT_NAME}')]/span[1]/span[1]`)).click();
    await driver.sleep(6000);
}

let SearchProject = () => it(TEST_CASE, testSteps.bind(this));

export default SearchProject;