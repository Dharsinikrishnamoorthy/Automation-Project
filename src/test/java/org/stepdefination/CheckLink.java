package org.stepdefination;

import static org.testng.Assert.assertEquals;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.asserts.SoftAssert;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class CheckLink {
	public static  WebDriver driver ;
	@Given("To launch  browser and maximise the window")
	public void to_launch_browser_and_maximise_the_window() {
		WebDriverManager.chromedriver().setup();
		   driver = new ChromeDriver();
		   driver.manage().window().maximize();
	}

	@When("To launch  URL application")
	public void to_launch_URL_application() {
		driver.get("https://lh.inmakesedu.com/");
	}

	@When("To scroll down to the bottom of the page")
	public void to_scroll_down_to_the_bottom_of_the_page() {
	    JavascriptExecutor js = (JavascriptExecutor)driver;
	    WebElement imp = driver.findElement(By.xpath("//div[@class='col-md-12 pt-4 pb-4 footer-header footer-header-link footer-border-bottom']"));
	    js.executeScript("arguments[0].scrollIntoView(false)", imp);
	}

	@When("To click the Home link button")
	public void to_click_the_Home_link_button() {
		String title = driver.getTitle();
		SoftAssert s = new SoftAssert();
		s.assertTrue(title.contains("inmakes"),"Check your page title");
		WebElement home = driver.findElement(By.xpath("//a[text()='Home']"));
		home.click();
		
	   
	}

	@When("To click the All Course link button")
	public void to_click_the_All_Course_link_button() {
		WebElement course = driver.findElement(By.xpath("(//a[text()='All course'])[2]"));
		course.click();
	  
	}

	@When("To click the Login link button")
	public void to_click_the_Login_link_button() {
		WebElement link = driver.findElement(By.xpath("(//a[text()='Login'])[2]"));
		link.click();
	}

	@When("To click the User Agreement link button")
	public void to_click_the_User_Agreement_link_button() {
		WebElement user = driver.findElement(By.xpath("//a[text()='User agreement']"));
		user.click();
	}

	@When("To click the Privacy Policy link button")
	public void to_click_the_Privacy_Policy_link_button() {
		WebElement privacy = driver.findElement(By.xpath("//a[text()='Privacy policy']"));
		privacy.click();
	}

}
