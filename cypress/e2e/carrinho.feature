Feature: Adicionar ao Carrinho

Scenario: Test Adicionar ao Carrinho
		Given que estou logado na plataforma da Amazon
		When pesquiso o produto alexa e adiciono ele ao carrinho
		Then o produto deve ser adicionado ao carrinho