import { fakerPT_BR as faker } from "@faker-js/faker"

beforeEach(()=>{
    cy.visit('http://localhost:3000/')
})

context('Cadastrar um usuario corretamente', () => {
    let password = faker.internet.password({ length: 8, memorable: true})
    it('Preencher os campos corretamente', () => {
       cy.cadastroUsuario(faker.internet.username(), faker.internet.email(), password);
})
})

context('Cadastrar um usuario com senha incorreta', () => {
    it('Preencher os campos incorretamente', () => {
        const invalidEmail = "emailinvalido.com";
        const invalidPassword = "123";
       cy.cadastroUsuario('Teste', invalidEmail, invalidPassword);
})
})