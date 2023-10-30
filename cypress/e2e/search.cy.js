describe('Search form element check', () => {
    it('Ensure field can be filled', () => {
        const request = 'some request';

        cy.visit('http://localhost:3000')
        cy.get('input[name="search"]').clear().type(request)
        cy.get('input[name="search"]').should('have.value', request)
    });
});
