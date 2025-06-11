describe('Cadastro de usuário - cenário positivo', () => {

  // Dados válidos usados para o cadastro de usuário
  const usuario = {
    documento: '43626593827',
    nome: 'Joao Vitor Brito da Rocha',
    email: 'bvitor870@gmail.com',
    nascimento: '30/08/2000',
    ddi: '+55 Brasil',
    telefone: '11916398676',
    senha: 'Feng19280@!'
  };

  beforeEach(() => {
    cy.visit('/'); // home deslogada
    cy.get('#register').click(); // Vai para a tela de cadastro
  });

  // Cenário positivo: realiza cadastro com dados válidos
  it('Deve realizar o cadastro com sucesso', () => {

    //verifica se esta na pagina correta de cadastro “/register”
    cy.url().should('include', '/register');
    cy.get('#document').should('be.visible');

    cy.get('#document').type(usuario.documento);
    cy.get('#name').type(usuario.nome);
    cy.get('#email').type(usuario.email);
    cy.get('#birth_date').type(usuario.nascimento);
    cy.get('#ddi').click();
    cy.contains('.ddi_option', usuario.ddi).click();
    cy.get('#cellphone').type(usuario.telefone);
    cy.get('#password').type(usuario.senha);
    cy.get('#submit_button').click();

    // Valida redirecionamento para pagina home deslogada e visibilidade de botão login
    cy.url().should('eq', '/'); 
    cy.get('#login').should('be.visible');
  });
});


// Cenário negativo: tentar cadastrar com dados inválidos e validar mensagens de erro
describe('Cadastro de usuário - cenário negativo', () => {
  beforeEach(() => {
    cy.visit('/'); // Página inicial deslogada
    cy.get('#register').click(); // Vai para a tela de cadastro
  });

  it('Deve exibir mensagens de erro para dados inválidos', () => {

    //verifica se esta na pagina correta de cadastro “/register”
    cy.url().should('include', '/register');
    cy.get('#document').should('be.visible');

    // Preenche campos inválidos
    cy.get('#document').type('feng123');
    cy.get('#name').type('Jo');
    cy.get('#email').type('joao.vitor.com');
    cy.get('#birth_date').type('10/06/2017');
    cy.get('#ddi').click();
    cy.contains('.ddi_option', '+999 PaísDesconhecido').click();
    cy.get('#cellphone').type('119999999999');
    cy.get('#password').type('SENHA');
    cy.get('#submit_button').click();

    // Valida as mensagens de erro específicas para cada campo inválido (considerando que o sistema exiba mensagens com esses IDs)
    cy.get('#document-helper-text').should('contain', 'Documento inválido');
    cy.get('#name-helper-text').should('contain', 'Nome inválido');
    cy.get('#email-helper-text').should('contain', 'E-mail inválido');
    cy.get('#birth_date-helper-text').should('contain', 'Idade mínima é 18');
    cy.get('#cellphone-helper-text').should('contain', 'Telefone inválido');
    cy.get('#password-helper-text').should('contain', 'Senha fraca');

    // Confirma que o usuário ainda está na tela de cadastro
    cy.url().should('include', '/register');
    cy.get('#submit_button').should('be.visible');
  });
});
