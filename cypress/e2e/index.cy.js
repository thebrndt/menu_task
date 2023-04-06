
// Tests if the page loads successfully in the first place
describe('The Index Page', () => {
    it('successfully loads', () => {
      cy.visit('/')
    })
  })
  
// Tests if the navigation links are working and clickable in the menu
  describe('Nav Menu Links Working', () => {
    it('clicks a link in the navigation menu', () => {
      cy.visit('/')
      cy.contains('On Demand').click()
    })
  })
  
// Contains tests for the nav menu and some elements at different viewports
  describe('Nav Menus', () => {
    
    it('clicks the navigation menu icon to collapse', () => {
        cy.visit('/')
        cy.contains('menu').click()
      })
    
    context('desktop resolution', () => {
      beforeEach(() => {
        // run these tests as if in a desktop
        // browser with width greater than 768px
        cy.viewport(768, 720)
        cy.visit('/')
      })
  
      it('displays full nav bar', () => {
        cy.get('nav').should('be.visible')
        cy.get('.main--overlay').should('not.be.visible')
      })
    })
    
    context('mobile resolution', () => {
        beforeEach(() => {
          // run these tests as if in a mobile
          // browser with a width of between 240px and 768px
          cy.viewport(240, 720)
          cy.visit('/')
          cy.get('.header-menu-icon').click()
        })
    
        it('displays mobile menu', () => {
          cy.get('nav').should('not.be.visible')
          cy.get('.main--overlay').should('not.be.visible')
        })
      })
    
  })