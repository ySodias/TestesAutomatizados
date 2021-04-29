package stepdefinitions;

import org.openqa.selenium.WebDriver;


import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pageobjetcs.LoginPage;

public class LoginSteps {
	
	public static WebDriver driver;

	@Dado("^que o usuario esteja na pagina principal do sistema$")
	public void que_o_usuario_esteja_na_pagina_principal_do_sistema() throws Throwable {
		Hooks.abrirUrl("https://opensource-demo.orangehrmlive.com/");
		driver = Hooks.getDriver();
	}
	
	@Dado("^que usuario esteja logado$")
	public void que_usuario_esteja_logado() throws Throwable {
		LoginPage lp = new LoginPage(driver);
		lp.preencherUsuariuo("Admin");
		lp.preencherSenha("admin123");
		lp.clicarBotaoLogin();
	}

	@Quando("^informar o Campo Username como \"([^\"]*)\"$")
	public void informar_o_Campo_Username_como(String arg1) throws Throwable {
		LoginPage lp = new LoginPage(driver);
		lp.preencherUsuariuo(arg1);	
	}

	@Quando("^informar o campo Password como \"([^\"]*)\"$")
	public void informar_o_campo_Password_como(String arg1) throws Throwable {
		LoginPage lp = new LoginPage(driver);
		lp.preencherSenha(arg1);
	}

	@Quando("^clicar no botao login$")
	public void clicar_no_botao_login() throws Throwable {
		LoginPage lp = new LoginPage(driver);
		lp.clicarBotaoLogin();
	}

	@Entao("^o sistema devera autorizar o login, exibindo pagina contendo o Dashboard\\.$")
	public void o_sistema_devera_autorizar_o_login_exibindo_pagina_contendo_o_Dashboard() throws Throwable {
		LoginPage lp = new LoginPage(driver);
		lp.validarDashboard();
	}
}
