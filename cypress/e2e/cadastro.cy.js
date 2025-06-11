describe('Cadastro de usuário', () => {
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
    cy.visit('https://fengbrasil.com');
    cy.get('#register').click();
  });

  // Cenário positivo: realiza cadastro com dados válidos
  it('Deve realizar o cadastro com sucesso', () => {
    cy.get('#document').type(usuario.documento);
    cy.get('#name').type(usuario.nome);
    cy.get('#email').type(usuario.email);
    cy.get('#birth_date').type(usuario.nascimento);
    cy.get('#ddi').click();
    cy.contains('.ddi_option', usuario.ddi).click();
    cy.get('#cellphone').type(usuario.telefone);
    cy.get('#password').type(usuario.senha);
    cy.get('#submit_button').click();

    // Valida que o cadastro foi concluído e o usuário está na página inicial
    cy.url().should('eq', 'https://fengbrasil.com/');
    cy.contains('Cadastre-se').should('be.visible'); 
  });

  // Cenário negativo: tenta cadastrar com dados inválidos e valida mensagens de erro
  it('Deve exibir mensagens de erro para dados inválidos', () => {
    cy.get('#document').type('feng123'); // Documento inválido (texto não numérico)
    cy.get('#name').type('Jo');           // Nome muito curto/inválido
    cy.get('#email').type('joao.vitor.com'); // Email inválido (formato incorreto)
    cy.get('#birth_date').type('10/06/2017'); // Data de nascimento inválida (menor de 18 anos)
    cy.get('#ddi').click();
    cy.contains('.ddi_option', '+999 PaísDesconhecido').click(); // Código de país inválido
    cy.get('#cellphone').type('119999999999'); // Telefone inválido (número muito longo)
    cy.get('#password').type('SENHA');          // Senha fraca
    cy.get('#submit_button').click();

    // Valida as mensagens de erro específicas para cada campo inválido (considerando que o sistema exiba mensagens com esses IDs)
    cy.get('#document-helper-text').should('contain', 'Documento inválido');
    cy.get('#name-helper-text').should('contain', 'Nome inválido');
    cy.get('#email-helper-text').should('contain', 'E-mail inválido');
    cy.get('#birth_date-helper-text').should('contain', 'Idade mínima é 18');
    cy.get('#cellphone-helper-text').should('contain', 'Telefone inválido');
    cy.get('#password-helper-text').should('contain', 'Senha fraca');
  });
});
