# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)
   
   1. Within a Github action that runs whenever code is pushed.

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

    1. No, because a "message" feature can having many moving parts within it. I would try to break down it into smaller components and use unit testing on them.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

    1. Yes, this is an example of a component of the "message" feature that I would use for a unit test to check the functionality of the feature as a whole.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

    1. There will be no browser UI that pops up when running the tests, the tests will just be performed and we will see the output.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

    1.  `await page.goto('http://127.0.0.1:5500');`
        
        `await page.click('body img');` 
        
        `await page.waitForTimeout(500);`
