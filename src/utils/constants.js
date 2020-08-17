export const Constants = {
	LOGIN_URL: 'https://magazine.trivago.com/',
	SEARCH_INPUT: 'Singapore',
	EMAIL_INPUT: 'abc12@gmail.com',
	CONTACT_TEXT: 'Trivago Automation sample testing',
    CONTACT_NAME:  'Sonali',
};

export const getRandomEmailGenerator = () => (`${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}@abc.com`);