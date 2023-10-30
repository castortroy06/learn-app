describe('Genre select element check', () => {
    it('Ensure clicking element makes it active', () => {
        cy.visit('http://localhost:3000')

        cy.get('a[data-testid="genre-link-Documentary"]').click().should('have.class', 'active');
    });

});
