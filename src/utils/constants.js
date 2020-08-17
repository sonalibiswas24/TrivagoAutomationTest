export const Constants = {
	LOGIN_URL: 'https://magazine.trivago.com/',

	SEARCH_INPUT: 'Singapore',
	EMAIL_INPUT: 'abc12@gmail.com',

	SUBMITTALS_PACKAGE_ITEM_NAME: 'item1',
	SUBMITTALS_PACKAGE_NAME: 'Assigning package to Submitter',
	SUBMITTALS_PACKAGE_SPEC_SECTION: '1087634',

	SUBMITTALS_PACKAGE_SUBMITTER: 'sonali.jana+fgh@plangrid.com',
	SUBMITTALS_PACKAGE_DUE_DATE: '8/28/2019',

	SUBMITTALS_PACKAGE_NOTES: 'This is my first FTUX Automation code. Feeling Happy :)',
	SUBMITTALS_PACKAGE_ATTACHMENT: '/Users/sonalij/Desktop/Automation/PG-JS-Automation/src/Submittal_packages_06-20-2019.pdf',

    SUBMITTALS_REVIEWER_ATTACHMENT: '/Users/sonalij/Desktop/Automation/PG-JS-Automation/src/47ca99bf-5a50-40f0-812b-a03a6db4d453.pdf',
	SUBMITTALS_PACKAGE_DESIGN_REVIEWER: 'sonali.jana+76456@plangrid.com',
	SUBMITTALS_PACKAGE_DESIGN_REVIEWER_DUE_DATE: '8/30/2019'
};

export const getRandomEmailGenerator = () => (`${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}@abc.com`);
