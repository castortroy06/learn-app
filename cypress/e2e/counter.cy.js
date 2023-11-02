describe('Counter element check', () => {
    it('Ensure Counter element has increase and descrease buttons', () => {
        cy.visit('/');

        cy.get('.increase-button').should('be.visible');
        cy.get('.decrease-button').should('be.visible');
    });

});
