package runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "classpath:Features"
		,glue= {"stepdefinitions"}
		,tags = {"@PesquisarUsuario"}
		,plugin = {"pretty", "html:target/cucumber-reports"} //Usado para alterar formas de leitura de testes
		,monochrome = true
		)
public class TesteRunner {

}
