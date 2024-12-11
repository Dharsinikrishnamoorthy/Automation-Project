package org.stepdefination;


	import java.awt.AWTException;
import java.awt.Robot;
	import java.awt.event.KeyEvent;
	import org.openqa.selenium.By;
	import org.openqa.selenium.WebDriver;
	import org.openqa.selenium.WebElement;
	import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

	public class CourseSearch {
		public static  WebDriver driver ;
		@Given("To launch the browser and maximise the window")
		public void to_launch_the_browser_and_maximise_the_window() {
		   WebDriverManager.chromedriver().setup();
		   driver = new ChromeDriver();
		   driver.manage().window().maximize();
		   
		}

		@When("To launch the URL application")
		public void to_launch_the_URL_application() {
			driver.get("https://lh.inmakesedu.com/");
		}

		@When("To pass the text in the search box")
		public void to_pass_the_text_in_the_search_box() {
			 WebElement search = driver.findElement(By.name("query"));
			 search.sendKeys("Software Testing");
		}

		@When("To click the enter button")
		public void to_click_the_enter_button() throws AWTException {
		Robot r = new Robot();
		r.keyPress(KeyEvent.VK_ENTER);
		r.keyRelease(KeyEvent.VK_ENTER);
		    
		}

		@When("To click the add to cart")
		public void to_click_the_add_to_cart() throws InterruptedException {
			Thread.sleep(3000);
			WebElement cart= driver.findElement(By.id("btn_cart_38"));
		    cart.click();
		}

		@When("To click the remove to cart")
		public void to_click_the_remove_to_cart() {
	        WebElement remove = driver.findElement(By.id("btn_cart_38"));
		    remove.click();
		}

		@Then("To close the chrome browser")
		public void to_close_the_chrome_browser() {
		    driver.quit();
		}


	}



