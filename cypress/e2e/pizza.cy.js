describe('test the tests', () => {
  it('passes', () => {
    cy.visit('/pizza')
  })
})

describe('Form Inputs Work', () => {
  beforeEach(() => {
    cy.visit('/pizza')
  })

  it('tests the special instructions text area', function(){
    cy.get('#special-text')
      .type('Please don\'t burn it.')
      .should('have.value', 'Please don\'t burn it.');
  })

  it('tests the topping selectors', function(){
    cy.get(':nth-child(1) > input').check();
    cy.get(':nth-child(5) > :nth-child(2) > input').check();
    cy.get(':nth-child(5) > :nth-child(3) > input').check();
    cy.get(':nth-child(4) > input').check();
  })

  it('tests the submit button', function(){
    cy.get('#name-input').type('Miranda Cascione');
    cy.get('#address-input').type('12345 Main St');
    cy.get('#size-dropdown').select('large');
    cy.get('#order-button').click();
  })
})