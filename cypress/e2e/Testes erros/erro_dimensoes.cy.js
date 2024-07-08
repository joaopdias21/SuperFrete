beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
});

       
       Cypress.on('uncaught:exception', (err, runnable) => {
           return false;
       });

   describe('Teste da tela de cálculo',()=>{
    beforeEach(() => {
        cy.visit('http://web.superfrete.com/');
        cy.wait(10000);
        cy.viewport(1366, 768);
   })
   
it('Valida o fluxo de erro dimensões abaixo do permitido', () => {
    cy.get('#originPostcode').type('08090-284');
    cy.get('#object_format').click()
    cy.get('.Mui-selected').click();
    cy.get('#weight').click()
    cy.get('[data-value="3"]').click();
    cy.get('#packageHeight').type('0.3');
    cy.get('#packageWidth').type('7');
    cy.get('#packageDepth').type('12');
    cy.get('#destinationPostcode').type('05407-002');
    cy.get('[data-cy="calculator-submit"]').click();

    cy.contains('Altura mínima 0.4 cm.')
    cy.contains('Largura mínima 8 cm.')
    cy.contains('Comprimento mínimo 13 cm.')
})
})