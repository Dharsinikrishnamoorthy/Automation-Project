$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Checklink.feature");
formatter.feature({
  "name": "To validate the important links in Inmakes Learning Hub",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "name": "To check the links",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "To launch  browser and maximise the window",
  "keyword": "Given "
});
formatter.match({
  "location": "CheckLink.to_launch_browser_and_maximise_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To launch  URL application",
  "keyword": "When "
});
formatter.match({
  "location": "CheckLink.to_launch_URL_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To scroll down to the bottom of the page",
  "keyword": "And "
});
formatter.match({
  "location": "CheckLink.to_scroll_down_to_the_bottom_of_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the Home link button",
  "keyword": "And "
});
formatter.match({
  "location": "CheckLink.to_click_the_Home_link_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the All Course link button",
  "keyword": "And "
});
formatter.match({
  "location": "CheckLink.to_click_the_All_Course_link_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the Login link button",
  "keyword": "And "
});
formatter.match({
  "location": "CheckLink.to_click_the_Login_link_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the User Agreement link button",
  "keyword": "And "
});
formatter.match({
  "location": "CheckLink.to_click_the_User_Agreement_link_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the Privacy Policy link button",
  "keyword": "And "
});
formatter.match({
  "location": "CheckLink.to_click_the_Privacy_Policy_link_button()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/inmakes.feature");
formatter.feature({
  "name": "To validate the course details of Inmakes Learning Hub",
  "description": " ",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature"
    }
  ]
});
formatter.scenario({
  "name": "User searches the course and adds it to the cart.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature"
    }
  ]
});
formatter.step({
  "name": "To launch the browser and maximise the window",
  "keyword": "Given "
});
formatter.match({
  "location": "CourseSearch.to_launch_the_browser_and_maximise_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To launch the URL application",
  "keyword": "When "
});
formatter.match({
  "location": "CourseSearch.to_launch_the_URL_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the text in the search box",
  "keyword": "And "
});
formatter.match({
  "location": "CourseSearch.to_pass_the_text_in_the_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the enter button",
  "keyword": "And "
});
formatter.match({
  "location": "CourseSearch.to_click_the_enter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "CourseSearch.to_click_the_add_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the remove to cart",
  "keyword": "And "
});
formatter.match({
  "location": "CourseSearch.to_click_the_remove_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the chrome browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CourseSearch.to_close_the_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/login.feature");
formatter.feature({
  "name": "To validate the login details of Inmakes learning hub",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To login with valid and invaild credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "To launch browser and maxmize the window",
  "keyword": "Given "
});
formatter.step({
  "name": "To launch the url application",
  "keyword": "When "
});
formatter.step({
  "name": "To click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "To enter the email \"\u003cemailId\u003e\"in the email field",
  "keyword": "And "
});
formatter.step({
  "name": "To enter the passowd \"\u003cpassworddata\u003e\"in the passowrd field",
  "keyword": "And "
});
formatter.step({
  "name": "To click login button",
  "keyword": "And "
});
formatter.step({
  "name": "To close the Browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emailId",
        "passworddata"
      ]
    },
    {
      "cells": [
        "Sini@gmail.com",
        "56456"
      ]
    },
    {
      "cells": [
        "Ammu@gmail.com",
        "789654"
      ]
    },
    {
      "cells": [
        "Jass@gmail.com",
        "564123"
      ]
    },
    {
      "cells": [
        "Priya@gmail.com",
        "525252"
      ]
    },
    {
      "cells": [
        "Sree@gmail.com",
        "223366"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To login with valid and invaild credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "To launch browser and maxmize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginCheck.to_launch_browser_and_maxmize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To launch the url application",
  "keyword": "When "
});
formatter.match({
  "location": "LoginCheck.to_launch_the_url_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCheck.to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter the email \"Sini@gmail.com\"in the email field",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCheck.to_enter_the_email_in_the_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter the passowd \"56456\"in the passowrd field",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCheck.to_enter_the_passowd_in_the_passowrd_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCheck.to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginCheck.to_close_the_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To login with valid and invaild credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "To launch browser and maxmize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginCheck.to_launch_browser_and_maxmize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To launch the url application",
  "keyword": "When "
});
formatter.match({
  "location": "LoginCheck.to_launch_the_url_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCheck.to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter the email \"Ammu@gmail.com\"in the email field",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCheck.to_enter_the_email_in_the_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter the passowd \"789654\"in the passowrd field",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCheck.to_enter_the_passowd_in_the_passowrd_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCheck.to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginCheck.to_close_the_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To login with valid and invaild credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "To launch browser and maxmize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginCheck.to_launch_browser_and_maxmize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To launch the url application",
  "keyword": "When "
});
formatter.match({
  "location": "LoginCheck.to_launch_the_url_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCheck.to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter the email \"Jass@gmail.com\"in the email field",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCheck.to_enter_the_email_in_the_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter the passowd \"564123\"in the passowrd field",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCheck.to_enter_the_passowd_in_the_passowrd_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCheck.to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginCheck.to_close_the_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To login with valid and invaild credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "To launch browser and maxmize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginCheck.to_launch_browser_and_maxmize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To launch the url application",
  "keyword": "When "
});
formatter.match({
  "location": "LoginCheck.to_launch_the_url_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCheck.to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter the email \"Priya@gmail.com\"in the email field",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCheck.to_enter_the_email_in_the_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter the passowd \"525252\"in the passowrd field",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCheck.to_enter_the_passowd_in_the_passowrd_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCheck.to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginCheck.to_close_the_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To login with valid and invaild credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "To launch browser and maxmize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginCheck.to_launch_browser_and_maxmize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To launch the url application",
  "keyword": "When "
});
formatter.match({
  "location": "LoginCheck.to_launch_the_url_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCheck.to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter the email \"Sree@gmail.com\"in the email field",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCheck.to_enter_the_email_in_the_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter the passowd \"223366\"in the passowrd field",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCheck.to_enter_the_passowd_in_the_passowrd_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCheck.to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginCheck.to_close_the_Browser()"
});
formatter.result({
  "status": "passed"
});
});