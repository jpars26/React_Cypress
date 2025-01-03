describe('Testando a tela inicial e vendo se os componentes estao nela', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  context('Verificar se a url está correta', () => {
    it('Utilizando o metodo url', () => {
      cy.url().should('eq', 'http://localhost:3000/');
    })
  })

  context('Verificando se os componentes da pagina estão corretos', () => {
    it('Verificar se o titulo está correto e as outras partes', () => {
      cy.getByData('titulo-principal').should('contain', 'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!');
      cy.get('.Inicio_vantagens__iwnyv').should('contain', 'Vantagens do nosso banco:');
    })
  })
})

