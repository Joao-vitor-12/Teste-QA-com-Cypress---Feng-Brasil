describe("Cadastro válido e inválido - Login", () => {
    
  context("Cenário Positivo - Login válido", () => {
    it("Deve realizar login com sucesso e fazer logout", () => {
      cy.visit("https://fengbrasil.com");

      // Verificando se o botão "cadastro" está visível antes de clicar
      cy.get("#login").should("be.visible").click();

      // Preenchendo e-mail válido
      cy.get("#login_email").should("be.visible").type("bvitor870@gmail.com");

      // Preenchendo senha válida
      cy.get("#login_password").should("be.visible").type("Feng19280@!");

      // Clicando no botão "Entrar"
      cy.get("#login_button").should("be.visible").click();

      cy.wait(200);

      // Verificando se o login foi realizado com sucesso
      cy.get(".welcome_message").should("contain.text", "Bem-vindo(a),QA!");

      cy.get(".welcome_header").should("contain.text", "Olá, QA!");

      // Realizando logout
      cy.get("#logout_button").should("be.visible").click();
    });
  });

  context("Cenário Negativo - Login inválido", () => {
    it("Deve exibir mensagens de erro para login inválido", () => {
      cy.visit("https://fengbrasil.com");

      // Verificando se o botão "cadastro" está visível antes de clicar
      cy.get("#login").should("be.visible").click();

      // Clicando diretamente em "Entrar" sem preencher os campos
      cy.get("#login_button").should("be.visible").click(); // deverá retornar mensagem para preencher os campos primeiro

      // Preenchendo e-mail inválido
      cy.get("#login_email").should("be.visible").type("bvitor870.gmail.com"); // deverá retornar mensagem de e-mail incorreto

      // Preenchendo senha inválida
      cy.get("#login_password").should("be.visible").type("19280@!"); // deverá retornar mensagem de senha inválida
    });
  });
});
