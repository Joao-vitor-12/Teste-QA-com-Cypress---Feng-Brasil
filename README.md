# Teste QA - Automação com Cypress

**Nome:** João Vitor Brito da Rocha  
**Idade:** 24 anos  

Este repositório contém as respostas teóricas e automações de testes desenvolvida com Cypress para validação de **cadastro** e **login**

---

## ✅ Questão 1 - Cadastro com sucesso

Teste automatizado em Cypress que realiza o cadastro com sucesso utilizando um telefone com DDI brasileiro:

- Acessa a página inicial
- Clica em "Cadastre-se"
- Preenche todos os dados válidos
- Seleciona DDI +55 (Brasil)
- Finaliza o cadastro com sucesso
- Código:
[`cadastro.cy.js`](https://github.com/Joao-vitor-12/TesteQA-Feng-Brasil/blob/main/cypress/e2e/cadastro.cy.js)

---

## ✅ Questão 2 - Login com sucesso

Utilizando os dados de cadastro da questão 1:

- Acessa a página inicial
- Clica em "Login"
- Insere e-mail e senha válidos
- Verifica a mensagem de boas-vindas
- Realiza o logout

---

## ❌ Questão 3 - Valores inválidos no campo **Documento**

- 'feng123' — contém letras  
- '12345' — possui apenas 5 caracteres  
- '1234567890123' — possui 13 caracteres  
- 'abcde12345' — mistura letras e números  
- '000' — valor muito curto e inválido  

---

## ❌ Questão 4 - Valores inválidos no campo **Nome completo**

- 'Jo' — apenas 2 caracteres  
- '*&%$#' — apenas caracteres especiais  
- '   ' — apenas espaços  
-'`J1o' — contém números  
- '.' — apenas um ponto  

---

## ❌ Questão 5 - Valores inválidos no campo **E-mail**

- 'joao.vitor.com' — falta o `@`  
- 'joao@' — falta o domínio  
- '@gmail.com' — falta o nome de usuário  
- 'joao@@gmail.com' — dois `@`  
- 'joao.vitor@com' — domínio incompleto  

---

## ❌ Questão 6 - Valores inválidos no campo **Data de nascimento**

- '2025/06/10' — formato inválido (ano primeiro)  
- '10/06/2017' — menor de idade  
- '31/02/1990' — data inexistente  
- '00/12/1995' — dia inválido  
- '15-08-1995' — separador inválido (deve ser barra)  

---

## ❌ Questão 7 - Valores inválidos no campo **Telefone**

- '123abc7890' — contém letras  
- '119999999999' — mais de 11 dígitos  
- '11 912345678' — contém espaços  
- '+5511987654321' — contém caractere especial  
- '99999-9999' — contém traço  

---

## ❌ Questão 8 - Valores inválidos no campo **Senha**

- 'senha123' — apenas letras minúsculas e números  
- 'Senha@' — menos de 8 caracteres  
- '12345678' — apenas números  
- 'SENHA' — apenas letras maiúsculas  
- 'senha@teste' — sem letras maiúsculas e sem números  

---

## 🛠️ Regras de Validação dos Campos

| Campo              | Regra                                                                 |
|--------------------|-----------------------------------------------------------------------|
| Documento          | Apenas números, entre 6 e 12 caracteres                               |
| Nome completo      | Entre 3 e 150 caracteres, sem números ou símbolos                     |
| E-mail             | Deve conter `@`, domínio, e até 150 caracteres                        |
| Data de nascimento | Formato DD/MM/AAAA e idade mínima de 18 anos                         |
| Telefone           | Apenas números, até 11 dígitos                                       |
| Senha              | Letras maiúsculas, minúsculas, números, especiais, no mínimo 8 chars |

**Todos os campos são obrigatórios.**

---

## 💻 Tecnologias utilizadas

- [Cypress](https://www.cypress.io/)
- JavaScript (ES6)
- Node.js

