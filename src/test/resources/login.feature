@smoke
Feature:To validate the login details of Inmakes learning hub

Scenario Outline: To login with valid and invaild credentials
Given To launch browser and maxmize the window
When To launch the url application
And To click the login button
And To enter the email "<emailId>"in the email field
And To enter the passowd "<passworddata>"in the passowrd field
And To click login button
Then To close the Browser

Examples:
|emailId              |passworddata|
|Sini@gmail.com       |56456       |
|Ammu@gmail.com       |789654      |
|Jass@gmail.com       |564123      |
|Priya@gmail.com      |525252      |
|Sree@gmail.com       |223366      |