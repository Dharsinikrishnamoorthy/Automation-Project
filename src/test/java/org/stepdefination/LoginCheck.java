package org.stepdefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginCheck {
	public static  WebDriver driver ;
	@Given("To launch browser and maxmize the window")
	public void to_launch_browser_and_maxmize_the_window() {
		WebDriverManager.chromedriver().setup();
		   driver = new ChromeDriver();
		   driver.manage().window().maximize();
	}

	@When("To launch the url application")
	public void to_launch_the_url_application() {
		driver.get("https://lh.inmakesedu.com/");
	}

	@When("To click the login button")
	public void to_click_the_login_button() {
	   WebElement login = driver.findElement(By.xpath("(//a[text()='Login'])[1]"));
	   login.click();
	}

	@When("To enter the email {string}in the email field")
	public void to_enter_the_email_in_the_email_field(String Email) {
	    WebElement email = driver.findElement(By.id("email"));
	    email.sendKeys(Email);
	}

	@When("To enter the passowd {string}in the passowrd field")
	public void to_enter_the_passowd_in_the_passowrd_field(String pass) {
	    WebElement password = driver.findElement(By.id("password"));
	     password.sendKeys(pass);
	}
	@When("To click login button")
	public void to_click_login_button() {
		WebElement login2 = driver.findElement(By.xpath("//button[text()='Login']"));
		   login2.click();
	}
	@Then("To close the Browser")
	public void to_close_the_Browser() {
	   driver.quit();
	}



}
