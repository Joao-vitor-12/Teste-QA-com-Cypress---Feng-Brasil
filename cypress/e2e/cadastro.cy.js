describe('Cadastro de usuário - Fluxos positivo e negativo', () => {

  context('Cenário Positivo - Cadastro válido', () => {
    it('Deve realizar o cadastro com sucesso', () => {
      cy.visit('https://fengbrasil.com')

      // Verificando se o botão "Cadastre-se" está visível antes de clicar
      cy.get('#register')
        .should('be.visible')
        .click()

      // Preenchendo CPF válido
      cy.get('#document')
        .should('be.visible')
        .type('43626593827')

      // Preenchendo nome válido
      cy.get('#name')
        .should('be.visible')
        .type('Joao Vitor Brito da Rocha')

      // Preenchendo e-mail válido
      cy.get('#email')
        .should('be.visible')
        .type('bvitor870@gmail.com')

      // Preenchendo data de nascimento válida
      cy.get('#birth_date')
        .should('be.visible')
        .type('30/08/2000')

      // Selecionando DDI do Brasil
      cy.get('#ddi')
        .should('be.visible')
        .click()
      cy.wait(200)
      cy.contains('.ddi_option', '+55 Brasil').click()

      // Preenchendo número de celular válido
      cy.get('#cellphone')
        .should('be.visible')
        .type('11916398676')

      // Preenchendo senha válida
      cy.get('#password')
        .should('be.visible')
        .type('Feng19280@!')

      // Clicando no botão "Prosseguir" para enviar cadastro
      cy.get('#submit_button')
        .should('be.visible')
        .click()
      
      // Aqui você pode validar a mensagem de sucesso, se existir
    })
  })

  context('Cenário Negativo - Cadastro inválido', () => {
    it('Deve exibir mensagens de erro para dados inválidos', () => {
      cy.visit('https://fengbrasil.com')

        // Verificando se o botão "Cadastre-se" está visível antes de clicar
         cy.get('#register')
        .should('be.visible')
        .click()

      // Preenchendo CPF inválido 
      cy.get('#document')
        .should('be.visible')
        .type('feng123') // deverá retornar mensagem de CPF inválido

      // Preenchendo nome inválido 
      cy.get('#name')
        .should('be.visible')
        .type('Jo') // deverá retornar mensagem de nome inválido

      // Preenchendo e-mail inválido 
      cy.get('#email')
        .should('be.visible')
        .type('joao.vitor.com') // deverá retornar mensagem de e-mail inválido

      // Preenchendo data inválida 
      cy.get('#birth_date')
        .should('be.visible')
        .type('10/06/2017') // deverá retornar mensagem de menor de idade 

      // Selecionando DDI inválido 
      cy.get('#ddi')
        .should('be.visible')
        .click()
      cy.wait(200) 
      cy.contains('.ddi_option', '+999 PaísDesconhecido').click() // deverá retornar mensagem de País não encontrado

      // Preenchendo celular inválido (espera erro)
      cy.get('#cellphone')
        .should('be.visible')
        .type('119999999999') // deverá retornar mensagem de número inválido

      // Preenchendo senha inválida 
      cy.get('#password')
        .should('be.visible')
        .type('SENHA') // deverá retornar mensagem de senha inválida
    })
  })
})
