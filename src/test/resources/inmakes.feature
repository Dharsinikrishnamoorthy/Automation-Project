@Feature
Feature: To validate the course details of Inmakes Learning Hub
 
Scenario: User searches the course and adds it to the cart.
Given To launch the browser and maximise the window
When To launch the URL application
And To pass the text in the search box
And To click the enter button
And To click the add to cart
And To click the remove to cart
Then To close the chrome browser