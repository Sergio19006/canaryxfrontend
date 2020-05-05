// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('http://localhost:8080')
    cy.contains('h3', 'Book unique places to do an unforgattable trip.')
  })
})

describe('Test users', () => {
  it('Visits the app root url', () => {
    cy.visit('http://localhost:8080')
    cy.get('.selector-guest').find('input').invoke('val')
      .then(sometext => expect(sometext).to.be.equal("1"));
    cy.get('.selector-guest').find('.button').first().click();
    cy.get('.selector-guest').find('input').invoke('val')
      .then(sometext => expect(sometext).to.be.equal("0"));
  })
})
