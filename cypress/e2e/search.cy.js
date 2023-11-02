describe('Search form element check', () => {
    it('Ensure field can be filled', () => {
        const request = 'some request';

        cy.visit('/');
        cy.get('input[name="search"]').clear().type(request)
        cy.get('input[name="search"]').should('have.value', request)
    });
});
