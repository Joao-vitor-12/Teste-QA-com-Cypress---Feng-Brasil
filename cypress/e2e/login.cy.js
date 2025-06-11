describe('Login de usuário', () => {
  // Dados fixos para realizar login (email e senha cadastrados anteriormente)
  const email = 'bvitor870@gmail.com';
  const senha = 'Feng19280@!';

  beforeEach(() => {
    cy.visit('/'); //home deslogada
    cy.get('#login').click();
  });

  // Preenchendo com os dados válidos para realizar o login 
  it('Deve realizar login com sucesso e fazer logout', () => {
    cy.get('#login_email').type(email);
    cy.get('#login_password').type(senha);
    cy.get('#login_button').click();

    // Validações após o login, verifica se foi realizado com sucesso 
    cy.url().should('include', '/home'); 
    cy.get('.welcome_message').should('contain.text', 'Bem-vindo');
    cy.get('.welcome_header').should('contain.text', 'Olá');
    
    // Realizando o logout
    cy.get('#logout_button').click();

    // Valida que voltou para a home deslogada
    cy.url().should('eq', '/');
    cy.get('#login').should('be.visible');
  });
});


// Cenário negativo: Tentar realizar login com dados inválidos
describe('Login de usuário com dados inválidos', () => {

  beforeEach(() => {
    cy.visit('/'); //home deslogada
    cy.get('#login').click();
  });

  it('Deve exibir mensagens de erro para login inválido', () => {

    // Tenta logar sem preencher campos
    cy.get('#login_button').click();
    
    // Verificações das mensagens de erro (considerando que o sistema exiba mensagens com essas Class)
    cy.get('.error-message').should('contain', 'Preencha todos os campos');

    // Preenchendo com email inválido e senha incorreta
    cy.get('#login_email').type('joao.vitor.com');
    cy.get('#login_password').type('senha123');
    cy.get('#login_button').click();

    // Valida mensagem de erro para e-mail e senha incorretas
    cy.get('.error-message').should('contain', 'E-mail ou senha inválidos');

    // Verifica que ainda está na página de login
    cy.url().should('include', '/login');
  });
});
