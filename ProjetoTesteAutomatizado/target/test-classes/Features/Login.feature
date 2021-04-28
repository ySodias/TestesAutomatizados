#language: pt

@Login
Funcionalidade: Login

	Contexto:
		Dado que o usuario esteja na pagina principal do sistema
		
	@RealizarLogin @SmokeTest
	Esquema do Cenario: Realizar Login com Sucesso
		Quando informar o Campo Username como "<usuario>"
		E informar o campo Password como "<senha>"
		E clicar no botao login
		Entao o sistema devera autorizar o login, exibindo pagina contendo o dashboard.
		
		Exemplos:
			|usuario|senha|
			|Admin|admin123|