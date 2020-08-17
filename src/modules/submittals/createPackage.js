import { Constants } from '../../utils/constants';
import { By, Keys } from 'selenium-webdriver';
import { driver } from '../../index.js';

const TEST_CASE = 'User should be able to create new package';

let testSteps = async () => {
    await driver.findElement(By.xpath(`//button[contains(@data-qa,'Dashboard.assignSubmittalBtn')]`)).click();
    await driver.sleep(3000);

    await driver.findElement(By.xpath(`//button[contains(@data-qa,'ItemsModal.newItemBtn')]`)).click();
    await driver.findElement(By.name('name')).sendKeys(Constants.SUBMITTALS_PACKAGE_ITEM_NAME);

    await driver.findElement(By.xpath(`//button[contains(@data-qa,'CreateItemModal.submitBtn')]`)).click();
    await driver.sleep(6000);

	await driver.findElement(By.xpath(`//div[contains(@data-qa,'GlobalCheckbox')]`)).click();
	await driver.findElement(By.xpath(`//button[contains(@data-qa,'SelectItemsModal.createBtn')]`)).click();
	await driver.sleep(3000);

	await driver.findElement(By.name('packageName')).sendKeys(Constants.SUBMITTALS_PACKAGE_NAME);

	//await driver.findElement(By.xpath(`//div[contains(@data-qa,'CreatePackageModal.specSection'/input)]`)).sendKeys(Constants.SUBMITTALS_PACKAGE_SPEC_SECTION);
	//await driver.findElement(By.xpath(`//div[contains(@class,'Select-menu-outer')]`)).click();
	await driver.findElement(By.xpath(`//button[contains(@data-qa,'CreatePackageModal.assignToSubBtn')]`)).click();
	await driver.sleep(3000);

	await driver.findElement(By.xpath(`//div[contains(@data-qa,'AssignToSubModal.submitter')]//input`)).sendKeys(Constants.SUBMITTALS_PACKAGE_SUBMITTER);
	await driver.findElement(By.xpath(`//div[contains(@data-qa,'AssignToSubModal.submittalDueDate')]/input`)).sendKeys(Constants.SUBMITTALS_PACKAGE_DUE_DATE);
	await driver.sleep(1000);
	await driver.findElement(By.xpath(`//div[contains(@class,'DayPicker-Day--selected')]`)).click();
	await driver.sleep(1000);
	await driver.findElement(By.xpath(`//button[contains(@data-qa,'AssignToSubModal.nextBtn')]`)).click();
	await driver.sleep(3000);

	await driver.findElement(By.name('notes')).sendKeys(Constants.SUBMITTALS_PACKAGE_NOTES);
	await driver.findElement(By.xpath(`//button[contains(@data-qa,'EmailPreviewModal.assignBtn')]`)).click();
	await driver.sleep(6000);

	await driver.findElement(By.xpath(`//button[contains(@data-qa,'submittals.pkg-detail.submit-btn')]`)).click();
	await driver.sleep(3000);
	await driver.findElement(By.xpath(`//input[contains(@type,'file')]`)).sendKeys(Constants.SUBMITTALS_PACKAGE_ATTACHMENT);
	await driver.sleep(14000);
	await driver.findElement(By.xpath(`//button[contains(@data-qa,'AssignModal.submitBtn')]`)).click();
	await driver.sleep(5000);



	await driver.findElement(By.xpath(`//button[contains(@data-qa,'submittals.pkg-detail.send-to-design-btn')]`)).click();
	await driver.sleep(4000);
	await driver.findElement(By.xpath(`//input[contains(@type,'file')]`)).sendKeys(Constants.SUBMITTALS_REVIEWER_ATTACHMENT);
	await driver.sleep(14000);
	await driver.findElement(By.xpath(`//div[contains(@data-qa,'SubmittalItemForm.designReviewerId')]//input`)).sendKeys(Constants.SUBMITTALS_PACKAGE_DESIGN_REVIEWER);
	// await driver.findElement(By.xpath(`//div[contains(@data-qa,'SubmittalApprovalForm.designReviewDueDate')]/input`)).sendKeys(Constants.SUBMITTALS_PACKAGE_DESIGN_REVIEWER_DUE_DATE);
	//await driver.sleep(2000);
	await driver.findElement(By.xpath(`//div[contains(@data-qa-id,'5cc85c3652aa6e002832aa5d')]`)).click();
	await driver.sleep(3000);
	// await driver.findElement(By.xpath(`//div[contains(@class,'DayPicker-Day--selected')]`)).click();
	// await driver.sleep(1000);
	await driver.findElement(By.xpath(`//button[contains(@data-qa,'submittals.modal.submittal-approval.submit-btn')]`)).click();
	await driver.sleep(6000);



	await driver.findElement(By.xpath(`//button[contains(@data-qa,'submittals.pkg-detail.submit-review-btn')]`)).click();
	await driver.sleep(3000);
	await driver.findElement(By.name('reviewResponseId')).click();
	await driver.findElement(By.xpath(`//option[contains(@value,'48f29720-832e-43ff-ad44-bdeb01034175')]`)).click();
	await driver.findElement(By.xpath(`//button[contains(@data-qa,'DesignReviewModal.submitBtn')]`)).click();
	await driver.sleep(6000);

	await driver.findElement(By.xpath(`//button[contains(@data-qa,'submittals.pkg-detail.publish-btn')]`)).click();
	await driver.sleep(3000);
	await driver.findElement(By.xpath(`//div[contains(@data-qa,'item-83aca39a-32ce-44a3-b777-3684ddc4470d')]`)).click();
	await driver.findElement(By.xpath(`//button[contains(@data-qa,'PublishModal.nextBtn')]`)).click();

	await driver.sleep(6000);
	await driver.findElement(By.xpath(`//button[contains(@data-qa,'PublishModal.publishBtn')]`)).click();
	await driver.sleep(5000);
}

let CreatePackage = () => it(TEST_CASE, testSteps.bind(this));

export default CreatePackage;