package org.stepdefination;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources",
glue="org.stepdefination",
monochrome = true,
dryRun = false,
strict = false,
snippets = SnippetType.UNDERSCORE,
tags = "@Feature,@Regression,@smoke",
plugin = {"html:Reports","junit:Reports\\junitreport.xml","json:Reports\\jsonreport.json"})

public class TestRunClass {

}
