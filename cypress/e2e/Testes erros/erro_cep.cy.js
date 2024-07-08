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
   
   it('Valida o fluxo de erro CEP origem', () => {
    cy.get('#object_format').click()
    cy.get('.Mui-selected').click();
    cy.get('#weight').click()
    cy.get('[data-value="3"]').click();
    cy.get('#packageHeight').type('02');
    cy.get('#packageWidth').type('11');
    cy.get('#packageDepth').type('16');
    cy.get('#destinationPostcode').type('05407-002');
    cy.get('[data-cy="calculator-submit"]').click();

    cy.contains('CEP de origem é obrigatório')

   })

   it('Valida o fluxo de erro CEP destino', () => {
    cy.get('#originPostcode').type('08090-284');
    cy.get('#object_format').click()
    cy.get('.Mui-selected').click();
    cy.get('#weight').click()
    cy.get('[data-value="3"]').click();
    cy.get('#packageHeight').type('02');
    cy.get('#packageWidth').type('11');
    cy.get('#packageDepth').type('16');
    cy.get('[data-cy="calculator-submit"]').click();

    cy.contains('CEP de destino é obrigatório')
})

})