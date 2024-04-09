describe('test',()=> {
it('authorization', () => {

  cy.visit('https://react-dev.digital-office.dso.lanit-tercom.com/');
  cy.wait(1000);
  //cy.get('div#backdrop-portal').should('have.text', 'Введите логин или корпоративный e-mail');
  cy.get('input[name="loginData"]').should('have.value', '');
  cy.get('input[name="loginData"]').type('CrewA');
   cy.get('input[type="password"]').type('8gAlnuR@!'); 
   cy.get('button[type="submit"]').should('have.text', 'Войти');
 // cy.get('button[type="submit"]').click();
 // cy.url().should('include', '/wiki');
})
})