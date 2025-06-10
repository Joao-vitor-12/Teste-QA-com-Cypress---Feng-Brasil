# Teste QA – Recrutamento FENG

Este repositório contém a resolução de um teste de QA solicitado pela FENG, utilizando **Cypress** para testes automatizados de um sistema web.

---

## ✅ Testes Automatizados

### 1️⃣ Cadastro com sucesso (telefone com DDI brasileiro)

// Descreve o grupo de teste para cadastro
describe('Cadastro com sucesso', () => {

  // Define um caso de teste
  it('Deve realizar o cadastro com telefone DDI brasileiro', () => {

    // Acessa a página de cadastro
    cy.visit('/register');

    // Preenche o campo nome
    cy.get('input[name="nome"]').type('João da Silva');

    // Preenche o campo documento com um número válido
    cy.get('input[name="documento"]').type('12345678901');

    // Preenche o campo e-mail com um endereço válido
    cy.get('input[name="email"]').type('joao.silva@email.com');

    // Preenche a data de nascimento (formato ISO porque a maioria dos input[type=date] usam esse formato)
    cy.get('input[name="dataNascimento"]').type('1990-05-15');

    // Preenche o telefone com DDI do Brasil (assumindo que o sistema aceita apenas o número)
    cy.get('input[name="telefone"]').type('21999999999');

    // Preenche a senha com um valor forte
    cy.get('input[name="senha"]').type('Senha@123');

    // Confirma a senha
    cy.get('input[name="confirmarSenha"]').type('Senha@123');

    // Clica no botão de cadastro (submit)
    cy.get('button[type="submit"]').click();

    // Verifica se o redirecionamento foi para a home logada
    cy.url().should('include', '/home');
  });
});

